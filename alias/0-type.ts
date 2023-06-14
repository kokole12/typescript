type User = {
    name: string,
    email: string,
    isActive: false
}

function createUser(user: User): User{
    return ({name:"", email: "", isActive: false});
}

createUser({name: "John", email:"Deo", isActive: false});

export {};
