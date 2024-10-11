let currentPage = 1;
let recordsPerPage = 3;
let filteredStudents = [];

const renderTable = (students) => {
    const tbody = document.querySelector('#studentsTable tbody');
    tbody.innerHTML = '';

    let start = (currentPage - 1) * recordsPerPage;
    let end = start + recordsPerPage;

    students.slice(start, end).forEach((student) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${student.index}</td><td>${student.name}</td><td>${student.lastname}</td>`;
        tbody.appendChild(row);
    });

    renderPaginationButtons(students);
};

const renderPaginationButtons = (students) => {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    let totalPages = Math.ceil(students.length / recordsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement('button');
        btn.classList.add('page-number');
        if (i === currentPage) {
            btn.classList.add('active');
        }
        btn.innerText = i;
        btn.addEventListener('click', () => {
            currentPage = i;
            renderTable(filteredStudents);
        });
        paginationContainer.appendChild(btn);
    }
};

const loadTable = () => {
    const students = getStudents(); 
    filteredStudents = students;
    renderTable(filteredStudents);
};

const searchByLastname = () => {
    const lastnameInput = document.getElementById('lastnameInput').value.toLowerCase();
    filteredStudents = getStudents().filter(student =>
        student.lastname.toLowerCase().includes(lastnameInput)
    );
    currentPage = 1; // Resetear a la primera página
    renderTable(filteredStudents);
};

const updateRecordsPerPage = () => {
    recordsPerPage = parseInt(document.getElementById('recordsPerPage').value);
    currentPage = 1; // Resetear a la primera página
    renderTable(filteredStudents);
};

document.addEventListener('DOMContentLoaded', () => {
    loadTable();

    document.getElementById('searchButton').addEventListener('click', searchByLastname);
    document.getElementById('recordsPerPage').addEventListener('change', updateRecordsPerPage);
});
