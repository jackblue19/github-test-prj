// Start: Drop down ava
let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});
// End: Drop down ava

// Start: nva
$(document).ready(function () {
  $(".nva").click(function () {
    $(".wrapper").toggleClass("collapse");
  });
});
// End: nva

// Start delete modal
$(document).ready(function() {
  const deleteUserLinks = $('.delete-user');
  const modal = $('#deleteModal');
  const userNameSpan = $('#userName');
  const confirmDeleteButton = $('#confirmDelete');
  const cancelDeleteButton = $('#cancelDelete');
  const toast = $('#toast');
  let currentUserRow;
  

  deleteUserLinks.on('click', function(event) {
      event.preventDefault();
      currentUserRow = $(this).closest('tr');
      const title = currentUserRow.find('td p').first().text();
      userNameSpan.text(title);
      modal.show();
  });

  confirmDeleteButton.on('click', function() {
      currentUserRow.remove();
      modal.hide();
      showToast("Xóa thành công!");
  });

  cancelDeleteButton.on('click', function() {
      modal.hide();
  });

  $(window).on('click', function(event) {
      if ($(event.target).is(modal)) {
          modal.hide();
      }
  });

  function showToast(message) {
      toast.find('p').text(message);
      toast.addClass('show');
      setTimeout(function() {
          toast.removeClass('show');
      }, 2000);
  }
});


// End delete modal
