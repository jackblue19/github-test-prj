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

// Start toast feedback
document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedbackForm");
  const toast = document.getElementById("toast");
  const updateFeedbackBtn = document.getElementById("updateFeedbackBtn");

  // Function to show toast
  // Function to show toast with check icon
  function showToast(message) {
    toast.innerHTML = '<i class="fas fa-check"></i>' + message;
    toast.className = "toast show success";
    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  }

  // Function to handle form submission
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Perform form submission here (you may use AJAX to submit the form data)
    // After successful submission, show toast and update feedback section
    showToast("Đánh giá thành công");
    // Show feedback details and change button to "Cập nhật đánh giá"
    updateFeedbackBtn.style.display = "inline-block";
    feedbackForm.style.display = "none";
  });

  // Function to handle click on "Cập nhật đánh giá" button
  updateFeedbackBtn.addEventListener("click", function () {
    // Show feedback form and hide "Cập nhật đánh giá" button
    feedbackForm.style.display = "block";
    updateFeedbackBtn.style.display = "none";
  });
});

// End toast feeback
