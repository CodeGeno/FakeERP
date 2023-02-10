import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import Wrapper from './MenuWrapper'

function Menu() {
  const { showSlider } = useAppContext()
  return (
    <Wrapper>
      <div className={showSlider ? 'menu-list' : 'hide menu-list'}>
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
