abstract class User{
    constructor(
        public name: string,
        public email: string
    ){

    }
}


class employee extends User{
    constructor(
        public name: string,
        public email: string
    ){
        super(name, email)
    }
}

export {};
