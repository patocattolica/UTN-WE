let users = [
    {
        id: 1,
        name: 'Patricio',
        age: 24
    },
    {
        id: 2,
        name: 'Felipe',
        age: 20
    }
];


//getAll
const getAll = () => {
    return users
} 

//getById
const getById = (id) => {
    const user = users.find(item => item.id === id)

    return user;
}

//Create
const CreateUser = (body) => {
    const newUser = {
        id: users.length + 1,
        //Recordar que para traer datos usamos body
        name: body.name,
        age: body.age
    };

    users.push(newUser);

    return newUser;
}

const DeleteUser = (id) => {
    let userOut;

    for(let i=0; i<users.length; i++){
        if(id === users[i].id){
            userOut = users[i];
            users.splice(i,1);
            break;
        }
    }

    return userOut;
}


//Exportar las funciones
module.exports = {
    getAll,
    getById,
    CreateUser,
    DeleteUser
};