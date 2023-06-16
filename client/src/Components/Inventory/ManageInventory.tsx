import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext'
import Wrapper from './ManageInventoryWrapper'

import SelectInput from './SelectInput'
import { ProductDB } from '../../Models/ProductModel'
import TableRow from './TableRow'
import Alert from '../Alert'

const ManageInventory: React.FC<{}> = () => {
  const { getProductsInventory, updateInventory } = useAppContext()
  const [products, setProducts] = useState<ProductDB[]>([])
  const [selectedProduct, setSelectedProduct] = useState<ProductDB>()
  const [updateProducts, setUpdateProducts] = useState<ProductDB[]>([])

  useEffect(() => {}, [updateProducts])
  //Fetch Product DATA
  const fetchData = async () => {
    let result = await getProductsInventory()
    setProducts(result)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Wrapper>
      <div className='section-container'>
        <h2>Manage inventory</h2>
        <Alert />
        <div className='select-section'>
          {products.length > 0 && (
            <SelectInput
              products={products}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              setUpdateProducts={setUpdateProducts}
              updateProducts={updateProducts}
            />
          )}
        </div>
        {updateProducts.length > 0 && (
          <>
            <div className='product-table'>
              <div className='column-names'>
                <div className='product-name'>Product Name</div>
                <div className='product-quantity'>Quantity</div>
                <div className='product-order'>Last Order</div>
              </div>
              {updateProducts.map((product, index) => {
                return (
                  <TableRow
                    product={product}
                    key={index}
                    index={index}
                    setUpdateProducts={setUpdateProducts}
                    updateProducts={updateProducts}
                  />
                )
              })}
            </div>
            <div className='btn-section'>
              <button
                className='btn'
                onClick={() => {
                  updateInventory(updateProducts)
                  setUpdateProducts([])
                }}
              >
                Update
              </button>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  )
}

export default ManageInventory
