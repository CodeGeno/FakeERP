import { useState, useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import { Employee } from '../../../Models/EmployeeModel'
import SingleEmployee from './SingleEmployee'
import Wrapper from './ModifyEmployeeWrapper'
import Alert from '../../Alert'

const ModifyEmployee: React.FC<{}> = () => {
  const { getEmployees } = useAppContext()
  const [employees, setEmployees] = useState<Employee[]>([])
  const [search, setSearch] = useState('')
  const [employeeNames, setEmployeeNames] = useState<string[]>([])
  const fetchEmployees = async () => {
    let temp = await getEmployees()
    let names = []
    for (const employee of temp) {
      const { lastName, firstName } = employee
      let name = firstName + ' ' + lastName

      names.push(name)
    }

    setEmployees(temp)
    setEmployeeNames(names)
  }
  useEffect(() => {
    fetchEmployees()
  }, [])

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let temp = employees
    temp[index][e.target.name] = e.target.value
    console.log(temp)
    setEmployees([...temp])
  }

  return (
    <>
      <Wrapper>
        <div className='search-section'>
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
          <Alert />
          {employees.length > 0 &&
            employees.map((employee, index) => {
              if (checkObjectForValue(employee, search)) {
                return (
                  <div className='employee-box' key={index}>
                    <SingleEmployee
                      employeeNames={employeeNames}
                      setEmployeeNames={setEmployeeNames}
                      setEmployees={setEmployees}
                      employees={employees}
                      employee={employee}
                      index={index}
                      handleChange={handleChange}
                      key={index}
                    />
                  </div>
                )
              } else return
            })}
        </div>
      </Wrapper>
    </>
  )
}
export default ModifyEmployee
