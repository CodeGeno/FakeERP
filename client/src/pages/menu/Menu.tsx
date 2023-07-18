import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import React, { useEffect, useState } from 'react'
import Wrapper from './MenuWrapper'
import { NavLink } from 'react-router-dom'
const Menu = React.memo(() => {
  const { showSlider, getRole, handleMenuPress } = useAppContext()

  const [rights, setRights] = useState<any>()
  useEffect(() => {
    fetchRights()
  }, [])
  const fetchRights = async () => {
    let data = await getRole(localStorage.getItem('userDetail'))
    setRights(data)
  }

  return (
    <Wrapper>
      {rights && (
        <div className={showSlider ? 'menu-list' : 'hide menu-list'}>
          <ul className={showSlider ? 'list-container' : 'hide list-container'}>
            {rights.manageRights !== 0 && (
              <NavLink
                to='/menu/manageRights'
                className='list-btn btn'
                onClick={handleMenuPress}
              >
                Manage Rights
              </NavLink>
            )}
            {rights.manageProducts !== 0 && (
              <NavLink
                to='/menu/products'
                className='list-btn btn'
                onClick={handleMenuPress}
              >
                Products
              </NavLink>
            )}
            {rights.manageClients !== 0 && (
              <NavLink
                to='/menu/clients'
                className='list-btn btn'
                onClick={handleMenuPress}
              >
                Clients
              </NavLink>
            )}
            {rights.employees !== 0 && (
              <NavLink
                to='/menu/employees'
                className='list-btn btn'
                onClick={handleMenuPress}
              >
                Employees
              </NavLink>
            )}

            {rights.inventory !== 0 && (
              <NavLink
                to='/menu/inventory'
                className='list-btn btn'
                onClick={handleMenuPress}
              >
                Inventory
              </NavLink>
            )}
            {rights.orders !== 0 && (
              <NavLink
                to='/menu/orders'
                className='list-btn btn'
                onClick={handleMenuPress}
              >
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
