import { useState } from 'react'

const ProductImage: React.FC<{ path: string; index: number }> = ({
  path,
  index,
}) => {
  return (
    <div className='single-image-box' key={index}>
      <div className='img-container'>
        <img className='img' src={path} />
      </div>
    </div>
  )
}
export default ProductImage
