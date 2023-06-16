import { useEffect, useState } from 'react'
import { useAppContext } from '../../../../context/appContext'
import Alert from '../../../Alert'
import EditClients from './EditClients'
import { Wrapper } from './ManageClientWrapper'
import { Company } from '../../../../Models/CompanyModel'

const ManageClient: React.FC = () => {
  const { getCompanies, getSingleCompany, updateCompany } = useAppContext()
  const [companyList, setCompanyList] = useState<any>()
  const [selectedCompany, setSelectedCompany] = useState<number>(undefined)
  const [company, setCompany] = useState<Company>()
  const [isEditing, setIsEditing] = useState(false)

  //Fetch All Company Names
  const getCompaniesNames = async () => {
    let data = await getCompanies()
    setCompanyList(data)
  }
  const getCompany = async (ind) => {
    let data = await getSingleCompany(ind)
    console.log(data)
    setCompany(data)
  }
  const handleUpdate = async () => {
    try {
      await updateCompany(company)

      let temp = companyList
      temp = temp.map((singleCompany) => {
        if (singleCompany.id === selectedCompany) {
          singleCompany.company = company.company
        }
        return singleCompany
      })

      setCompanyList([...temp])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCompaniesNames()
  }, [])

  const handleCompany = (e) => {
    let temp = company
    temp[e.target.name] = e.target.value
    setCompany({ ...temp })
  }
  const handleCompanyRemove = (index) => {}

  return (
    <Wrapper>
      <h3>Manage Client</h3>
      {companyList ? (
        <>
          <Alert />
          <h4>Select company :</h4>
          <select
            className='form-select'
            value={selectedCompany}
            onChange={(e) => {
              if (e.target.value !== '') {
                setSelectedCompany(Number(e.target.value))
                getCompany(e.target.value)
                setIsEditing(false)
              }
            }}
          >
            <option value='' disabled>
              Choose Company
            </option>
            {companyList &&
              companyList.map((company, index) => {
                return (
                  <option key={index} value={company.id}>
                    {company.company}
                  </option>
                )
              })}
          </select>
        </>
      ) : (
        'Create a company to acces this section'
      )}
      {company && (
        <EditClients
          handleCompany={handleCompany}
          companyData={company}
          handleUpdate={handleUpdate}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
      )}
    </Wrapper>
  )
}
export default ManageClient
