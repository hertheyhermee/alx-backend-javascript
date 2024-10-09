// Define the interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
}

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
}

// Create an array containing the two students
const studentList: Student[] = [student1, student2];

// render a table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = student.lastName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    const ageCell = document.createElement("td");
    ageCell.textContent = JSON.stringify(student.age);

    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(locationCell);
    row.appendChild(ageCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);