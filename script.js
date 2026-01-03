let addBtn = document.getElementById("addBtn");
let eventList = document.getElementById("eventList");

// CREATE
addBtn.addEventListener("click", function () {
  let name = document.getElementById("eventName").value;
  let date = document.getElementById("eventDate").value;
  let location = document.getElementById("location").value;

  if (name === "" || date === "" || location === "") {
    alert("Please fill all fields");
    return;
  }

  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${date}</td>
    <td>${location}</td>
    <td>
      <button class="edit" onclick="editEvent(this)">Edit</button>
      <button class="delete" onclick="deleteEvent(this)">Delete</button>
    </td>
  `;

  eventList.appendChild(row);

  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("location").value = "";
});

// UPDATE
function editEvent(btn) {
  let row = btn.parentElement.parentElement;

  let name = prompt("Edit Event Name", row.cells[0].innerText);
  let date = prompt("Edit Date", row.cells[1].innerText);
  let location = prompt("Edit Location", row.cells[2].innerText);

  if (name && date && location) {
    row.cells[0].innerText = name;
    row.cells[1].innerText = date;
    row.cells[2].innerText = location;
  }
}

// DELETE with confirmation
function deleteEvent(btn) {
  if (confirm("Are you sure you want to delete this catering event?")) {
    btn.parentElement.parentElement.remove();
  }
}
