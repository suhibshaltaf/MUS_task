const getUser = async () => {
    try {
        const urlParams = new URLSearchParams(location.search);
   const userId = urlParams.get('userId');
    const response = await axios.get(`https://ums12.runasp.net/api/users/${userId}`);
    if (response.status == 200) 
        {return response.data;
        }    
        }
    catch (error) {
            document.querySelector(".errorClass").classList.remove("d-none");



            

    }
    finally {
    document.querySelector(".loader").classList.add("d-none");
    }

} 
const displayUserDetails = async () => {
    try {
    const user = await getUser();

    document.querySelector('.user_name').textContent = user.data.name;
    document.querySelector('.user_age').textContent = user.data.age;
    document.querySelector('.user_email').textContent = user.data.email;
}
    catch (error) {
                document.querySelector(".errorClass").textContent=error.message;
    }
}
displayUserDetails();

