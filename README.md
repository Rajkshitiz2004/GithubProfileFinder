# 🔍 GitHub Profile Finder

A simple and efficient web application that allows users to search for GitHub profiles and view key information such as repositories, followers, following, and more — all in one place.

---

## 📌 Purpose

The purpose of this project is to:

- Practice working with APIs (especially REST APIs)
- Improve frontend development skills
- Understand asynchronous JavaScript (Promises, async/await)
- Build a real-world, user-friendly application

---

## 🌐 API Used

This project uses the official **GitHub REST API**:

- Base URL: `https://api.github.com/users/{username}`

### Data Retrieved:
- User name
- Username
- Profile picture (avatar)
- Bio
- Public repositories count
- Followers & following count
- Location
- Profile link

---

## ✨ Features

### ✅ Implemented Features

- 🔎 Search GitHub users by username  
- 👤 Display user profile details  
- 📦 Show public repositories count  
- 👥 Show followers and following  
- 🖼️ Display profile avatar  
- 🔗 Direct link to GitHub profile  
- ⚠️ Error handling (user not found, API issues)  

---

## 🚀 Advanced Interactive Features

The following features are implemented as part of the project requirements:

### 🔍 Searching
- Enable users to search repositories or profile-related data using keywords  
- Implemented using **Array Higher-Order Functions** like `filter()`  

### 🎯 Comparing
- Compare repositories based on criteria such as:
  - Most starred
  - Forked repositories
  - Language used  
- Implemented using `filter()`  

### 🔄 Sorting
- Sort repositories based on:
  - Stars (ascending/descending)
  - Name (alphabetical)
  - Last updated  
- Implemented using `sort()`  

### 🌓 Dark Mode / Light Mode
- Toggle between dark and light themes  
- Enhances user experience and accessibility  

---

## ❗ Important Implementation Rule

All searching, filtering, and sorting functionalities are implemented using:

- `map()`
- `filter()`
- `reduce()`
- `find()`
- `sort()`

🚫 Traditional loops like `for` or `while` are **not used** for these operations.

---

## 🎯 Bonus Features

The following enhancements can be implemented to improve performance, usability, and overall user experience:

### ⚡ Debouncing
- Limits how frequently a function executes  
- Applied to the search bar to prevent excessive API calls on every keystroke  

### ⏱️ Throttling
- Controls how often a function runs over time  
- Useful for handling scroll events or repeated clicks efficiently  

### 📄 Pagination
- Breaks large datasets into smaller, manageable pages  
- Useful when displaying repository lists or search results  

### ⏳ Loading Indicators
- Displays visual feedback while fetching data from the API  
- Improves user experience during delays  
 
---

## 📦 Deliverables

- Fully functional interactive UI  
- Dynamic data rendering using API  
- Advanced features (search, filter, sort, theme toggle)  
- Clean and modular code structure  

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the web page  
- **CSS3** – Styling and layout  
- **JavaScript (ES6+)** – Logic and API handling  
- **GitHub REST API** – Fetching user data  
- **Fetch API / Async-Await** – Handling API requests  

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/github-profile-finder.git
