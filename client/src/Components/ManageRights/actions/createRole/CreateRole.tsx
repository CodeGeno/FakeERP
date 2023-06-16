import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../../context/appContext'
import Alert from '../../../Alert'
import Wrapper from './createRoleWrapper'

const CreateRole: React.FC = () => {
  const { createRole } = useAppContext()
  const initialState = {
    role: '',
    inventory: false,
    manageProducts: false,
    manageRights: false,
    orders: false,
    employees: false,
    manageClients: false,
  }
  const [newRole, setNewRole] = useState(initialState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewRole({ ...newRole, [e.target.name]: e.target.value })
  }
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRole({ ...newRole, [e.target.name]: e.target.checked })
  }
  const createNewRole = async () => {
    await createRole(newRole)
    setNewRole(initialState)
  }

  return (
    <Wrapper>
      <h2>Create Role</h2>
      <Alert />
      <div className='create-container'>
        <div className='name-section'>
          <label htmlFor='Role name' className='form-label'>
            Role name:
          </label>
          <input
            type='text'
            className='form-input'
            name='role'
            value={newRole.role}
            onChange={handleChange}
          />
        </div>
        <div className='right-section-single btn'>
          <input
            type='checkbox'
            name='manageProducts'
            onChange={handleCheck}
            checked={newRole.manageProducts} // Add checked attribute
          />
          <div>Manage Products</div>
        </div>
        <div className='right-section-single btn'>
          <input
            type='checkbox'
            name='inventory'
            onChange={handleCheck}
            checked={newRole.inventory} // Add checked attribute
          />
          <div>Manage Inventory</div>
        </div>
        <div className='right-section-single btn'>
          <input
            type='checkbox'
            name='manageClients'
            onChange={handleCheck}
            checked={newRole.manageClients} // Add checked attribute
          />
          <div>Manage Clients</div>
        </div>
        <div className='right-section-single btn'>
          <input
            type='checkbox'
            name='manageRights'
            onChange={handleCheck}
            checked={newRole.manageRights} // Add checked attribute
          />
          <div>Manage Rights</div>
        </div>
        <div className='right-section-single btn'>
          <input
            type='checkbox'
            name='orders'
            onChange={handleCheck}
            checked={newRole.orders} // Add checked attribute
          />
          <div>Create Orders</div>
        </div>
        <div className='right-section-single btn'>
          <input
            type='checkbox'
            name='employees'
            onChange={handleCheck}
            checked={newRole.employees} // Add checked attribute
          />
          <div>Manage Employees</div>
        </div>

        <div className='submit-btn-section'>
          <button className='btn' onClick={createNewRole}>
            CREATE ROLE
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default CreateRole
