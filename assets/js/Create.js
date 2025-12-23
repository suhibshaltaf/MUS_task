const CreateUserForm = document.forms['AdduserForm'];
CreateUserForm.addEventListener("submit",async(e)=> {
    e.preventDefault();
    
    const formData = new FormData(CreateUserForm);

 const response = await axios.post('https://ums12.runasp.net/api/users', formData);
    
})  