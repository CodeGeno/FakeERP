import Wrapper from './ProductsWrapper'
import { NavLink, Outlet } from 'react-router-dom'
const Products: React.FC = () => {
  return (
    <Wrapper>
      <div className='section-container'>
        <div className='actions-section'>
          <NavLink to='/menu/products/create' className='btn'>
            Create Product
          </NavLink>
          <NavLink to='/menu/products/list' className='btn'>
            All Products
          </NavLink>
          <NavLink to='/menu/products/edit' className='btn'>
            Modify product
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default Products
