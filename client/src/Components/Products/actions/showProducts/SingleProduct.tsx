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
      <div className='left'>
        <h3>Product Name: {name}</h3>
        <h4>Price: {price} $</h4>
      </div>
      <div className='right'>
        {/* <button className='btn'>Edit</button> */}
        <div>
          <div className='img-box'>
            {images.map((image, index) => {
              const path =
                'http://localhost:3001' + `/uploads/images/${name}/${image}`
              return <ProductImage path={path} key={index} index={index} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleProduct
