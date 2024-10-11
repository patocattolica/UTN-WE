const getStudents = () => {
    let students = localStorage.getItem('students');

    if(students){
        students = JSON.parse(students);
    }
    else{
        students = [];
    }

    return students;
}