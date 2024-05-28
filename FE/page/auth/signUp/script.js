document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const role = document.getElementById("roles").value;
    let redirectUrl = "";
    console.log("vao khong");

    switch (role) {
      case "student":
        redirectUrl = "../../user/dashboard/index.html";
        break;
      case "teacher":
        redirectUrl = "../../user/dashboard/index.html";
        break;
      case "parents":
        redirectUrl = "../../user/dashboard/index.html";
        break;
      case "manager":
        redirectUrl = "../../admin/dashboard/index.html";
        break;
      default:
        redirectUrl = "index.html"; // Fallback URL
    }
    console.log(redirectUrl);

    window.location.href = redirectUrl;
  });
});

console.log("heheheh");
