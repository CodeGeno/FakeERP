export interface ProductDB {
  description: string
  id: number
  images: string[]
  name: string
  path: string
  price: number
  quantity?: number
  lastOrder?: string
}
export interface ProductAndQuantity extends ProductDB {
  desiredQuantity: number
}
