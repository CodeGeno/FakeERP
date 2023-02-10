import { Outlet } from 'react-router-dom'
import Wrapper from './ClientsWrapper'
import { NavLink } from 'react-router-dom'
const Clients: React.FC = () => {
  return (
    <Wrapper>
      <div className='section-container'>
        <div className='actions-section'>
          <NavLink to='/menu/clients' className='btn'>
            New client
          </NavLink>
          <NavLink to='/menu/clients/manage' className='btn'>
            Manage Client
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default Clients
