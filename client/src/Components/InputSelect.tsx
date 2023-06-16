import { SetStateAction } from 'react'
import { Interface } from 'readline'

const InputSelect: React.FC<{
  property: string
  property2?: string
  handleChange: any
  dataObject: any
  placeholder: string
}> = ({ dataObject, property, handleChange, placeholder, property2 }) => {
  return (
    <>
      <div className='input-container'>
        <label className='form-label'>{placeholder}</label>
        <select
          className='form-select'
          onChange={(e) => {
            handleChange(e)
          }}
          name={property}
          defaultValue=''
        >
          <option disabled value=''>
            Please select an option
          </option>
          {dataObject.map((item, index) => {
            return (
              <option value={index} key={index}>
                {property2
                  ? `${item[property]} ${item[property2]} `
                  : item[property]}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}

export default InputSelect
