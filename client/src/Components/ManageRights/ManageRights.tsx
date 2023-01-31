import { Outlet } from 'react-router-dom'
import Wrapper from './ManageWrapper'
import { NavLink } from 'react-router-dom'
const ManageRights: React.FC = () => {
  return (
    <Wrapper>
      <div className='section-container'>
        <div className='actions-section'>
          <NavLink to='/menu' className='btn'>
            Create Role
          </NavLink>
          <NavLink to='/menu/updateRoles' className='btn'>
            Manage Roles
          </NavLink>
          <NavLink to='/menu/assignRole' className='btn'>
            Assign Role
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default ManageRights
