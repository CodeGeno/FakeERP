import { useEffect, useState } from 'react'
import { useAppContext } from '../../../context/appContext'
import InputRow from '../../InputRow'
import Wrapper from './CreateOrderWrapper'
import InputSelect from '../../InputSelect'
import { Company } from '../../../Models/CompanyModel'
import { ProductDB, ProductAndQuantity } from '../../../Models/ProductModel'
import { Employee } from '../../../Models/EmployeeModel'
import DateInput from '../../DateInput'
import ProductSelect from './ProductSelect'
import ProductRow from './ProductRow'

const CreateOrder: React.FC = () => {
  const {
    getCompanies,
    getProductsInventory,
    getEmployees,
    getSingleProduct,
    createOrder,
  } = useAppContext()

  const [productList, setProductList] = useState<ProductAndQuantity[]>([])
  const [selectedProducts, setSelectedProducts] = useState<
    ProductAndQuantity[]
  >([])
  const [companies, setCompanies] = useState<Company[]>([])
  const [order, setOrder] = useState()
  const [employees, setEmployees] = useState<Employee[]>([])
  const [selectedCompany, setSelectedCompany] = useState<Company>()

  const [deliveryDate, setDeliveryDate] = useState<string>('')
  const fetchData = async () => {
    let productsData = await getProductsInventory()
    setProductList(productsData)
    let companiesData = await getCompanies()
    setCompanies(companiesData)
    let employeesData = await getEmployees()
    setEmployees(employeesData)
  }
  const formatDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  const totalAmount = () => {
    let amount = 0
    for (const product of selectedProducts)
      amount += product.price * product.desiredQuantity
    return amount
  }
  //fetchData
  useEffect(() => {
    fetchData()
  }, [])
  const handleChanges = {
    company(e) {
      setSelectedCompany(companies[e.target.value])
    },

    deliveryDate(e) {
      setDeliveryDate(e.target.value)
    },
    async addProduct(index) {
      let temp = selectedProducts
      let tempProduct = await getSingleProduct(productList[index].id)
      tempProduct.desiredQuantity = 1
      temp.push(tempProduct)
      setSelectedProducts([...temp])
    },
    removeProduct(index) {
      let temp = selectedProducts
      temp.splice(index, 1)
      setSelectedProducts([...temp])
    },
    quantity(e, index) {
      let temp = selectedProducts
      if (e.target.value === '+') {
        temp[index].desiredQuantity += 1
      } else {
        let temp = selectedProducts
        if (temp[index].desiredQuantity > 0) {
          temp[index].desiredQuantity -= 1
        }
      }
      setSelectedProducts([...temp])
    },
    quantityInput(e, index) {
      let temp = selectedProducts
      temp[index].desiredQuantity = Number(e.target.value)
      setSelectedProducts([...temp])
    },
  }
  const checkOrder = () => {
    if (!deliveryDate || selectedProducts.length < 1 || !selectedCompany)
      return false
    return true
  }
  const handleOrderCreation = async () => {
    let orderData: any = {}
    orderData.company = selectedCompany
    orderData.deliveryDate = deliveryDate
    orderData.products = selectedProducts
    try {
      createOrder(orderData)
    } catch (error) {}
  }
  return (
    <Wrapper>
      <div>
        <div className='company-date'>
          {companies.length > 0 && (
            <InputSelect
              dataObject={companies}
              property='company'
              handleChange={handleChanges.company}
              placeholder='Select Company:'
            />
          )}
          <DateInput
            value={deliveryDate}
            placeholder='Delivery date:'
            handleChange={handleChanges.deliveryDate}
            min={formatDate()}
          />
        </div>
      </div>
      <div>
        <ProductSelect
          productList={productList}
          selectedProducts={selectedProducts}
          handleChange={handleChanges.addProduct}
        />
      </div>
      <div className='product-table'>
        <div className='title'>
          <div className='name'>Name</div>
          <div className='price'>Price</div>
          <div className='quantity'>Quantity</div>
          <div className='total'>Total</div>
        </div>
        {selectedProducts.map((selectedProduct, index) => {
          return (
            <ProductRow
              key={index}
              selectedProduct={selectedProduct}
              handleChange={handleChanges.quantity}
              index={index}
              handleQuantityInput={handleChanges.quantityInput}
              handleRemove={handleChanges.removeProduct}
              last={index + 1 === selectedProducts.length ? true : false}
            />
          )
        })}
        <div className='total-price'>
          <div className='empty'></div>
          <div className='total'>Total:</div>
          <div className='price'>
            {totalAmount().toLocaleString('de-DE', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) + ' €'}
          </div>
        </div>
        <div className='btn-container'>
          <button
            className='btn'
            onClick={() => {
              handleOrderCreation()
            }}
            disabled={!checkOrder()}
          >
            Submit Order
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default CreateOrder
