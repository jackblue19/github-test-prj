import { userList } from "../../../dummyData/userDemo.js";

// Start: Hamburger
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".wrapper").toggleClass("collapse");
  });
});
// End: Hamburger

// Display user data
userList.forEach((element) => {
  console.log(element);
});

document.addEventListener("DOMContentLoaded", function () {
  const roleFilter = document.getElementById("role");
  const tableBody = document.getElementById("tableBody");

  function buildTable(data) {
    tableBody.innerHTML = ""; // Clear existing table rows
    data.forEach((e) => {
      let lock = e.C14_ACC_STATUS == 1 ? "Khóa" : "Mở khóa";
      let row = `<tr>
                          <td><p>${e.C14_USER_NAME}</p></td>
                          <td><p>${e.C14_ROLE_ID}</p></td>
                          <td><p>${e.C14_ACC_STATUS}</p></td>
                          <td><button class="action-button">${lock}</button></td>
                     </tr>`;
      tableBody.innerHTML += row;
    });
    addEventListenersToButtons();
  }

  function filterTable() {
    const selectedRole = roleFilter.value;
    let roleEnum = 0; // Default to 'all'
    if (selectedRole === "student") {
      roleEnum = 1;
    } else if (selectedRole === "teacher") {
      roleEnum = 2;
    } else if (selectedRole === "parent") {
      roleEnum = 3;
    } else if (selectedRole === "manager") {
      roleEnum = 4;
    }

    const filteredData =
      roleEnum === 0
        ? userList
        : userList.filter((user) => user.C14_ROLE_ID === roleEnum);

    buildTable(filteredData);
  }

  // Listen button
  function addEventListenersToButtons() {
    const buttons = document.querySelectorAll(".action-button");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const userName =
          button.parentElement.parentElement.querySelector(
            "td:first-child p"
          ).innerText;
        // Toggle lock status
        const newStatus = button.innerText === "Khóa" ? "Mở khóa" : "Khóa";
        // Update button text
        button.innerText = newStatus;
        showToast(newStatus, userName);
      });
    });
  }

  function showToast(message, userName) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");
    toastMessage.innerHTML = `<i class="fas fa-info"></i> Tài khoản ${userName} đã ${message.toLowerCase()}`;
    toast.className = "toast show";
    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  }

  roleFilter.addEventListener("change", filterTable);

  // Initial table build
  buildTable(userList);
});
