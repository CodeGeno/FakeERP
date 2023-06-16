import { useEffect, useState } from 'react'
import { useAppContext } from '../../../../context/appContext'
import { Role, UserRole } from '../../../../Models/ContextModel'
import Alert from '../../../Alert'
import Wrapper from './SingleUserRoleWrapper'

const SingleUserRole: React.FC<{
  roles: Role[]
  user: UserRole
  getData: () => void
}> = ({ roles, user, getData }) => {
  const { updateUser } = useAppContext()
  const [show, setShow] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [selectedRole, setSelectedRole] = useState<string>()

  const handleUpdate = async () => {
    if (selectedRole !== undefined) {
      try {
        updateUser(user, selectedRole)
        setShowAlert(true)
        getData()
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      {showAlert && <Alert />}
      <Wrapper className='single-user-container' show={show}>
        <div className='user-container'>
          <div
            className='btn user-row'
            onClick={() => {
              setShow(!show)
            }}
          >
            <div className='user-part-left'>{user.email}</div>
            <div className='user-part-right'>{user.role}</div>
          </div>

          {show && (
            <>
              <div className='options'>
                <label className='form-label'>new Role:</label>
                <select
                  className='form-select'
                  onChange={(e) => {
                    setSelectedRole(e.target.value)
                  }}
                >
                  <option value=''>Select a Role</option>
                  {roles.map((role, index) => {
                    if (role.role !== user.role) {
                      return (
                        <option key={index} value={role.role}>
                          {role.role}
                        </option>
                      )
                    }
                  })}
                </select>
              </div>
              <div className='button-section'>
                <button
                  className='btn'
                  onClick={handleUpdate}
                  disabled={selectedRole === undefined}
                >
                  Update Role
                </button>
                <button className='btn'>Cancel</button>
              </div>
            </>
          )}
        </div>
      </Wrapper>
    </>
  )
}
export default SingleUserRole
