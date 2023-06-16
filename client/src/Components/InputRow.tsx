const InputRow: React.FC<{
  object: any
  index: number
  name: string
  placeholder?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
  date?: boolean
}> = ({ handleChange, index, object, name, placeholder, date }) => {
  function findKeyValue(object) {
    if (date) return 'date'
    if (object.hasOwnProperty(name)) {
      if (typeof object[name] === 'string') {
        return 'text'
      } else if (typeof object[name] === 'number') {
        return 'number'
      }
    }
  }
  const formatData = (object) => {
    if (date) return object[name].slice(0, 10)
    return object[name]
  }

  return (
    <>
      <div className='input-container'>
        <label className='form-label'>
          {placeholder ? `${placeholder}:` : `${name}:`}
        </label>
        <input
          className='form-input'
          type={findKeyValue(object)}
          value={formatData(object)}
          name={name}
          onChange={(e) => {
            handleChange(e, index)
          }}
        />
      </div>
    </>
  )
}

export default InputRow
