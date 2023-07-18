import { useState } from 'react'

const ProductImage: React.FC<{ path: string; index: number }> = ({
  path,
  index,
}) => {
  return (
    <div className='image-box' key={index}>
      <img className='img' src={path} />
    </div>
  )
}
export default ProductImage
