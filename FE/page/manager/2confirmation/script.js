import { postList } from "../../../dummyData/postDemo.js";

// Start: nav-change
$(document).ready(function () {
  $(".nav-change").click(function () {
    $(".wrapper").toggleClass("collapse");
  });
});
// End: nav-change

// Display user data
postList.forEach((element) => {
  console.log(element);
});

function buildTable(data) {
  var table = document.getElementById("tableBody");
  postList.forEach((e) => {
    var row = `<tr>
                    <td>
                        <p>${e.C12_TITLE}</p>
                    </td>
                    <td>
                        <p>${e.C12_PUBLISHED_DATE}</p>
                    </td>
                    <td>
                      <a href="../postDetail/index.html">Chi tiết</a>
                    </td>
                    <td>
                      <button>Duyệt</button>
                      <button>Từ chối</button>
                    </td>
                    
                </tr>`;
    table.innerHTML += row;
  });
}

buildTable(postList);
// Get the current date
function getCurrentDate() {
  var currentDate = new Date();
  var day = String(currentDate.getDate()).padStart(2, "0");
  var month = String(currentDate.getMonth() + 1).padStart(2, "0");
  var year = currentDate.getFullYear();
  return day + "-" + month + "-" + year;
}
