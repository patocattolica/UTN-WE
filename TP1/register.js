const recordStudents = () =>{

    const name = document.getElementById("inputName").value;
    const lastname = document.getElementById("inputLastname").value;

    if(validation(name) && validation(lastname)){
        let students = getStudents();
        let index = students.length;
        index++;
        students.push({index,name,lastname});
        localStorage.setItem('students',JSON.stringify(students));

        window.location.href = "student.html";
    }
    else{
        alert("Completar correctamente los campos!");
        
        window.location.href = "formStudent.html";
    }

    
}


const validation = (str) =>{
    // Usando expresiones regulares verificamos que no contenga digitos
    let onlyLetters = /^[a-zA-Z\s]+$/.test(str);

    // Verificamos que la cadena no este vacia o contenga digitos
    if(str === "" || !onlyLetters){
        return false;
    }
    else{
        return true;
    }

}