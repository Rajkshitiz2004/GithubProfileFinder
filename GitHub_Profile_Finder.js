let userName = document.getElementById("user_name");
let submit = document.getElementById("search_id");
let content = document.getElementById("display");

submit.addEventListener("click", () => {
  let gitHubUserName = userName.value;

  let url = `https://api.github.com/users/${gitHubUserName}`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.message == 'Not Found'){
        alert(`Error: ${gitHubUserName} dosen't exist in the Database, Please check the User Name again...`)
        throw new Error(`Error: ${gitHubUserName} dosen't exist in the Database, Please check the User Name again...`)
    }else{
        console.log(data)
    }
  })
});