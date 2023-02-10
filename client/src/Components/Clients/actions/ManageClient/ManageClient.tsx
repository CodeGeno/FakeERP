import { useEffect, useState } from 'react'
import { useAppContext } from '../../../../context/appContext'
import Alert from '../../../Alert'
import EditClients from './EditClients'
import { Wrapper } from './ManageClientWrapper'

const ManageClient: React.FC = () => {
  const { getCompanies, getCompanyOffices, updateOffices } = useAppContext()
  const [companyList, setCompanyList] = useState<any>()
  const [selectedCompany, setSelectedCompany] = useState<string>()
  const [companyOffices, setCompanyOffices] = useState<any>()
  useEffect(() => {
    console.log(selectedCompany)
  }, [selectedCompany])
  //Fetch All Company Names
  const getCompaniesNames = async () => {
    let data = await getCompanies()
    setCompanyList(data)
  }
  const getOffices = async () => {
    if (selectedCompany) {
      let data = await getCompanyOffices(selectedCompany)
      setCompanyOffices(data)
    }
  }
  useEffect(() => {
    getCompaniesNames()
  }, [])

  useEffect(() => {
    if (selectedCompany) {
      getOffices()
    } else {
      setCompanyOffices('')
    }
  }, [selectedCompany])

  const handleOffice = (e, index) => {
    console.log(companyOffices)
    let temp = companyOffices
    temp[index][e.target.name] = e.target.value
    setCompanyOffices([...temp])
  }
  const handleOfficeRemove = (index) => {
    let temp = companyOffices
    temp.splice(index, 1)
    setCompanyOffices([...temp])
  }
  const addOffice = {
    company: selectedCompany,
    officeName: '',
    streetName: '',
    houseNr: '',
    zipCode: '',
    city: '',
    country: '',
  }
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
              setSelectedCompany(e.target.value)
            }}
          >
            <option value=''>Choose Company</option>
            {companyList &&
              companyList.map((company, index) => {
                console.log(company)
                return (
                  <option key={index} value={company.company}>
                    {company.company}
                  </option>
                )
              })}
          </select>
        </>
      ) : (
        'Create a company to acces this section'
      )}
      {companyOffices &&
        companyOffices.map((singleOffice, index) => {
          return (
            <EditClients
              key={index}
              singleOffice={singleOffice}
              index={index}
              handleOffice={handleOffice}
              handleOfficeRemove={handleOfficeRemove}
            />
          )
        })}
      <div className='btn-section'>
        {selectedCompany && (
          <button
            className='btn'
            onClick={() => {
              setCompanyOffices([...companyOffices, addOffice])
            }}
          >
            Add office
          </button>
        )}
        <button
          className='btn'
          disabled={!selectedCompany}
          onClick={() => {
            updateOffices(companyOffices)
            setSelectedCompany('')
          }}
        >
          Submit
        </button>
      </div>
    </Wrapper>
  )
}
export default ManageClient
