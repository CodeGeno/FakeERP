import { useState } from 'react'
import { ProductDB } from '../../../Models/ProductModel'

const ProductSelect: React.FC<{
  selectedProducts: ProductDB[]
  productList: ProductDB[]
  handleChange
}> = ({ selectedProducts, productList, handleChange }) => {
  const [selectedIndex, setSelectedIndex] = useState('')
  return (
    <>
      <div className='select-section'>
        <label className='form-label'>Select Product:</label>
        <div className='select-button-section'>
          <select
            className='form-select'
            value={selectedIndex ? `${productList[selectedIndex].name}` : ''}
            onChange={(e) => {
              setSelectedIndex(e.target.value)
            }}
          >
            <option disabled value=''>
              {productList.length === selectedProducts.length
                ? 'Add more products'
                : 'Please select an option'}
            </option>
            {productList.map((product, index) => {
              const { name } = product

              if (
                selectedProducts.length == 0 ||
                !selectedProducts.some(
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
              handleChange(selectedIndex)
              setSelectedIndex('')
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  )
}
export default ProductSelect
