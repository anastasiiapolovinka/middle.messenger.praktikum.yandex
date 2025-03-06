import EventBus from "./EventBus";

const WSTransportEvents = {
  Error: "error",
  Connected: "connected",
  Close: "close",
  Message: "message",
};

export class WSTransport extends EventBus {
  _socket?: WebSocket;
  _pingInterval?: ReturnType<typeof setInterval>;
  _pingIntervalTime = 30000;
  _url: string;

  constructor(url: string) {
    super();
    this._url = url;
  }

  send(data: string | number | object) {
    if (!this._socket) {
      throw new Error("Socket is not connected!");
    }
    if (this._socket.readyState === WebSocket.OPEN) {
      this._socket.send(JSON.stringify(data));
    }
  }

  connect(): Promise<void> {
    if (this._socket) {
      throw new Error("The socket is already connected!");
    }
    this._socket = new WebSocket(this._url);
    this.subscribe(this._socket);
    this.setupPing();

    return new Promise((resolve, reject) => {
      this.on(WSTransportEvents.Error, reject);
      this.on(WSTransportEvents.Connected, () => {
        this.off(WSTransportEvents.Error, reject);
        resolve();
      });
    });
  }

  close() {
    this._socket?.close();
    clearInterval(this._pingInterval);
  }

  setupPing() {
    this._pingInterval = setInterval(() => {
      this.send({ type: "ping" });
    }, this._pingIntervalTime);

    this.on(WSTransportEvents.Close, () => {
      clearInterval(this._pingInterval);
      this._pingInterval = undefined;
    });
  }

  subscribe(socket: WebSocket) {
    socket.addEventListener("open", () => {
      this.emit(WSTransportEvents.Connected);
    });
    socket.addEventListener("close", () => {
      this.emit(WSTransportEvents.Close);
    });
    socket.addEventListener("error", (e) => {
      this.emit(WSTransportEvents.Error, e);
    });
    socket.addEventListener("message", (message) => {
      try {
        const data = JSON.parse(message.data);
        if (["pong", "user connected"].includes(data?.type)) {
          return;
        }
        this.emit(WSTransportEvents.Message, data);
      } catch (error) {
        console.error(error);
      }
      this.emit(WSTransportEvents.Connected);
    });
  }
}
