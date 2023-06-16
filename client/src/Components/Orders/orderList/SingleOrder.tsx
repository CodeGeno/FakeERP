import { useEffect, useState } from 'react'
import ProductLine from './ProductLine'
import { useAppContext } from '../../../context/appContext'
import Alert from '../../Alert'

const SingleOrder: React.FC<{
  order: any
  index: number
  updateSingleOrder: (order: any, index: number) => void
}> = ({ order, updateSingleOrder, index }) => {
  const { updateOrderStatus } = useAppContext()
  const [showMore, setShowMore] = useState(true)
  const { company, deliveryDate, orderDate, orderStatus, products } = order
  const [newStatus, setNewStatus] = useState(orderStatus)
  const [showAlert, setShowAlert] = useState(false)

  const handleUpdate = async () => {
    setShowAlert(true)
    let response = await updateOrderStatus(order, newStatus)
    if (response) {
      updateSingleOrder(response, index)
    }
    setNewStatus(newStatus)
    setTimeout(() => {
      setShowAlert(false)
    }, 4000)
  }
  return (
    <>
      {showAlert && <Alert />}
      <div className='singleOrder-container'>
        <div className='company-row'>
          <div>Company: {company}</div>
          <div>DeliveryDate: {deliveryDate.substring(0, 10)}</div>
        </div>
        <div className='status-row'></div>
        <div>Ordered on: {orderDate.substring(0, 10)} </div>
        <div>
          Status :
          <select
            value={newStatus}
            onChange={(e) => {
              setNewStatus(e.target.value)
            }}
          >
            <option disabled value=''>
              Select status
            </option>
            <option value='pending'>Pending</option>
            <option value='done'>Done</option>
            <option value='cancelled'>Cancelled</option>
          </select>
        </div>
        {showMore && (
          <>
            <div className='product-section'>
              <div className='title'>
                <div className='name'>Name</div>
                <div className='price'>Price</div>
                <div className='qty'>Quantity</div>
                <div
                  className='total
          '
                >
                  Total
                </div>
              </div>

              {products?.length > 0 &&
                products.map((product, index) => {
                  return (
                    <ProductLine
                      key={index}
                      index={index}
                      product={product}
                      status={order.orderStatus}
                    />
                  )
                })}
            </div>
          </>
        )}
        <div className='btn-container'>
          {showMore && (
            <div className='edit-section'>
              <button className='btn' onClick={handleUpdate}>
                Update
              </button>
              <button className='btn'>Cancel</button>
            </div>
          )}
          <div>
            <button
              className='btn'
              onClick={() => {
                setShowMore(!showMore)
              }}
            >
              {showMore ? 'Hide' : ' Show details'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleOrder
