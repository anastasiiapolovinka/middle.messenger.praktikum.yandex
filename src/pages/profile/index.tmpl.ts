export default `
   <div class="profileHeader">
      <div class="avatarWrapper">
         <img class="profileImg" src="{{avatar}}" alt="Profile Image" />
         <span class="uploadFileLabel">Поменять аватар</span>
      </div> 
      <h1>{{title}}</h1>
   </div>
   <div class="profileDetails">
      <div><span>Почта:</span><span>{{email}}</span></div>
      <div><span>Логин:</span><span>{{login}}</span></div>
      <div><span>Имя:</span><span>{{first_name}}</span></div>
      <div><span>Фамилия:</span><span>{{second_name}}</span></div>
      <div><span>Имя в чате:</span><span>{{display_name}}</span></div>
      <div><span>Телефон:</span><span>{{phone}}</span></div>
   </div>
   <div class="profileBtns">
      {{{changeDataBtn}}}
      {{{changePasswordBtn}}}
      {{{logoutBtn}}}
   </div>
   <div class="overlay">
      <div class="modal">
         <h2>Загрузите файл</h2>
         <form class="avatarForm">
            <label class="fileUpload" for="avatar">
               <span>Выбрать файл на компьютере</span>
               <input id="avatar" type="file" name="avatar" accept="image/*">
            </label>
            <button type="submit" class="saveBtn" >Поменять</button>
         </form>
      </div>
   </div>
`;
