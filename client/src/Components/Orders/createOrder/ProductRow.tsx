import { useState } from 'react'
import { ProductAndQuantity } from '../../../Models/ProductModel'

const ProductRow: React.FC<{
  selectedProduct: ProductAndQuantity
  handleChange: (e: any, index: number) => void
  handleQuantityInput: (e: any, index: number) => void
  handleRemove: (index: number) => void
  index: number
  last: boolean
}> = ({
  selectedProduct,
  handleChange,
  index,
  handleRemove,
  handleQuantityInput,
  last,
}) => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const { name, price, quantity, images, desiredQuantity } = selectedProduct
  return (
    <>
      <div className='product'>
        <div className={last ? 'last name' : 'name'}>
          <div>{name}</div>
          <div>
            <img src='' />
          </div>
        </div>
        <div className='price'>
          {price.toLocaleString('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          €
        </div>

        <div className='quantity'>
          <div className='qty'>
            <button
              className='btn'
              value='-'
              onClick={(e) => handleChange(e, index)}
            >
              -
            </button>
            <div>
              <input
                type='number'
                className='form-input'
                min='0'
                value={desiredQuantity}
                onChange={(e) => handleQuantityInput(e, index)}
              />
            </div>
            <button
              className='btn'
              value='+'
              onClick={(e) => handleChange(e, index)}
            >
              +
            </button>
          </div>
          {quantity - desiredQuantity > 0 || desiredQuantity == 0 ? (
            ''
          ) : (
            <>
              <div className='red'>not enough supply</div>
            </>
          )}
          {desiredQuantity == 0 && (
            <button
              className='btn'
              onClick={() => {
                handleRemove(index)
              }}
            >
              Remove
            </button>
          )}
        </div>
        <div className='total'>
          {(desiredQuantity * price).toLocaleString('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          €
        </div>
      </div>
    </>
  )
}

export default ProductRow
