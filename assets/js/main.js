const getUsers = async () => {
    const response = await axios.get('https://ums12.runasp.net/api/users?limit=1000');
    return response.data;
}
const displaydata=async()=>{
    const result=await getUsers();
    const users=result.users.map((user)=>{
    return`
    <div class="col-md-4 border p-4 text-center">
           <div class="card" >
  <img src="${user.imageUrl}" class="card-img-top" alt=" no image  found">
  <div class="card-body">
    <h5 class="card-title">${user.name}</h5>
    <p class="card-text">${user.age}</p>
    <a  class="btn btn-danger"  onclick="deleteUser(${user.id})">Delete</a>
  </div>
</div>
            </div>
            `  
    }).join(' ');
 
    document.querySelector(".container .row").innerHTML=users;
}
displaydata();

const deleteUser=async(id)=>{
    await axios.delete(`https://ums12.runasp.net/api/users/${id}`);
}
