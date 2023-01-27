export interface UserCreation {
  email: string
  password: string
}

export interface UserAddress {
  firstName: string
  lastName: string
  address: string
  houseNr: number
  zipCode: number
  country: string
}
