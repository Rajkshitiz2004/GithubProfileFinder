let userName = document.getElementById("user_name");
let submit = document.getElementById("search_id");
let content = document.getElementById("display");

let allRepos = [];
let currentLanguage = "All";
let currentSortOrder = "A-Z";

submit.addEventListener("click", () => {
  let gitHubUserName = userName.value;
  content.innerHTML = "";
  userName.value = "";
  let url = `https://api.github.com/users/${gitHubUserName}`;
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.message == "Not Found") {
        alert(`Error: ${gitHubUserName} doesn't exist in the Database, Please check the User Name again...`);
        return;
      }

      currentLanguage = "All";
      currentSortOrder = "A-Z";

      let newDiv = document.createElement("div");
      newDiv.setAttribute("id", "user_info");
      newDiv.innerHTML = `
        <div id="sec1">
          <img src=${data.avatar_url}/>
          <span> ${new Date(data.updated_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? "🟢" : "🔴"}</span>
          <ul>
            <li> Name: ${data.name || "N/A"}</li>
            <li> Username: ${data.login}</li>
            <li> Status: ${new Date(data.updated_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? "Active" : "Inactive"}</li>
          </ul>
        </div>
        <div id="sec2">
          <p>Loading Repositories...</p>
        </div>
        <div id="sec3">
          <ul>
            <li> Bio: ${data.bio || "No bio available"}</li>
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

      fetch(data.repos_url)
        .then((res) => res.json())
        .then((repo_data) => {
          allRepos = repo_data;
          renderRepoSection();
        });
    })
    .catch(err => {
      console.error("Fetch error:", err);
    });
});

function renderRepoSection() {
  let repoSection = document.getElementById("sec2");
  if (!repoSection) return;

  let lang_list = [...new Set(allRepos.map(repo => repo.language))].filter(lang => lang);

  repoSection.innerHTML = `
    <p> PUBLIC REPOSITORIES <span>👇</span></p>
    <div class="filter-container">
      <div class="filter-group">
        <select id="language_filter">
          <option value="All">All Languages</option>
          ${lang_list.map(lang => `<option value="${lang}" ${currentLanguage === lang ? "selected" : ""}>${lang}</option>`).join("")}
        </select>
      </div>
      <div class="filter-group">
        <select id="sort_filter">
          <option value="A-Z" ${currentSortOrder === "A-Z" ? "selected" : ""}>Sort (A-Z)</option>
          <option value="Z-A" ${currentSortOrder === "Z-A" ? "selected" : ""}>Sort (Z-A)</option>
        </select>
      </div>
    </div>
    <ol id="repos">
      <p>Loading Repositories...</p>
    </ol>
  `;

  document.getElementById("language_filter").addEventListener("change", (e) => {
    currentLanguage = e.target.value;
    updateRepoList();
  });

  document.getElementById("sort_filter").addEventListener("change", (e) => {
    currentSortOrder = e.target.value;
    updateRepoList();
  });

  updateRepoList();
}

function updateRepoList() {
  let filteredList = [...allRepos];

  if (currentLanguage !== "All") {
    filteredList = filteredList.filter(repo => repo.language === currentLanguage);
  }

  filteredList.sort((a, b) => {
    let repoA = a.name.toLowerCase();
    let repoB = b.name.toLowerCase();
    if (currentSortOrder === "A-Z") {
      return repoA.localeCompare(repoB);
    } else {
      return repoB.localeCompare(repoA);
    }
  });


  let reposListElement = document.getElementById("repos");

  reposListElement.innerHTML = filteredList.map(repo => `
    <li>
      <a href="${repo.html_url}" target="_blank"><b>${repo.name}</b></a>
      <p> ⭐ ${repo.stargazers_count}</p>
      <p> 🍴 ${repo.forks_count}</p>
      <p> 🧠 ${repo.language || "N/A"}</p>
    </li>`).join("");
}

function toggle_light() {
    let themeToggle = document.getElementById("toggle");
    
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
}
toggle_light();