const addStudent = (event) => {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;

    // debo guardar en el local Storage y redirigir
    let students = getStudents();

    students.push({name,lastname});
    localStorage.setItem('students',JSON.stringify(students));

    window.location.href = 'index.html';
}
