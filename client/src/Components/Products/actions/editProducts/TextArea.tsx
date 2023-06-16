const TextArea: React.FC<{
  object: any
  index: number
  name: string
  placeholder?: string
  handleProductChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => void
}> = ({ handleProductChange, index, object, name, placeholder }) => {
  return (
    <div className='input-container'>
      <label className='form-label'>
        {placeholder ? `${placeholder}:` : `${name}:`}
      </label>
      <textarea
        className='form-input'
        value={object[name]}
        name={name}
        onChange={(e) => {
          handleProductChange(e, index)
        }}
      />
    </div>
  )
}
export default TextArea
