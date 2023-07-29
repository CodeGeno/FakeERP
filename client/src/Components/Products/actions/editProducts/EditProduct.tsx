import { useAppContext } from '../../../../context/appContext'
import { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import Wrapper from './EditProductsWrapper'

const EditProduct: React.FC = () => {
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

  const handleProductChange = (e, index) => {
    let temp = products
    temp[index][e.target.name] = e.target.value

    setProducts([...temp])
  }
  const updateSingleProduct = (index, updatedProduct) => {
    let temp = products
    temp[index] = updatedProduct
    console.log(temp)
    setProducts([...temp])
  }
  return (
    <Wrapper>
      <input
        type='text'
        className='form-input'
        onChange={(e) => {
          setFilter(e.target.value)
        }}
      />
      <div className='titles'>
        <div>Product Name</div>
        <div>Quantity</div>
        <div>Price</div>
      </div>

      {products.map((product, index) => {
        if (product.name.toLowerCase().includes(filter.toLowerCase())) {
          return (
            <SingleProduct
              product={product}
              key={index}
              index={index}
              handleProductChange={handleProductChange}
              setProducts={setProducts}
              products={products}
              updateSingleProduct={updateSingleProduct}
            />
          )
        } else return
      })}
    </Wrapper>
  )
}

export default EditProduct
