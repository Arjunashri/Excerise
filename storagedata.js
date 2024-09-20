// Retrieve students data from local storage
let students = JSON.parse(localStorage.getItem("students")) || [];

// Function to add a row to the second table
function addRow(name, age, index) {
    let table = document.getElementById("dataTable");
    let row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
        deleteRow(index);
    };
    row.insertCell(2).appendChild(deleteBtn);
}

// Function to delete a row from the second table
function deleteRow(index) {
    students.splice(index, 1);
    updateLocalStorage();
    renderTable();
}

// Function to render the second table
function renderTable() {
    let table = document.getElementById("dataTable");
    // Clearing previous data
    table.innerHTML = "<tr><td>Name</td><td>Age</td><td>Action</td></tr>";
    // Populating table with current data
    students.forEach((student, index) => {
        addRow(student.name, student.age, index);
    });
}

// Function to update local storage
function updateLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

// Form submission handler
document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    if (name.trim() !== "" && age.trim() !== "") {
        students.push({ name: name, age: age });
        updateLocalStorage();
        renderTable();
        // Clearing input fields
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
    } else {
        alert("Please enter valid name and age.");
    }
});

// Render table when the page loads
renderTable();

