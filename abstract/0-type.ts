abstract class User{
    constructor(
        public name: string,
        public email: string
    ){

    }

    abstract getCompany(): void

}

class employee extends User{
    constructor(
        public name: string,
        public email: string
    ){
        super(name, email)
    }

    getCompany(): void {
        console.log("Company")
    }

}

export {};
