export default `
   <input id="{{name}}" class="inputtxt" type="{{#if type}}{{type}}{{else}}text{{/if}}" placeholder="" name="{{name}}" value="{{value}}" {{#if pattern}}pattern="{{pattern}}"{{/if}} />
   <label for="{{name}}">{{label}}</label>
   <span class="error" id="{{name}}Error">Неверный {{label}}</span>
`;
