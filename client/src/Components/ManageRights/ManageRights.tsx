import { Outlet } from 'react-router-dom'
import Wrapper from './ManageWrapper'

function ManageRights() {
  return (
    <Wrapper>
      <div className='section-container'>
        <h1>Manage Rights</h1>
        <div className='actions-section'>
          <button className='btn'>Create Role</button>
          <button className='btn'>Manage Roles</button>
        </div>
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default ManageRights
