const InputRow: React.FC<{
  object: any
  index: number
  name: string
  placeholder?: string
  handleProductChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void
}> = ({ handleProductChange, index, object, name, placeholder }) => {
  return (
    <>
      <div className='input-container'>
        <label className='form-label'>
          {placeholder ? `${placeholder}:` : `${name}:`}{' '}
        </label>
        <input
          className='form-input'
          type='text'
          value={object[name]}
          name={name}
          onChange={(e) => {
            handleProductChange(e, index)
          }}
        />
      </div>
    </>
  )
}

export default InputRow
