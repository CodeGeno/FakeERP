import { SetStateAction } from 'react'
import { ProductDB } from '../../Models/ProductModel'

const SelectInput: React.FC<{
  products: ProductDB[]
  selectedProduct: ProductDB
  updateProducts: ProductDB[]
  setSelectedProduct: React.Dispatch<SetStateAction<ProductDB>>
  setUpdateProducts: React.Dispatch<SetStateAction<ProductDB[]>>
}> = ({
  products,
  setSelectedProduct,
  setUpdateProducts,
  updateProducts,
  selectedProduct,
}) => {
  return (
    <>
      <select
        className='form-select'
        value={selectedProduct ? selectedProduct.name : ''}
        onChange={(e) => {
          setSelectedProduct(products[e.target.value])
        }}
      >
        <option disabled value=''>
          {products.length === updateProducts.length
            ? 'Add more products'
            : 'Please select an option'}
        </option>
        {products.map((product, index) => {
          const { name } = product

          if (
            updateProducts.length == 0 ||
            !updateProducts.some(
              (item) => item.id === product.id && item.name === product.name
            )
          ) {
            return (
              <option value={index} key={index}>
                {name}
              </option>
            )
          }
        })}
      </select>
      <button
        className='btn'
        onClick={() => {
          setUpdateProducts((prev) => [...prev, selectedProduct])
          setSelectedProduct(undefined)
        }}
      >
        Add
      </button>
    </>
  )
}

export default SelectInput
