import { Outlet } from 'react-router-dom'
import Wrapper from './OrdersWrapper'
import { NavLink } from 'react-router-dom'
const OrdersRoutes: React.FC = () => {
  return (
    <Wrapper>
      <div className='section-container'>
        <div className='btn-container'>
          <NavLink to='/menu/orders/create' className='btn'>
            New Order
          </NavLink>
          <NavLink to='/menu/orders/list' className='btn'>
            Orders List
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default OrdersRoutes
