let userName = document.getElementById("user_name");
let submit = document.getElementById("search_id");
let content = document.getElementById("display");

submit.addEventListener("click", () => {
  let gitHubUserName = userName.value;
  content.innerHTML = "";
  userName.value = "";
  let url = `https://api.github.com/users/${gitHubUserName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.message == "Not Found") {
        alert(
          `Error: ${gitHubUserName} dosen't exist in the Database, Please check the User Name again...`,
        );
        throw new Error(
          `Error: ${gitHubUserName} dosen't exist in the Database, Please check the User Name again...`,
        );
      } else {
        fetch(`${data.repos_url}`).then(res=>res.json()).then(repo_data=>{
          let repoSection = document.getElementById('sec2');
          repoSection.innerHTML = `
<p> PUBLIC REPOSITORIES <span>👇</span></p>
<ol>
${repo_data
  .map(
    (repo) => `
  <li>
  <a href="${repo.html_url}" target="_blank"><b>${repo.name}</b></a>
  <p> ⭐ ${repo.stargazers_count}</p>
  <p> 🍴 ${repo.forks_count}</p>
  <p> 🧠 ${repo.language || "N/A"}</p>
  </li>`,
  )
  .join("")}
</ol>
          `;
        })
        console.log(data);
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "user_info");
        newDiv.innerHTML = `
<div id="sec1">
<img src=${data.avatar_url}/>
<span> ${new Date(data.updated_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? "🟢" : "🔴"}</span>
<ul>
<li> Name: ${data.name}</li>
<li> Username: ${data.login}</li>
<li> Status: ${new Date(data.updated_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? "Active" : "Inactive"}</li>
</ul>
</div>
<div id="sec2">

  </div>
  <div id="sec3">
  <ul>
  <li> Bio: ${data.bio}</li>
  <li> Blog: ${data.blog ? `<a href="${data.blog}" target="_blank">${data.blog}</a>` : "N/A"}</li>
  <li> Public Repos: ${data.public_repos}</li>
  <li> Public Gists: ${data.public_gists}</li>
  <li> Followers: ${data.followers}</li>
  <li> Following: ${data.following}</li>
  <li> Joined: ${new Date(data.created_at).toDateString()}</li>
<li> Last Updated: ${new Date(data.updated_at).toDateString()}</li>
  </ul>
</div>`;
        content.appendChild(newDiv);
      }
    });
});