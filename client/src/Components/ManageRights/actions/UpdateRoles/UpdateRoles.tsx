import { useAppContext } from '../../../../context/appContext'
import { useEffect, useState } from 'react'
import { Role } from '../../../../context/appContext'
import Wrapper from './UpdateRolesWrapper'
import Checkbox from '../../Checkbox'
import Alert from '../../../Alert'
function UpdateRoles() {
  const { getRoles, deleteRole } = useAppContext()
  const [roles, setRoles] = useState<Role[] | void>()
  const [selectedRole, setSelectedRole] = useState<Role>()
  const [roleIndex, setRoleIndex] = useState<number>()

  const getData: () => void = async () => {
    const data = await getRoles()
    setRoles(data)
  }

  const deletingRole: () => void = async () => {
    try {
      deleteRole(selectedRole)
    } catch (error) {
      console.log(error)
    }
    getData()
    setSelectedRole(null)
    setRoleIndex(null)
  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log(selectedRole)
  }, [selectedRole])

  useEffect(() => {
    if (roles) {
      setSelectedRole(roles[roleIndex])
    }
  }, [roleIndex])

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole({ ...selectedRole, [e.target.name]: e.target.checked })
  }
  return (
    <Wrapper>
      <h2>ManagerRights</h2>
      <div>
        <Alert />
        <div className='form-label'>Select Role:</div>

        {roles ? (
          <select
            className='form-select'
            onChange={(e) => {
              setRoleIndex(Number(e.target.value))
              setSelectedRole(roles[e.target.value])
            }}
          >
            <option>Choose role</option>
            {roles &&
              roles.map((role, index) => {
                return (
                  <option value={index} key={index}>
                    {role.role}
                  </option>
                )
              })}
          </select>
        ) : (
          'Create a role to acces this section'
        )}
      </div>
      {selectedRole && (
        <>
          <Checkbox
            selectedRole={selectedRole}
            handleCheck={handleCheck}
            roleIndex={roleIndex}
            deletingRole={deletingRole}
          />
        </>
      )}
    </Wrapper>
  )
}
export default UpdateRoles
