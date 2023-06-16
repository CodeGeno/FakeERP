const InputRow: React.FC<{
  name: string
  placeholder?: string
  handleChange?: (e?: React.ChangeEvent<HTMLInputElement> | string) => void
  value: string | number
  type: string
}> = ({ name, placeholder, handleChange, value, type }) => {
  return (
    <>
      <div className='input-container'>
        <label className='form-label'>
          {placeholder ? `${placeholder}:` : `${name}:`}
        </label>
        <input
          className='form-input'
          type={type}
          value={value}
          name={name}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </div>
    </>
  )
}

export default InputRow
