import { ProductAndQuantity } from '../../../Models/ProductModel'

const ProductLine: React.FC<{
  product: any
  index: number
  status: string
}> = ({ product, index, status }) => {
  const { quantity, orderQuantity, name, price } = product
  return (
    <div className='product-line'>
      <div className='name'>{name}</div>
      <div className='price'>
        {price.toLocaleString('de-DE', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}{' '}
        €
      </div>
      <div
        className={
          quantity - orderQuantity < 0 &&
          (status == 'cancelled' || status == 'pending')
            ? 'red qty'
            : 'qty'
        }
      >
        {orderQuantity}
      </div>
      <div className='total'>
        {(orderQuantity * price).toLocaleString('de-DE', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}{' '}
        €
      </div>
    </div>
  )
}

export default ProductLine
