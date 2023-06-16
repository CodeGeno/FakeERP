import { useState } from 'react'
import { Employee } from '../../../Models/EmployeeModel'
import InputRow from '../InputRow'
import { useAppContext } from '../../../context/appContext'
import Alert from '../../Alert'

const CreateEmployee: React.FC<{}> = ({}) => {
  const { createEmployee } = useAppContext()
  const initialState = {
    lastName: '',
    firstName: '',
    street: '',
    zipCode: null,
    country: '',
    birthDate: null,
    role: '',
    salary: null,
  }

  const [employee, setEmployee] = useState<Employee>(initialState)
  const handleInput = (e) => {
    let temp = employee
    temp[e.target.name] = e.target.value
    console.log(temp[e.target.name])
    setEmployee({ ...temp })
  }
  const handleDate = (e: any) => {
    console.log(e.target.value)
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      birthDate: new Date(e.target.value),
    }))
  }
  const handleSubmit = async () => {
    let result = await createEmployee(employee)
    console.log(result)
    // setEmployee(initialState)
  }
  return (
    <>
      <Alert />
      <InputRow
        name='lastName'
        placeholder='Enter last name'
        value={employee.lastName}
        handleChange={handleInput}
        type='text'
      />
      <InputRow
        name='firstName'
        placeholder='Enter first name'
        value={employee.firstName}
        handleChange={handleInput}
        type='text'
      />
      <InputRow
        name='street'
        placeholder='Enter street'
        value={employee.street}
        handleChange={handleInput}
        type='text'
      />
      <InputRow
        name='zipCode'
        placeholder='Enter zip code'
        value={employee.zipCode || ''}
        handleChange={handleInput}
        type='number'
      />
      <InputRow
        name='country'
        placeholder='Enter country'
        value={employee.country}
        handleChange={handleInput}
        type='text'
      />
      <InputRow
        name='birthDate'
        placeholder='Enter birth date'
        value={
          employee.birthDate
            ? employee.birthDate.toISOString().slice(0, 10)
            : ''
        }
        handleChange={handleDate}
        type='date'
      />
      <InputRow
        name='role'
        placeholder='Enter role'
        value={employee.role}
        handleChange={handleInput}
        type='text'
      />
      <InputRow
        name='salary'
        placeholder='Enter salary'
        value={employee.salary || ''}
        handleChange={handleInput}
        type='number'
      />
      <div className='btn-section'>
        <button className='btn' onClick={handleSubmit}>
          Submit
        </button>
        <button className='btn'>Reset</button>
      </div>
    </>
  )
}
export default CreateEmployee
