import { Employee } from './EmployeeModel'
import { Company } from './CompanyModel'
import { ProductAndQuantity, ProductDB } from './ProductModel'

export interface UserRole {
  email: string
  role: string
  uid: number
}
export interface Role {
  role: string
  inventory: boolean
  manageProducts: boolean
  manageRights: boolean
  manageClients: boolean
  orders: boolean
  employees: boolean
}
export interface Product {
  productName: string
  productDescription: string
  productPrice: number
  productImages: File[]
}

export interface defaultContextState {
  state?: any
  showSlider: boolean
  token: string
  name: string
  userDetail: any
  role: string
  alertType: string
  alertShow: boolean
  alertMessage: string
  loading: boolean
  registerUser?: (email: string, password: string) => void
  loginUser?: (email: string, password: string) => void
  getRoles?: () => Promise<Role[]>
  getRole?: (email: string) => Promise<Role>
  createRole?: (newRole: Role) => void
  updateRole?: (updatedRole: Role) => void
  deleteRole?: (roleToDelete: Role) => void
  disconnectUser?: () => void
  getUsers?: () => Promise<UserRole[]>
  updateUser?: (userToUpdate: UserRole, roleToUpdate: string) => void
  createCompany?: (companyDetails: Company[]) => void
  getCompanies?: () => any
  getCompanyOffices?: (companyName: string) => any
  getSingleCompany?: (companyId: number) => Promise<Company>
  updateCompany?: (office: Company) => any
  handleSlider?: () => any
  createProduct?: (productImage: Product) => any
  getAllProducts?: () => any
  getImages?: (path: string) => any
  updateProduct?: (product: any) => any
  cancelModification?: (id: number) => any
  createEmployee?: (employee: Employee) => Promise<string>
  getEmployees?: () => Promise<Employee[]>
  updateEmployee?: (employee: Employee) => void
  deleteEmployee?: (id: number) => void
  updateInventory?: (products: ProductDB[]) => any
  getProductsInventory?: () => any
  getSingleProduct?: (id: number) => Promise<ProductAndQuantity>
  createOrder?: (orderData: any) => void
  getAllOrders?: () => any
  updateOrderStatus?: (orderData: any, newStatus: string) => any
  AlertMessageAndType?: (message: string, type: string) => void
  handleMenuPress?: () => void
}
export interface AppContextProps {
  children: React.ReactNode
}

//REDUCER

export interface reducerActionType {
  type: string
  payload?: {
    error?: any
    action?: any
    msg?: string
    userDetail?: []
    token?: string
    role?: string
    showSlider?: boolean
    alertType?: string
  }
}
