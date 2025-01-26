import Handlebars from 'handlebars';

export default Handlebars.compile(`
   <div class="formContainer">
      <h1 class="fontL">{{title}}</h1>
      <form id="registerForm">
         <div class="formItems">
            <input id="email" class="inputtxt" type="text" placeholder="" name="email" value="{{email}}" />
            <label for="email">Почта</label>
            <span class="error" id="emailError"></span>
         </div>
         <div class="formItems">
            <input id="login" class="inputtxt" type="text" placeholder="" name="login" value="{{login}}" />
            <label for="login">Логин</label>
            <span class="error" id="loginError"></span>
         </div>
         <div class="formItems">
            <input id="first_name" class="inputtxt" type="text" placeholder="" name="first_name" value="{{first_name}}" />
            <label for="first_name">Имя</label>
            <span class="error" id="first_nameError"></span>
         </div>
         <div class="formItems">
            <input id="second_name" class="inputtxt" type="text" placeholder="" name="second_name" value="{{second_name}}" />
            <label for="second_name">Фамилия</label>
            <span class="error" id="second_nameError"></span>
         </div>
         <div class="formItems">
            <input id="phone" class="inputtxt" type="text" placeholder="" name="phone" value="{{phone}}" />
            <label for="phone">Телефон</label>
            <span class="error" id="phoneError"></span>
         </div>
         <div class="formItems">
            <input id="password" class="inputtxt" type="password" placeholder="" name="password" value="{{password}}" />
            <label for="password">Пароль</label>
            <span class="error" id="passwordError"></span>
         </div>
         <div class="formItems">
            <input id="password2" class="inputtxt" type="password" placeholder="" name="password2" value="{{password2}}" />
            <label for="password2">Пароль (ещё раз)</label>
            <span class="error" id="password2Error"></span>
         </div>
         <div class="registerBtns">
            <button class="mainBtn" type="submit">{{mainButtonText}}</button>
            <a href="./signin" class="linkBtn" type="button">{{linkButtonText}}</a>
         </div>
      </form>
   </div>
`);
