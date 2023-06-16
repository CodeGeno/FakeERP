const DateInput: React.FC<{
  object?: any
  name?: string
  value: string
  placeholder?: string
  handleChange: any
  min?: string
}> = ({ placeholder, name, value, handleChange, min }) => {
  return (
    <>
      <div className='input-container'>
        <label className='form-label'>
          {placeholder ? `${placeholder}:` : `${name}:`}
        </label>
        <input
          className='form-input'
          type='date'
          value={value}
          min={min ? `${min}` : ''}
          name={name}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </div>
    </>
  )
}

export default DateInput
