import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { JsxElement } from 'typescript'
import Authentication from './Components/Authentication'
import CreateRole from './Components/ManageRights/actions/CreateRole'
import ManageRights from './Components/ManageRights/ManageRights'
import Navbar from './Components/Navbar'
import Menu from './pages/menu/Menu'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Authentication />} />

        <Route path='/menu' element={<Menu />}>
          <Route element={<ManageRights />}>
            <Route index element={<CreateRole />} />
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
