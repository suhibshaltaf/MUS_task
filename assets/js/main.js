const getUsers = async () => {  

    const response = await axios.get('https://ums12.runasp.net/api/users?limit=1000');

    return response.data;
}
const displaydata=async()=>{
  try{

    const result=await getUsers();

    const users=result.users.map((user)=>{
    return`
    <div class="col-md-4  p-4 text-center">
           <div class="card" >
${user.imageUrl ? 
  `<img src="${user.imageUrl}" class="card-img-top" alt="User Image">` 
  : 
  ''
}  <div class="card-body">
    <h5 class="card-title">${user.name}</h5>
    <p class="card-text">${user.age}</p>
    <a  class="btn btn-outline-danger"  onclick="deleteUser(${user.id})">Delete</a>
     <a href="./details.html?userId=${user.id}" class=" btn  btn-outline-info">Details</a>

  </div>  
</div>
            </div>
            `  
    }).join(' ');
 
    document.querySelector(".container .row").innerHTML=users;
}
catch(error){
    document.querySelector(".errorClass").classList.remove("d-none");
                document.querySelector(".errorClass").textContent=error.message;


}
finally{
    document.querySelector(".loader").classList.add("d-none");
}
}
displaydata();

const deleteUser=async(id)=>{
    await axios.delete(`https://ums12.runasp.net/api/users/${id}`);
            alert("User deleted successfully");
            displaydata();

    
}
