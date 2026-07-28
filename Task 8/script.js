// Get form elements
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");
const submitBtn = document.getElementById("submitBtn");

// Array to store students
let students = [];

// Store the index of the student being edited
let editIndex = -1;

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value.trim();
    if (!validateForm(name, email, phone, course)) {
        return;
    }

    const student = {
        name: name,
        email: email,
        phone: phone,
        course: course
    };

    if (editIndex === -1) {

        students.push(student);

    } else {
        students[editIndex] = student;
        editIndex = -1;
        submitBtn.textContent = "Register Student";
    }

    displayStudents();
    studentForm.reset();

});

function validateForm(name, email, phone, course) {

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("courseError").textContent = "";

    let isValid = true;
    if (name === "") {

        document.getElementById("nameError").textContent =
            "Please enter your full name.";

        isValid = false;

    } else if (name.length < 3) {

        document.getElementById("nameError").textContent =
            "Name must contain at least 3 characters.";

        isValid = false;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("emailError").textContent =
            "Please enter your email address.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        isValid = false;
    }
    const phonePattern = /^[0-9]{10,15}$/;

    if (phone === "") {

        document.getElementById("phoneError").textContent =
            "Please enter your phone number.";

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        document.getElementById("phoneError").textContent =
            "Phone number must contain 10 to 15 digits.";

        isValid = false;
    }

    if (course === "") {

        document.getElementById("courseError").textContent =
            "Please enter your course name.";

        isValid = false;

    } else if (course.length < 2) {

        document.getElementById("courseError").textContent =
            "Course name is too short.";

        isValid = false;
    }


    // Return validation result
    return isValid;
}

function displayStudents() {

    // Clear existing table rows
    studentTableBody.innerHTML = "";


    // Loop through students
    students.forEach(function(student, index) {

        // Create table row
        const row = `
            <tr>
                <td>${index + 1}</td>

                <td>${student.name}</td>

                <td>${student.email}</td>

                <td>${student.phone}</td>

                <td>${student.course}</td>

                <td>
                    <button 
                        class="btn btn-warning btn-sm"
                        onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button 
                        class="btn btn-danger btn-sm"
                        onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;


        // Add row to table
        studentTableBody.innerHTML += row;

    });

}

function deleteStudent(index) {

    // Remove student from array
    students.splice(index, 1);

    // Display updated table
    displayStudents();

}

function editStudent(index) {

    const student = students[index];
    document.getElementById("fullName").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("phone").value = student.phone;
    document.getElementById("course").value = student.course;
    editIndex = index;
    submitBtn.textContent = "Update Student";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
