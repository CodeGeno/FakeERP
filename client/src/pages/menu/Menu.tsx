import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import React, { useEffect, useState } from 'react'
import Wrapper from './MenuWrapper'
import { NavLink } from 'react-router-dom'
const Menu = React.memo(() => {
  const { showSlider, getRole } = useAppContext()

  const [rights, setRights] = useState<any>()
  useEffect(() => {
    fetchRights()
  }, [])
  const fetchRights = async () => {
    let data = await getRole(localStorage.getItem('userDetail'))
    console.log(data)
    setRights(data)
  }

  return (
    <Wrapper>
      {rights && (
        <div className={showSlider ? 'menu-list' : 'hide menu-list'}>
          <ul className='list-container'>
            {rights.manageRights !== 0 && (
              <NavLink to='/menu/manageRights' className='list-btn'>
                Manage Rights
              </NavLink>
            )}
            {rights.manageProducts !== 0 && (
              <NavLink to='/menu/products' className='list-btn'>
                Products
              </NavLink>
            )}
            {rights.manageClients !== 0 && (
              <NavLink to='/menu/clients' className='list-btn'>
                Clients
              </NavLink>
            )}
            {rights.employees !== 0 && (
              <NavLink to='/menu/employees' className='list-btn'>
                Employees
              </NavLink>
            )}

            {rights.inventory !== 0 && (
              <NavLink to='/menu/inventory' className='list-btn'>
                Inventory
              </NavLink>
            )}
            {rights.orders !== 0 && (
              <NavLink to='/menu/orders' className='list-btn'>
                Orders
              </NavLink>
            )}
          </ul>
        </div>
      )}
      <Outlet />
    </Wrapper>
  )
})
export default Menu
