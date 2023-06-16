import { useState } from 'react'
import { Employee } from '../../../Models/EmployeeModel'

const SingleEmployee: React.FC<{ employee: Employee; index: number }> = ({
  employee,
  index,
}) => {
  const [show, setShow] = useState<boolean>(false)

  const {
    lastName,
    firstName,
    street,
    zipCode,
    country,
    birthDate,
    role,
    salary,
  } = employee
  return (
    <>
      <div className='employee-box' key={index}>
        <div className='employee-box-border'>
          <p>{lastName.toUpperCase() + ' ' + firstName}</p>
          {show && (
            <>
              <p>Birth date: {birthDate.toString().slice(0, 10)}</p>
              <p>Role:{role}</p>
              <p>Salary : {salary} €</p>
              <p>{street}</p>
              <p>{zipCode + ' ' + country.toUpperCase()}</p>
            </>
          )}
          <div className='show-btn-section'>
            <button
              className='btn'
              onClick={() => {
                setShow(!show)
              }}
            >
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleEmployee
