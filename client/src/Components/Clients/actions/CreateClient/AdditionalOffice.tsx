import { useEffect } from 'react'

const AdditionalOffice: React.FC<{
  index: number
  handleAdditionalOffice: (e, index) => void
  office: any
  handleAdditionalOfficeRemove: (index: number) => void
}> = ({
  index,
  handleAdditionalOffice,
  office,
  handleAdditionalOfficeRemove,
}) => {
  return (
    <>
      <h3>{index === 0 ? 'Home Office' : `Office nº${1 + index}`}</h3>
      <div className='moreOffice' key={index}>
        {index !== 0 && (
          <div className='office-row'>
            <div className='office-row-left'>
              <label className='form-label' htmlFor='Office Name'>
                Office Name
              </label>

              <input
                className='form-input'
                name='officeName'
                value={office.officeName}
                onChange={(e) => {
                  handleAdditionalOffice(e, index)
                }}
              />
            </div>

            <button
              className='btn'
              onClick={() => {
                handleAdditionalOfficeRemove(index)
              }}
            >
              Remove
            </button>
          </div>
        )}
        <div className='street-row'>
          <div className='street'>
            <label className='form-label' htmlFor='Street'>
              Street
            </label>
            <input
              className='form-input'
              name='streetName'
              value={office.streetName}
              onChange={(e) => {
                handleAdditionalOffice(e, index)
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
                handleAdditionalOffice(e, index)
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
                handleAdditionalOffice(e, index)
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
                handleAdditionalOffice(e, index)
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
            <select className='form-select'>
              <option>a</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
export default AdditionalOffice
