// Start: Drop down
document.addEventListener("DOMContentLoaded", function () {
  const bell = document.getElementById("bell");
  const contentNotification = document.querySelector(".content-notification");
  const profileDropdownList = document.querySelector(".profile-dropdown-list");
  const profileDropdownBtn = document.querySelector(".profile-dropdown-btn");

  function toggleProfileDropdown() {
    profileDropdownList.classList.toggle("active");
    contentNotification.style.display = "none"; // Hide notification dropdown
  }

  function toggleNotificationDropdown() {
    contentNotification.style.display =
      contentNotification.style.display === "block" ? "none" : "block";
    profileDropdownList.classList.remove("active"); // Hide profile dropdown
  }

  bell.addEventListener("click", function () {
    toggleNotificationDropdown();
  });

  profileDropdownBtn.addEventListener("click", function () {
    toggleProfileDropdown();
  });

  // Close both dropdowns if the user clicks outside of them
  window.addEventListener("click", function (event) {
    if (
      !bell.contains(event.target) &&
      !contentNotification.contains(event.target)
    ) {
      contentNotification.style.display = "none";
    }
    if (
      !profileDropdownBtn.contains(event.target) &&
      !profileDropdownList.contains(event.target)
    ) {
      profileDropdownList.classList.remove("active");
    }
  });
});

// Start: Drop down

// Start: Hamburger
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".wrapper").toggleClass("collapse");
  });
});
// End: Hamburger

// Start modal notification detail
document.addEventListener("DOMContentLoaded", function () {
  // Function to open the modal
  function openModal(notificationText) {
    const modal = document.getElementById("notificationModal");
    const notificationDetails = document.getElementById("notificationDetails");
    notificationDetails.innerText = notificationText;
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("notificationModal");
    modal.style.display = "none";
  }

  // Event listener for notification clicks
  const notificationLinks = document.querySelectorAll(
    ".content-notification ul li a"
  );
  notificationLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      const notificationText = this.getAttribute("data-notification");
      openModal(notificationText);
    });
  });

  // Event listener for close button
  const closeButton = document.querySelector(".modal .close");
  closeButton.addEventListener("click", closeModal);

  // Close modal when clicking outside of the modal content
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("notificationModal");
    if (event.target === modal) {
      closeModal();
    }
  });
});
// End modal notification detail

// Start attendance details
// Hiển thị modal điểm danh
function showAttendanceModal() {
  const modal = document.getElementById("attendanceModal");
  modal.style.display = "block";
  // Thực hiện lấy dữ liệu điểm danh và thêm vào modal
  populateAttendanceModal();
}

// Đóng modal điểm danh
function closeAttendanceModal() {
  const modal = document.getElementById("attendanceModal");
  modal.style.display = "none";
}

// Thêm dữ liệu điểm danh vào modal
function populateAttendanceModal() {
  const attendanceList = document.getElementById("attendanceList");
  attendanceList.innerHTML = ""; // Xóa nội dung cũ (nếu có)

  // Thực hiện lấy dữ liệu điểm danh từ máy chủ hoặc bất kỳ nguồn dữ liệu nào
  // Dưới đây là một ví dụ giả định về dữ liệu điểm danh
  const attendanceData = [
    { session: 1, status: "present" },
    { session: 2, status: "absent" },
    // Thêm dữ liệu cho các buổi khác tùy theo nhu cầu
  ];

  // Tạo danh sách chi tiết điểm danh
  attendanceData.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.textContent = `Buổi ${item.session}: ${
      item.status === "present" ? "Điểm danh" : "Vắng mặt"
    }`;
    listItem.style.color = item.status === "present" ? "green" : "red";
    attendanceList.appendChild(listItem);
  });
}

//End attendance detais

// Hiển thị modal điểm kiểm tra
function showEvaluationModal() {
  const modal = document.getElementById("evaluationModal");
  modal.style.display = "block";
}

// Đóng modal điểm kiểm tra
function closeEvaluationModal() {
  const modal = document.getElementById("evaluationModal");
  modal.style.display = "none";
}

// Danh sách lớp học (mẫu)
const classListData = [
  { id: 1, name: "Nguyễn Văn A" },
  { id: 2, name: "Trần Thị B" },
  { id: 3, name: "Lê Văn C" },
  // Thêm các học sinh khác tương tự
];

// Hiển thị modal danh sách lớp
function showClassListModal() {
  const modal = document.getElementById("classListModal");
  const classListBody = document.getElementById("classListBody");
  // Xóa bỏ các dòng cũ trong bảng
  classListBody.innerHTML = "";
  console.log(classListBody);
  // Thêm các học sinh vào bảng
  classListData.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${index + 1}</td>
          <td>${student.name}</td>
      `;
    classListBody.appendChild(row);
  });
  modal.style.display = "block";
}

// Đóng modal danh sách lớp
function closeClassListModal() {
  const modal = document.getElementById("classListModal");
  modal.style.display = "none";
}
