const addInfo = (event) => {
    event.preventDefault();

    const student = {
        name : document.getElementById('name').value,
        lastName : document.getElementById('lastName').value,
        legajo : generateLegajo()
    };

    let listStudents = getInfoFromStorage();
    listStudents.push(student);

    localStorage.setItem('listStudents', JSON.stringify(listStudents));

    document.getElementById('name').value = null;
    document.getElementById('lastName').value = null;
    
};
function generateLegajo(){
    return Math.floor(10000 + Math.random() * 90000); //genera legajo de 5 digitos
}