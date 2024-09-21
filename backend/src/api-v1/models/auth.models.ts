// create an enum for the various roles
export enum UserRoles {
    Seller = 'seller',
    Buyer = 'buyer',
    Expert = 'expert',
    Admin = 'admin',
}

export interface User {
    id : string,
    name : string,
    email : string,
    password : string,
    role : string,
    isEmailSent ?: number,  //optional
    isDeleted ?: number,     //optional
}

