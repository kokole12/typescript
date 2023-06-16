class User {
    public email: string;
    public name: string;
    private readonly city: string = "kampala";
    constructor(name: string, email:string) {
        this.email = email
        this.name = name
    }
}

const student = new User("sandy@s.com", "kals");

export {};
