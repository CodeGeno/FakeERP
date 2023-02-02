import { Outlet } from 'react-router-dom'
import Wrapper from './MenuWrapper'

function Menu() {
  return (
    <Wrapper>
      <div className=' menu-list'>
        <ul className='list-container'>
          <li className='list-btn'>Factures</li>
          <li className='list-btn'>Devis</li>
          <li className='list-btn'>Commandes</li>
          <li className='list-btn'>Clients</li>
        </ul>
      </div>
      <Outlet />
    </Wrapper>
  )
}
export default Menu
