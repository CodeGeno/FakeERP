import { useEffect, useState } from 'react'
import { useAppContext } from '../../../../context/appContext'
import AdditionalOffice from './AdditionalOffice'
import Wrapper from './CreateClientWrapper'

const CreateClient: React.FC = () => {
  const { createCompany } = useAppContext()
  const initialState = {
    company: '',
    street: '',
    houseNr: '',
    zipCode: '',
    city: '',
    country: '',
  }

  const [officeName, setOfficeName] = useState('')
  const [company, setCompany] = useState([initialState])

  const handleCompany = (e, index) => {
    console.log(company)
    let temp = company
    temp[index][e.target.name] = e.target.value
    setCompany([...temp])
  }

  const handleCompanyRemove = (index) => {
    let temp = company
    temp.splice(index, 1)
    setCompany([...temp])
  }

  return (
    <Wrapper>
      <h3>CreateClient</h3>

      <div>
        {company.length > 0 &&
          company.map((office, index) => {
            return (
              <AdditionalOffice
                index={index}
                handleCompany={handleCompany}
                office={office}
                key={index}
              />
            )
          })}
        <div className='btn-section'>
          <button
            className='btn'
            onClick={() => {
              createCompany(company)
            }}
          >
            Create Company
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default CreateClient
