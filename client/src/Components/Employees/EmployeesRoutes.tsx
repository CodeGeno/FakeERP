import Wrapper from './EmployeesWrapper'
import { NavLink, Outlet } from 'react-router-dom'
const EmployeesRoutes: React.FC = () => {
  return (
    <Wrapper>
      <div className='section-container'>
        <div className='btn-container'>
          <NavLink to='/menu/employees/create' className='btn'>
            Create Employee
          </NavLink>
          <NavLink to='/menu/employees/list' className='btn'>
            All Employees
          </NavLink>
          <NavLink to='/menu/employees/edit' className='btn'>
            Modify Employee
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default EmployeesRoutes
