export default `
   <a href="{{url}}">
      <div class="chatPreview">
         <div class="avatar">
            <img src="../../images/avatar.png" alt="avatar" />
         </div>
         <div class="messagePreview">
            <div class="name">{{name}}</div>
            <div class="content">{{preview}}</div>
         </div>
         <div class="messageInfo">
            <div class="time">{{time}}</div>
            <div class="unread">{{unread}}</div>
         </div>
      </div>
   </a>
`;
