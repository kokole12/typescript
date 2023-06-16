class User {
    private _coursecount = 1;
    private readonly city: string = "kampala";
    constructor(
        public name: string, 
        public email:string
        ) {
        
    }

    get getEmail(): string{
        return `The email is ${this.email}`
    }

    get getCoursecount(): number{
        return this._coursecount;
    }

    set setCourseCount(courseNum) {
        if (courseNum < 1){
            throw new Error("not a valid value");
        }

        this._coursecount = courseNum
    }
}

const student = new User("sandy@s.com", "kals");

export {};
