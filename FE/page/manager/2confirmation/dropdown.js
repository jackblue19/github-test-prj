const toggle = () => classList.toggle("active");

let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});

// Start: navigate to create post
function navigateCreatePost() {
  location.replace("../createPost/index.html");
}
// End: navigate to create post
