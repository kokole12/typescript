type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creaditCard?: string
}


let user: User = {
    _id: "1234",
    name: "Kokole",
    email:"k@k.com",
    isActive: false
}

export {};
