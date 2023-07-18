import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import Authentication from './Components/Authentication'
import CreateRole from './Components/ManageRights/actions/createRole/CreateRole'
import UpdateRights from './Components/ManageRights/actions/UpdateRoles/UpdateRoles'
import ManageRights from './Components/ManageRights/ManageRights'
import Navbar from './Components/Navbar'
import Menu from './pages/menu/Menu'
import AssignRole from './Components/ManageRights/actions/assignRole/AssignRole'
import Clients from './Components/Clients/Clients'
import CreateClient from './Components/Clients/actions/CreateClient/CreateClient'
import ManageClient from './Components/Clients/actions/ManageClient/ManageClient'
import Products from './Components/Products/Products'
import CreateProduct from './Components/Products/actions/create/CreateProduct'
import ShowProducts from './Components/Products/actions/showProducts/ShowProducts'
import EditProduct from './Components/Products/actions/editProducts/EditProduct'
import EmployeesRoutes from './Components/Employees/EmployeesRoutes'
import CreateEmployee from './Components/Employees/createEmployee/CreateEmployee'
import ShowEmployees from './Components/Employees/showEmployees/ShowEmployees'
import ModifyEmployee from './Components/Employees/modifyEmployee/ModifyEmployee'
import OrdersRoutes from './Components/Orders/OrdersRoutes'
import CreateOrder from './Components/Orders/createOrder/CreateOrder'
import ManageInventory from './Components/Inventory/ManageInventory'
import OrderList from './Components/Orders/orderList/OrderList'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/menu' element={<Menu />}>
          <Route path='/menu/manageRights' element={<ManageRights />}>
            <Route index element={<CreateRole />} />
            <Route path='updateRoles' element={<UpdateRights />} />
            <Route path='assignRole' element={<AssignRole />} />
          </Route>
          <Route path='/menu/clients' element={<Clients />}>
            <Route index element={<CreateClient />} />
            <Route path='manage' element={<ManageClient />} />
          </Route>
          <Route path='/menu/products' element={<Products />}>
            <Route path='create' index element={<CreateProduct />} />
            <Route path='list' element={<ShowProducts />} />
            <Route path='edit' element={<EditProduct />} />
          </Route>
          <Route path='/menu/employees' element={<EmployeesRoutes />}>
            <Route path='create' index element={<CreateEmployee />} />
            <Route path='list' element={<ShowEmployees />} />
            <Route path='edit' element={<ModifyEmployee />} />
          </Route>
          <Route path='/menu/orders' element={<OrdersRoutes />}>
            <Route path='create' index element={<CreateOrder />} />
            <Route path='list' element={<OrderList />} />
            <Route path='edit' element={<ModifyEmployee />} />
          </Route>
          <Route path='/menu/inventory' element={<ManageInventory />} />
          <Route path='all-jobs' element={<ManageRights />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
