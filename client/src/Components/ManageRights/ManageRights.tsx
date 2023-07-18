import { Outlet } from 'react-router-dom'
import Wrapper from './ManageWrapper'
import { NavLink } from 'react-router-dom'
const ManageRights: React.FC = () => {
  return (
    <Wrapper>
      <div className='section-container'>
        <div className='btn-container'>
          <NavLink to='/menu/manageRights' className='btn'>
            Create Role
          </NavLink>
          <NavLink to='/menu/manageRights/updateRoles' className='btn'>
            Manage Roles
          </NavLink>
          <NavLink to='/menu/manageRights/assignRole' className='btn'>
            Assign Role
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default ManageRights
