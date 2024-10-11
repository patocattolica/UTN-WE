let students = []; // Declaramos el vector students

const addStudent = (event) => { // Función addStudent recibe un evento como parámetro
    event.preventDefault(); // Evita que el formulario recargue la página y permite que se realice una acción personalizada (como validar los datos o mostrarlos en pantalla) en lugar del envío estándar del formulario.
    
    // Declaramos las variables name y lastName
    const name = document.getElementById("name").value; 
    const lastName = document.getElementById("lastname").value;

    // Agregamos el estudiante al vector students
    students.push({name,lastName});

    // Llamamos a la función renderTable
    renderTable();

    // "Reiniciamos" los campos name y lastName del formulario
    document.getElementById("name").value = null;
    document.getElementById("lastname").value = null;
};

const renderTable = () => { // Función renderTable no recibe parámetro
    // Declaramos la variable tbody con la cual podremos controlar la tabla de estudiantes
    const tbody = document.getElementById("studentsTable");

    // Usamos innerHTML para cambiar el contenido a vacío
    tbody.innerHTML = '';

    // Usamos forEach como estructura de repetición
    students.forEach((student) => {
        // Declaramos la variable row para crear filas
        let row = document.createElement('tr');
        // Le asignamos a row 2 elementos name y lastName
        row.innerHTML = `<td>${student.name}</td><td>${student.lastName}</td>`;

        tbody.appendChild(row);
        // En este caso, tbody.appendChild(row); agrega la fila (row) al final del <tbody>, actualizando la tabla en la página web para mostrar la nueva fila.
    });
};