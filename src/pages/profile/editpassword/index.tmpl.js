import Handlebars from 'handlebars';

export default Handlebars.compile(`
   <div class="container">
      <div class="profileHeader">
         <img class="profileImg" src="{{image}}" alt="Profile Image" />
      </div>
      <form class="profileDetails">
         <div class="formProfile">
            <label for="oldPassword">Старый пароль:</label>
            <input id="oldPassword" class="profileInput" type="password" name="oldPassword" />
         </div>
         <div class="formProfile">
            <label for="newPassword">Новый пароль:</label>
            <input id="newPassword" class="profileInput" type="password" name="newPassword"/>
         </div>
         <div class="formProfile">
            <label for="newPassword2">Повторите новый пароль:</label>
            <input id="newPassword2" class="profileInput" type="password" name="newPassword2" />
         </div>
         <button class="password_btn mainBtn" type="submit">{{change_data}}</button>
      </form>
   </div>
`);
