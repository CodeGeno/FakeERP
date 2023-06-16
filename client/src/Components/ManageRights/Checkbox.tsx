import { Role, UserRole } from './../../Models/ContextModel'

import { useState, useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
const Checkbox: React.FC<{
  selectedRole: Role
  roleIndex: number
  handleBoxPress: (property: string) => void
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void
  deletingRole: () => void
}> = ({
  selectedRole,
  handleCheck,
  roleIndex,
  handleBoxPress,
  deletingRole,
}) => {
  const { updateRole } = useAppContext()
  const [deleteVerification, setDeleteVerification] = useState<boolean>(false)
  const handleDelete: () => void = () => {
    if (deleteVerification) {
      deletingRole()
    } else {
      setDeleteVerification(true)
    }
  }

  return (
    <div key={roleIndex}>
      <div
        className='right-section-single btn'
        onClick={() => {
          handleBoxPress('manageProducts')
        }}
      >
        <input
          type='checkbox'
          name='manageProducts'
          onChange={handleCheck}
          checked={selectedRole.manageProducts} // Add checked property here
        />
        <div>Manage Products</div>
      </div>

      <div
        className='right-section-single btn'
        onClick={() => {
          handleBoxPress('inventory')
        }}
      >
        <input
          type='checkbox'
          name='inventory'
          onChange={handleCheck}
          checked={selectedRole.inventory} // Add checked property here
        />
        <div>Manage Inventory</div>
      </div>

      <div
        className='right-section-single btn'
        onClick={() => {
          handleBoxPress('manageClients')
        }}
      >
        <input
          type='checkbox'
          name='manageClients'
          onChange={handleCheck}
          checked={selectedRole.manageClients} // Add checked property here
        />
        <div>Manage Clients</div>
      </div>

      <div
        className='right-section-single btn'
        onClick={() => {
          handleBoxPress('manageRights')
        }}
      >
        <input
          type='checkbox'
          name='manageRights'
          onChange={handleCheck}
          checked={selectedRole.manageRights} // Add checked property here
        />
        <div>Manage Rights</div>
      </div>

      <div
        className='right-section-single btn'
        onClick={() => {
          handleBoxPress('orders')
        }}
      >
        <input
          type='checkbox'
          name='orders'
          onChange={handleCheck}
          checked={selectedRole.orders} // Add checked property here
        />
        <div>Create Orders</div>
      </div>

      <div
        className='right-section-single btn'
        onClick={() => {
          handleBoxPress('employees')
        }}
      >
        <input
          type='checkbox'
          name='employees'
          onChange={handleCheck}
          checked={selectedRole.employees} // Add checked property here
        />
        <div>Manage Employees</div>
      </div>

      <div className='submit-btn-section'>
        <button
          className='btn'
          onClick={(e) => {
            e.preventDefault()
            updateRole(selectedRole)
          }}
        >
          Update Role
        </button>
        <button
          className={deleteVerification ? 'alert-danger alert' : 'btn'}
          onClick={handleDelete}
        >
          {deleteVerification ? 'Confirm' : 'Delete Role'}
        </button>
      </div>
    </div>
  )
}
export default Checkbox
