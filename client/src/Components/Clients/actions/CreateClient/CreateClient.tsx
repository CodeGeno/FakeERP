import { useEffect, useState } from 'react'
import { useAppContext } from '../../../../context/appContext'
import AdditionalOffice from './AdditionalOffice'
import Wrapper from './CreateClientWrapper'

const CreateClient: React.FC = () => {
  const { createCompany } = useAppContext()
  const initialState = {
    officeName: 'Head Office',
    streetName: '',
    houseNr: '',
    zipCode: '',
    country: '',
  }
  const addOffice = {
    officeName: '',
    streetName: '',
    houseNr: '',
    zipCode: '',
    country: '',
  }
  const [officeName, setOfficeName] = useState('')
  const [additionalOffice, setAdditionnalOffice] = useState([initialState])

  const handleOffice = (e, index) => {
    console.log(additionalOffice)
    let temp = additionalOffice
    temp[index][e.target.name] = e.target.value
    setAdditionnalOffice([...temp])
  }
  const handleOfficeRemove = (index) => {
    let temp = additionalOffice
    temp.splice(index, 1)
    setAdditionnalOffice([...temp])
  }

  const handleSubmit = () => {}
  return (
    <Wrapper>
      <h3>CreateClient</h3>
      <div>
        <label className='form-label' htmlFor='Office Name'>
          Company Name
        </label>

        <input
          className='form-input'
          value={officeName}
          onChange={(e) => {
            setOfficeName(e.target.value)
          }}
        />
      </div>
      <div>
        {additionalOffice.length > 0 &&
          additionalOffice.map((office, index) => {
            return (
              <AdditionalOffice
                index={index}
                handleAdditionalOffice={handleOffice}
                office={office}
                handleAdditionalOfficeRemove={handleOfficeRemove}
                key={index}
              />
            )
          })}
        <div className='add-btn-section'>
          <button
            className='btn'
            onClick={() => {
              setAdditionnalOffice([...additionalOffice, addOffice])
            }}
          >
            Add Office
          </button>
          <button
            className='btn'
            onClick={() => {
              createCompany(additionalOffice, officeName)
            }}
          >
            Save
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default CreateClient
