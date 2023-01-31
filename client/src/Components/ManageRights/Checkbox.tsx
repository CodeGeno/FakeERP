import { Role } from '../../context/appContext'
import { useState, useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
const Checkbox: React.FC<{
  selectedRole: Role
  roleIndex: number
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void
  deletingRole: () => void
}> = ({ selectedRole, handleCheck, roleIndex, deletingRole }) => {
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
      <div className='right-section-single btn'>
        <input
          type='checkbox'
          name='manageProducts'
          onChange={handleCheck}
          defaultChecked={selectedRole.manageProducts}
        />
        <div>Manage Products</div>
      </div>
      <div className='right-section-single btn'>
        <input
          type='checkbox'
          name='estimate'
          onChange={handleCheck}
          defaultChecked={selectedRole.estimate}
        />
        <div>Create Estimates</div>
      </div>
      <div className='right-section-single btn'>
        <input
          type='checkbox'
          name='manageClients'
          onChange={handleCheck}
          defaultChecked={selectedRole.manageClients}
        />
        <div>Manage Clients</div>
      </div>
      <div className='right-section-single btn'>
        <input
          type='checkbox'
          name='manageRights'
          onChange={handleCheck}
          defaultChecked={selectedRole.manageRights}
        />
        <div>Manage Rights</div>
      </div>
      <div className='right-section-single btn'>
        <input
          type='checkbox'
          name='orders'
          onChange={handleCheck}
          defaultChecked={selectedRole.orders}
        />
        <div>Create Orders</div>
      </div>
      <div className='right-section-single btn'>
        <input
          type='checkbox'
          name='accounting'
          onChange={handleCheck}
          defaultChecked={selectedRole.accounting}
        />
        <div>Accounting</div>
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
