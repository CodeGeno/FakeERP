import { useEffect, useState } from 'react'
import { Employee } from '../../../Models/EmployeeModel'
import InputRow from '../../InputRow'
import { useAppContext } from '../../../context/appContext'
const SingleEmployee: React.FC<{
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>
  setEmployeeNames: React.Dispatch<React.SetStateAction<string[]>>
  employees: Employee[]
  employee: Employee
  employeeNames: string[]
  index: number
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => any
}> = ({
  employee,
  index,
  handleChange,
  employeeNames,
  employees,
  setEmployees,
  setEmployeeNames,
}) => {
  const { updateEmployee, deleteEmployee } = useAppContext()
  const [show, setShow] = useState(false)

  const [deleteChecked, setDeleteChecked] = useState(false)
  const handleDelete = async (id, index) => {
    deleteEmployee(id)
    let temp = employees
    let names = employeeNames
    temp.splice(index, 1)
    names.splice(index, 1)
    setEmployeeNames([...names])
    setEmployees([...temp])
  }
  return (
    <>
      <h3>{employeeNames[index]}</h3>
      {show && (
        <>
          <InputRow
            object={employee}
            handleChange={handleChange}
            index={index}
            name='firstName'
          />
          <InputRow
            object={employee}
            index={index}
            name='lastName'
            placeholder='Last Name'
            handleChange={handleChange}
          />
          <InputRow
            object={employee}
            index={index}
            name='birthDate'
            placeholder='birthDate'
            date={true}
            handleChange={handleChange}
          />
          <InputRow
            object={employee}
            index={index}
            name='street'
            placeholder='Street'
            handleChange={handleChange}
          />
          <InputRow
            object={employee}
            index={index}
            name='zipCode'
            placeholder='ZIP code'
            handleChange={handleChange}
          />
          <InputRow
            object={employee}
            index={index}
            name='role'
            placeholder='Role'
            handleChange={handleChange}
          />
        </>
      )}

      <div className='button-section'>
        {show && (
          <button
            className='btn'
            onClick={() => {
              updateEmployee(employee)
              setShow(false)
            }}
          >
            Update
          </button>
        )}
        <button
          className='btn'
          onClick={() => {
            setShow(!show)
          }}
        >
          {show ? 'Hide' : 'Show'}
        </button>
        <button
          className='red btn'
          onClick={(e) => {
            if (!deleteChecked) setDeleteChecked(true)
            else {
              handleDelete(employee.id, index)
            }
          }}
        >
          {deleteChecked ? 'Confirm' : 'Delete'}
        </button>
      </div>
    </>
  )
}
export default SingleEmployee
