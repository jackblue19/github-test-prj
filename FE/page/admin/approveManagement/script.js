import { postList } from "../../../dummyData/postDemo.js";

// Start: Hamburger
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".wrapper").toggleClass("collapse");
  });
});
// End: Hamburger

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
