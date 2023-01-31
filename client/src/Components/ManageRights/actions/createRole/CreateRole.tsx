import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../../context/appContext'
import Alert from '../../../Alert'
import Wrapper from './createRoleWrapper'

const CreateRole: React.FC = () => {
  const { createRole } = useAppContext()
  const initialState = {
    role: '',
    estimate: false,
    manageProducts: false,
    manageRights: false,
    orders: false,
    accounting: false,
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
  useEffect(() => {
    console.log(newRole)
  }, [newRole])
  return (
    <Wrapper>
      <h2>CreateRole</h2>
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
          <input type='checkbox' name='manageProducts' onChange={handleCheck} />
          <div>Manage Products</div>
        </div>
        <div className='right-section-single btn'>
          <input type='checkbox' name='estimate' onChange={handleCheck} />
          <div>Create Estimates</div>
        </div>
        <div className='right-section-single btn'>
          <input type='checkbox' name='manageClients' onChange={handleCheck} />
          <div>Manage Clients</div>
        </div>
        <div className='right-section-single btn'>
          <input type='checkbox' name='manageRights' onChange={handleCheck} />
          <div>Manage Rights</div>
        </div>
        <div className='right-section-single btn'>
          <input type='checkbox' name='orders' onChange={handleCheck} />
          <div>Create Orders</div>
        </div>
        <div className='right-section-single btn'>
          <input type='checkbox' name='accounting' onChange={handleCheck} />
          <div>Accounting</div>
        </div>
        <div className='submit-btn-section'>
          <button
            className='btn'
            onClick={(e) => {
              e.preventDefault()
              createRole(newRole)
            }}
          >
            CREATE ROLE
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default CreateRole
