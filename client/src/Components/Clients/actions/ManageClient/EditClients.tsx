import { useState, useEffect } from 'react'

const EditClients: React.FC<{
  singleOffice: any
  index: number
  handleOffice: (e, index) => void
  handleOfficeRemove: (index: number) => void
}> = ({ singleOffice, index, handleOffice, handleOfficeRemove }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { id, company, street, houseNr, zipCode, country, officeName, city } =
    singleOffice

  useEffect(() => {
    if (id === undefined) {
      setIsEditing(true)
    }
  }, [])

  return (
    <>
      {isEditing ? (
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
                    value={singleOffice.officeName}
                    onChange={(e) => {
                      handleOffice(e, index)
                    }}
                  />
                </div>

                <button
                  className='btn'
                  onClick={() => {
                    handleOfficeRemove(index)
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
                  name='street'
                  value={singleOffice.street}
                  onChange={(e) => {
                    handleOffice(e, index)
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
                  value={singleOffice.houseNr}
                  onChange={(e) => {
                    handleOffice(e, index)
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
                  value={singleOffice.city}
                  onChange={(e) => {
                    handleOffice(e, index)
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
                  value={singleOffice.zipCode}
                  onChange={(e) => {
                    handleOffice(e, index)
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
      ) : (
        <div className='office-row'>
          <div className='office-row-left'>
            <div className='edit-row'>
              <h4>{officeName}</h4>
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
