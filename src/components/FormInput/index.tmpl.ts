export default `
   <div class="formProfile">
      <label for="{{name}}">{{label}}</label>
      <input id="{{name}}" class="profileInput" type="{{type}}"
         {{#if pattern}}pattern="{{pattern}}"{{/if}}
       placeholder="{{placeholder}}" name="{{name}}" value="{{value}}" />
   </div>
`;
