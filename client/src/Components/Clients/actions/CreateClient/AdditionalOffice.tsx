import { useEffect } from 'react'

const AdditionalOffice: React.FC<{
  index: number
  handleCompany: (e, index) => void
  office: any
}> = ({ index, handleCompany, office }) => {
  return (
    <div className='moreOffice' key={index}>
      <div className='office-row'>
        <label className='form-label' htmlFor='Office Name'>
          Company Name
        </label>

        <input
          className='form-input'
          name='company'
          value={office.company}
          onChange={(e) => {
            handleCompany(e, index)
          }}
        />
      </div>

      <div className='street-row'>
        <div className='street'>
          <label className='form-label' htmlFor='Street'>
            Street
          </label>
          <input
            className='form-input'
            name='street'
            value={office.street}
            onChange={(e) => {
              handleCompany(e, index)
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
            value={office.houseNr}
            onChange={(e) => {
              handleCompany(e, index)
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
            value={office.city}
            onChange={(e) => {
              handleCompany(e, index)
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
            value={office.zipCode}
            onChange={(e) => {
              handleCompany(e, index)
            }}
            type='number'
          />
        </div>
      </div>
      <div className='country-row'>
        <div className='country'>
          <label className='form-label'>Country</label>
          <select
            className='form-select'
            onChange={(e) => {
              handleCompany(e, index)
            }}
            name='country'
            value={office.country ? office.country : ''}
          >
            <option disabled value=''>
              Please select an option
            </option>
            {europeanCountries.map((country, index) => (
              <option value={country} key={index}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
export default AdditionalOffice

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
