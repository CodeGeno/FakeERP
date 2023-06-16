import { useState, useEffect, SetStateAction } from 'react'
import { useAppContext } from '../../../../context/appContext'
import { Company } from '../../../../Models/CompanyModel'

const EditClients: React.FC<{
  companyData: Company
  isEditing: boolean
  setIsEditing: React.Dispatch<SetStateAction<boolean>>
  handleCompany: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void
  handleUpdate: () => void
}> = ({
  companyData,
  handleCompany,
  handleUpdate,
  setIsEditing,
  isEditing,
}) => {
  const { updateCompany } = useAppContext()
  const { id, company, street, houseNr, zipCode, country, city } = companyData

  return (
    <>
      {isEditing ? (
        <>
          <div className='moreOffice'>
            <div className='office-row'>
              <div className='office-row-left'>
                <label className='form-label' htmlFor='Office Name'>
                  Company Name
                </label>

                <input
                  className='form-input'
                  name='company'
                  value={companyData.company}
                  onChange={(e) => {
                    handleCompany(e)
                  }}
                />
              </div>

              <button className='btn' onClick={() => {}}>
                Remove
              </button>
            </div>

            <div className='street-row'>
              <div className='street'>
                <label className='form-label' htmlFor='Street'>
                  Street
                </label>
                <input
                  className='form-input'
                  name='street'
                  value={companyData.street}
                  onChange={(e) => {
                    handleCompany(e)
                  }}
                />
              </div>
              <div className='house-number'>
                <label className='form-label' htmlFor='House Number'>
                  Number
                </label>
                <input
                  min='1'
                  className='form-input'
                  name='houseNr'
                  value={companyData.houseNr}
                  onChange={(e) => {
                    handleCompany(e)
                  }}
                  type='number'
                />
              </div>
            </div>
            <div className='zip-row'>
              <div className='city'>
                <label className='form-label' htmlFor='City'>
                  City
                </label>
                <input
                  className='form-input'
                  name='city'
                  value={companyData.city}
                  onChange={(e) => {
                    handleCompany(e)
                  }}
                  type='text'
                />
              </div>
              <div className='zip'>
                <label className='form-label' htmlFor='Zip Code'>
                  Zip Code
                </label>
                <input
                  min='1'
                  className='form-input'
                  name='zipCode'
                  value={companyData.zipCode}
                  onChange={(e) => {
                    handleCompany(e)
                  }}
                  type='number'
                />
              </div>
            </div>
            <div className='country-row'>
              <div className='country'>
                <label className='form-label' htmlFor='Country'>
                  Country
                </label>
                <select
                  className='form-select'
                  onChange={(e) => {
                    handleCompany(e)
                  }}
                  name='country'
                  value={companyData.country ? companyData.country : ''}
                >
                  <option disabled value=''>
                    Please select an option
                  </option>
                  {europeanCountries.map((country) => (
                    <option value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='btn-section'>
              <button className='btn' onClick={handleUpdate}>
                Submit
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className='office-row'>
          <div className='office-row-left'>
            <div className='edit-row'>
              <h4>{company}</h4>
              <button
                className='btn'
                onClick={() => {
                  setIsEditing(true)
                }}
              >
                Edit
              </button>
            </div>
            <p>{street + ' ' + houseNr}</p>
            <p>{zipCode + ' ' + city}</p>
            <p>{country}</p>
          </div>
        </div>
      )}
    </>
  )
}
export default EditClients

const europeanCountries = [
  'Austria',
  'Belgium',
  'Bulgaria',
  'Croatia',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Ireland',
  'Italy',
  'Latvia',
  'Lithuania',
  'Luxembourg',
  'Malta',
  'Netherlands',
  'Poland',
  'Portugal',
  'Romania',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden',
]
