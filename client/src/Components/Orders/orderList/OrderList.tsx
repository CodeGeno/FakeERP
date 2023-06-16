import { useAppContext } from '../../../context/appContext'
import { useEffect, useState } from 'react'
import SingleOrder from './SingleOrder'
import Wrapper from '../OrdersWrapper'
const OrderList: React.FC = () => {
  const { getAllOrders, userDetail } = useAppContext()
  //states
  const [orders, setOrders] = useState([])
  const [search, setSearch] = useState('')
  const updateSingleOrder = (order, index) => {
    let temp = orders
    temp[index] = order
    setOrders([...temp])
  }
  //fetching data
  const fetchData = async () => {
    let data = await getAllOrders()
    setOrders(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const checkContained = (item, shouldMap?) => {
    let isValueFound = false

    for (let key in item) {
      if (item[key]?.toString().toUpperCase().includes(search.toUpperCase())) {
        isValueFound = true
        break
      }
    }
    if (shouldMap) {
      let result = false
      item.map((singleItem) => {
        if (checkContained(singleItem)) result = true
      })
      if (result) isValueFound = result
    }
    return isValueFound
  }

  return (
    <>
      <Wrapper>
        <label className='form-label'>Search:</label>
        <input
          className='form-input'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
        <div className='all-orders'>
          {orders.length > 0 &&
            orders.map((order, index) => {
              if (
                checkContained(order) ||
                checkContained(order.products, true)
              ) {
                return (
                  <SingleOrder
                    key={index}
                    order={order}
                    index={index}
                    updateSingleOrder={updateSingleOrder}
                  />
                )
              }
            })}
        </div>
      </Wrapper>
    </>
  )
}
export default OrderList
