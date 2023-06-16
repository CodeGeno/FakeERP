import { useEffect } from 'react'
import { useAppContext } from '../../../../context/appContext'
import { Role, UserRole } from '../../../../Models/ContextModel'
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
      <h2>Assign Role</h2>
      <label htmlFor='Search'>Search:</label>
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
          users.map((user, index) => {
            if (
              user.email.toLowerCase().includes(search) ||
              user.role.toLowerCase().includes(search)
            ) {
              return (
                <SingleUserRole
                  key={index}
                  roles={roles}
                  user={user}
                  getData={getData}
                />
              )
            } else {
              return
            }
          })}
      </div>
    </Wrapper>
  )
}
export default AssignRole
