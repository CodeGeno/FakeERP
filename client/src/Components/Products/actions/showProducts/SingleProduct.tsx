import { useEffect, useState } from 'react'
import { ProductDB } from '../../../../Models/ProductModel'
import ProductImage from './ProductImage'

const SingleProduct: React.FC<{ product: ProductDB; index: number }> = ({
  product,
  index,
}) => {
  const [initialState, setInitialState] = useState(product)
  const [showMore, setShowMore] = useState(false)
  initialState.images.forEach((image) => image)
  const { description, images, name, path, price, id, quantity } = product
  const columnClassNames = () => {
    if (showMore) {
      if (index % 2 == 0) return 'product-box'
      else return 'white product-box '
    } else {
      if (index % 2 == 0) return 'hidden product-box'
      else return 'white hidden product-box white'
    }
  }
  return (
    <div
      className={columnClassNames()}
      onClick={() => {
        if (!showMore) setShowMore(true)
      }}
    >
      <div className='top'>
        <div className='value'>{name}</div>
        <div className='value'> {quantity}</div>
        <div className='value'> {price} $</div>
      </div>
      {showMore && (
        <div className='bottom'>
          {images.map((image, index) => {
            const path =
              'https://fakeerp.site' + `/uploads/images/${name}/${image}`
            return <ProductImage path={path} key={index} index={index} />
          })}
        </div>
      )}
      {showMore && (
        <button
          className='btn'
          onClick={() => {
            setShowMore(false)
          }}
        >
          Hide
        </button>
      )}
    </div>
  )
}
export default SingleProduct
