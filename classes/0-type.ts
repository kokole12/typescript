class user {
    email: string;
    name: string

    constructor (email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const kokole = new user("k@k.com", "kokole");

export {};
