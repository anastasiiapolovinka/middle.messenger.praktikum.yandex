import Handlebars from 'handlebars';

export default Handlebars.compile(`
   <div class="formContainer">
      <h1 class="fontL">{{title}}</h1>
      <form class="formContent" id="loginForm">
         <div class="formItems">
            <input id="login" class="inputtxt" type="text" placeholder="" name="login" value="{{login}}" />
            <label for="login">Логин</label>
            <span class="error" id="loginError"></span>
         </div>
         <div class="formItems">
            <input id="password" class="inputtxt" type="password" placeholder="" name="password" value="{{password}}" />
            <label for="password">Пароль</label>
            <span class="error" id="passwordError"></span>
         </div>
         <div class="loginBtns">
         <button class="mainBtn" type="submit">{{mainButtonText}}</button>
         <a href="./register" class="linkBtn" type="button">{{linkButtonText}}</a>
         </div>
      </form>
   </div>
`);
