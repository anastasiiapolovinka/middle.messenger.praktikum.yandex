import Handlebars from 'handlebars';

export default Handlebars.compile(`
   <div class="container">
         <h1>{{title}}</h1>
         <span>{{errormassage}}</span>
         <a href="./chat" class="linkBtn">{{linkButtonText}}</a>
   </div>
`);
