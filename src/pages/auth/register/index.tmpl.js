import Handlebars from 'handlebars';

export default Handlebars.compile(`
   <div>
      <form>
         <h1>{{title}}<h1>
         <input/>
         <input/>
         <input/>
         <input/>
         <input/>
         <input/>
         <input/>
         <button type="submit">Зарегестрироваться</button>
         <a href="/signin">Войти</a>
      </form>
   </div>
  `);
