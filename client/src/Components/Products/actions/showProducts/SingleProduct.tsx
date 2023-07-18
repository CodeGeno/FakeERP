import { useEffect, useState } from 'react'
import { ProductDB } from '../../../../Models/ProductModel'
import ProductImage from './ProductImage'

const SingleProduct: React.FC<{ product: ProductDB }> = ({ product }) => {
  const [initialState, setInitialState] = useState(product)
  initialState.images.forEach((image) => image)
  const [isEditing, setIsEditing] = useState(false)
  const { description, images, name, path, price, id } = product
  return (
    <div className='product-box'>
      <div className='top'>
        <div>
          <div className='title'>Product Name:</div>
          <div className='value'>{name}</div>
        </div>
        <div>
          <div className='title'>Price: </div>
          <div className='value'> {price} $</div>
        </div>
      </div>
      <div className='bottom'>
        {/* <button className='btn'>Edit</button> */}

        {images.map((image, index) => {
          const path =
            'https://fakeerp.site' + `/uploads/images/${name}/${image}`
          return <ProductImage path={path} key={index} index={index} />
        })}
      </div>
    </div>
  )
}
export default SingleProduct
