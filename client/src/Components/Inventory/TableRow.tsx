import { SetStateAction } from 'react'
import { ProductDB } from '../../Models/ProductModel'

const TableRow: React.FC<{
  product: ProductDB
  index: number
  updateProducts: ProductDB[]
  setUpdateProducts: React.Dispatch<SetStateAction<ProductDB[]>>
}> = ({ product, index, updateProducts, setUpdateProducts }) => {
  const { name, quantity, lastOrder } = product
  return (
    <div className='table-row'>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <button
          className='btn'
          onClick={() => {
            let temp = updateProducts
            if (temp[index].quantity > 1) temp[index].quantity -= 1
            setUpdateProducts([...temp])
          }}
        >
          -
        </button>
        <input
          type='number'
          className='form-input'
          min='0'
          value={quantity}
          onChange={(e) => {
            let temp = updateProducts
            temp[index].quantity = Number(e.target.value)
            setUpdateProducts([...temp])
          }}
        />
        <button
          className='btn'
          onClick={() => {
            let temp = updateProducts
            temp[index].quantity += 1
            setUpdateProducts([...temp])
          }}
        >
          +
        </button>
      </div>
      <div className='order'>
        {lastOrder ? `${lastOrder.slice(0, 10)}` : 'No last order'}
      </div>
    </div>
  )
}
export default TableRow
