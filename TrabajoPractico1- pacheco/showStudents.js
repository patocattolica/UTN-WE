let currentPage = 1;

const showStudents = () => {
    const tbodyElement = document.getElementsByTagName('tbody')[0];

    if (!tbodyElement) {
        return;
    }

    tbodyElement.innerHTML = '';

    let listStudents = getInfoFromStorage();
    const rowsPerPage = getSelectedItemsPerPage();

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedStudents = listStudents.slice(start, end);

    paginatedStudents.forEach((student) => {
        const trElement = document.createElement('tr');
        trElement.innerHTML = `<td>${student.legajo}</td><td>${student.name}</td><td>${student.lastName}</td>`;

        tbodyElement.appendChild(trElement);
    });
    displayPagination(listStudents.length, rowsPerPage);
};
const displayPagination = (totalStudents, rowsPerPage) => {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalStudents / rowsPerPage); //calculo el total de paginas

    for(let i = 1; i <= totalPages; i++){
        const btn = document.createElement('button'); //crea los botones dependiendo la cantidad de paginas
        btn.innerHTML = i;
        btn.classList.add('pagination-btn'); //Añade la clase CSS pagination-btn para estilizar los botones 

        if(i == currentPage){
            btn.classList.add('active'); //resalta la pagina actual
        }
        btn.addEventListener('click', () => { //añado un evento, para que cuando se ejecute, se realize una accion
            currentPage = i; //Cuando el usuario hace clic en un botón de página, actualizamos la variable
            showStudents();
        });
        paginationContainer.appendChild(btn);
    }
};
document.querySelector('.pagination select').addEventListener('change', () => {
    currentPage = 1; // Reiniciar a la primera página al cambiar el número de elementos por página
    showStudents(); // Llama a showStudents para actualizar la tabla
});
showStudents();