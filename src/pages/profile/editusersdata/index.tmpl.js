import Handlebars from 'handlebars';

export default Handlebars.compile(`
   <div class="container">
      <div class="profileHeader">
         <img class="profileImg" src="{{avatar}}" alt="Profile Image" />
      </div>
      <form class="profileDetails">
         <div class="formProfile">
            <label for="email">Почта:</label>
            <input id="password" class="profileInput" type="email" placeholder="Почта" name="email" value="{{email}}" />
         </div>
         <div class="formProfile">
            <label for="login">Логин:</label>
            <input id="login" class="profileInput" type="text" placeholder="Логин" name="login" value="{{login}}" />
         </div>
         <div class="formProfile">
            <label for="first_name">Имя:</label>
            <input id="first_name" class="profileInput" type="text" placeholder="Имя" name="first_name" value="{{first_name}}" />
         </div>
         <div class="formProfile">
            <label for="second_name">Фамилия:</label>
            <input id="second_name" class="profileInput" type="text" placeholder="Фамилия" name="second_name" value="{{second_name}}" />
         </div>
         <div class="formProfile">
            <label for="display_name">Имя в чате:</label>
            <input id="display_name" class="profileInput" type="text" placeholder="Имя в чате" name="display_name" value="{{display_name}}" />
         </div>
         <div class="formProfile">
            <label for="phone">Телефон:</label>
            <input id="phone" class="profileInput" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Телефон" name="email" value="{{phone}}" />
         </div>
         <button class="mainBtn change_data_btn" type="submit">{{change_data}}</button>
      </form>
   </div>
`);
