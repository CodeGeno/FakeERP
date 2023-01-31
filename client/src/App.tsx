import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authentication from './Components/Authentication'
import CreateRole from './Components/ManageRights/actions/createRole/CreateRole'
import UpdateRights from './Components/ManageRights/actions/UpdateRoles/UpdateRoles'
import ManageRights from './Components/ManageRights/ManageRights'
import Navbar from './Components/Navbar'
import Menu from './pages/menu/Menu'
import AssignRole from './Components/ManageRights/actions/assignRole/AssignRole'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Authentication />} />

        <Route path='/menu' element={<Menu />}>
          <Route element={<ManageRights />}>
            <Route index element={<CreateRole />} />
            <Route path='updateRoles' element={<UpdateRights />} />
            <Route path='assignRole' element={<AssignRole />} />
          </Route>
          <Route path='all-jobs' element={<ManageRights />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
// <BrowserRouter>
//     <Navbar />
//     <Routes>
//       <Route path='/' element={<Authentication />} />
//     </Routes>
//   </BrowserRouter>
