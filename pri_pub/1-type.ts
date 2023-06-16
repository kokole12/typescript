class User {
    
    private readonly city: string = "kampala";
    constructor(
        public name: string, 
        public email:string
        ) {
        
    }
}

const student = new User("sandy@s.com", "kals");

export {};
