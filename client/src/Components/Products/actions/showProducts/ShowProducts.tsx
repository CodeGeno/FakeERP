import { useEffect, useState } from 'react'

import Alert from './../../../Alert'
import { useAppContext } from '../../../../context/appContext'
import Wrapper from './ShowProductsWrapper'
import SingleProduct from './SingleProduct'

function CreateProduct() {
  const { getAllProducts, getImages } = useAppContext()
  const [filter, setFilter] = useState('')
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    let result = await getAllProducts()
    setProducts(result)
  }
  useEffect(() => {
    getProducts()
  }, [])

  const [imageUrl, setImageUrl] = useState(null)

  return (
    <Wrapper>
      <label>
        Search :
        <input
          type='text'
          className='form-input'
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        />
      </label>

      <div className='product'>
        {products.length > 0 &&
          products.map((product, index) => {
            if (product.name.toLowerCase().includes(filter.toLowerCase())) {
              return <SingleProduct key={index} product={product} />
            } else return
          })}
      </div>
    </Wrapper>
  )
}
export default CreateProduct

// const { images, name } = product
//  {
//    return images.map((image) => {
//      const path = 'http://localhost:3001' + `/uploads/images/${name}/${image}`

//      return <img src={path} />
//    })
//  }
