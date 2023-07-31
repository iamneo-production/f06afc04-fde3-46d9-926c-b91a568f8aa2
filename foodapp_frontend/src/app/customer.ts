

export class Customer {
    id!: number;
    name!:string;
    email!:string;
    password!:string;
    addressId!:Address;
}
export interface Address {
    id: number;
    street: string;
    city: string;
    state: string;
    zipCode: string;
  }