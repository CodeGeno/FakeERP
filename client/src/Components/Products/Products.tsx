import Wrapper from './ProductsWrapper'
import { NavLink, Outlet } from 'react-router-dom'
const Products: React.FC = () => {
  return (
    <Wrapper>
      <div className='section-container'>
        <div className='btn-container'>
          <NavLink to='/menu/products/create' className='btn'>
            Create Product
          </NavLink>
          <NavLink to='/menu/products/list' className='btn'>
            All Products
          </NavLink>
          <NavLink to='/menu/products/edit' className='btn'>
            Edit product
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default Products
