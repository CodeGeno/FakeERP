import { useEffect, useState } from 'react'
import { Employee } from '../../../Models/EmployeeModel'
import { useAppContext } from '../../../context/appContext'
import SingleEmployee from './SingleEmployee'

const ShowEmployees: React.FC<{}> = () => {
  const { getEmployees } = useAppContext()
  const [employees, setEmployees] = useState<Employee[]>([])
  const [search, setSearch] = useState('')
  const fetchEmployees = async () => {
    let temp = await getEmployees()
    setEmployees(temp)
  }
  useEffect(() => {
    fetchEmployees()
  })
  const checkObjectForValue = (obj, value) => {
    for (let key in obj) {
      if (
        obj.hasOwnProperty(key) &&
        (typeof obj[key] === 'string' || typeof obj[key] === 'number') &&
        obj[key]
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      ) {
        return true
      }
    }
    return false
  }

  return (
    <>
      <div>
        <label>Search:</label>
        <input
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </div>
      <div className='employees-section'>
        {employees.map((employee, index) => {
          if (checkObjectForValue(employee, search)) {
            return (
              <SingleEmployee employee={employee} index={index} key={index} />
            )
          } else return
        })}
      </div>
    </>
  )
}
export default ShowEmployees
