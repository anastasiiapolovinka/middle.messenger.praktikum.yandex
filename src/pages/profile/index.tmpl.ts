export default `
   <div class="profileHeader">
      <img class="profileImg" src="{{avatar}}" alt="Profile Image" />
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
`;
