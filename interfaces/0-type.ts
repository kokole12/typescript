interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    goodleId?: string,
    settrial(): string,
    getCoupon(couponname: string): number
}

const kokole: User = {dbId: 10211, email:"k@k.com", userId:1002,
settrial: ()=>{
    return "trial started";
},
getCoupon: (couponname: "gift card") => {
    return 10
}};


export {};
