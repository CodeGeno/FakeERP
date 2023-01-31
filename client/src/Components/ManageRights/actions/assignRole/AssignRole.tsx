import { useEffect } from 'react'
import { useAppContext, Role, UserRole } from '../../../../context/appContext'
import { useState } from 'react'
import Wrapper from './AssignRoleWrapper'
import SingleUserRole from './SingleUserRole'
const AssignRole: React.FC = () => {
  const [roles, setRoles] = useState<Role[] | void>()
  const [users, setUsers] = useState<UserRole[] | void>()
  const [search, setSearch] = useState<string>('')
  const { getRoles, getUsers } = useAppContext()
  const getData: () => void = async () => {
    try {
      const userData = await getUsers()
      setUsers(userData)
    } catch (error) {
      console.log(error)
    }
    try {
      const rolesData = await getRoles()
      setRoles(rolesData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Wrapper>
      <h3>Assign Role</h3>
      <label htmlFor='Search'>Search</label>
      <input
        type='text'
        className='form-input'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase())
        }}
      />
      <div className='roles-section'>
        {users &&
          roles &&
          users.map((user) => {
            if (
              user.email.toLowerCase().includes(search) ||
              user.role.toLowerCase().includes(search)
            )
              return (
                <SingleUserRole roles={roles} user={user} getData={getData} />
              )
          })}
      </div>
    </Wrapper>
  )
}
export default AssignRole
