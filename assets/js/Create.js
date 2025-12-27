const CreateUserForm = document.forms['AdduserForm'];
CreateUserForm.image.addEventListener("change", () => {
    
const file=CreateUserForm.image.files[0];
const reader=new FileReader();
reader.readAsDataURL(file);
reader.onload=function(e){

    document.querySelector(".preview").setAttribute("src",e.target.result);

}
})
CreateUserForm.addEventListener("submit",async(e)=> {
    e.preventDefault();
    
    const formData = new FormData(CreateUserForm);

 const response = await axios.post('https://ums12.runasp.net/api/users', formData);
    if (response.status == 200) {
        alert("User created successfully");
     
    }
    
})  