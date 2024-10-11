const renderTable = () => {
    const tbody = document.getElementById('student_table');

    tbody.innerHTML = '';

    let students = getStudents();

    students.forEach((student) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${student.name}</td><td>${student.lastname}</td>`;

        tbody.appendChild(row);
    });
    
};

document.addEventListener('DOMContentLoaded', renderTable);