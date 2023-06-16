interface User{
    name: string,
    email: string
}

class Employee implements User{
    
    constructor(
        public name: string,
        public email: string,
        public IdNo: string,
        public position: string
    ){
    }
}

export {};
