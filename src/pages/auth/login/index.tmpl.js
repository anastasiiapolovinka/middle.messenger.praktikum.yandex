import Handlebars from 'handlebars';

export default Handlebars.compile(`
   <div>
      <form>
         <h1>{{title}}<h1>
         <input/>
         <input/>
         <button type="submit">Авторизоваться</button>
         <button>Нет аккаунта?</button>
      </form>
   </div>
  `);
