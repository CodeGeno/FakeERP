import { useState } from 'react'

const Images: React.FC<{
  path: string
  type: string
  ind?: number
  index: number
  handleNew?: (index: number) => void
  handleOld?: (productIndex: number, imageIndex: number) => void
}> = ({ path, type, ind, index, handleNew, handleOld }) => {
  const removeImage = (index: number) => {
    if (type == 'new') {
      handleNew(index)
    }
    if (type == 'old') {
      handleOld(ind, index)
    }
  }
  return (
    <div className='mon-style img-box'>
      <button
        className='remove-btn'
        onClick={() => {
          removeImage(index)
        }}
      >
        x
      </button>
      <img className='img' src={path} />
    </div>
  )
}

export default Images
