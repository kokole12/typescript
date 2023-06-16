class User {
    
    private readonly city: string = "kampala";

    constructor(
        public name: string, 
        public email:string
        ) {
        
    }
    get getEmail(): string {
        return `the email ${this.email}`;
    }
}

const student = new User("sandy@s.com", "kals");

export {};
