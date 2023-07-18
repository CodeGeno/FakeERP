import { useState } from 'react'
import Wrapper from './CreateProductWrapper'
import { IconButton } from '@mui/material'
import Alert from './../../../Alert'
import { PhotoCamera } from '@mui/icons-material'
import { useAppContext } from '../../../../context/appContext'

function CreateProduct() {
  const { createProduct } = useAppContext()
  const initialState = {
    productName: '',
    productDescription: '',
    productPrice: 0,
    productImages: [],
  }
  interface ProductModel {
    productName: string
    productDescription: string
    productPrice: number
    productImages: File[]
  }

  const [product, setProduct] = useState<ProductModel>(initialState)

  const handleProductChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  return (
    <Wrapper>
      <div>
        <Alert />
        <label htmlFor='product name' className='form-label'>
          Product name
        </label>

        <input
          type='text'
          name='productName'
          placeholder='Name'
          className='form-input'
          value={product.productName}
          onChange={handleProductChange}
        />
        <label htmlFor='product description' className='form-label'>
          Description
        </label>
        <textarea
          name='productDescription'
          placeholder='Description'
          className='form-input description'
          value={product.productDescription}
          onChange={handleProductChange}
        />
        <label htmlFor='Product price' className='form-label'>
          Price
        </label>
        <input
          type='number'
          name='productPrice'
          min='0'
          className='form-input'
          value={product.productPrice}
          onChange={handleProductChange}
        />
        <label className='form-label' htmlFor='Product images'>
          Product Images
        </label>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='label'
        >
          <input
            multiple
            hidden
            accept='image/*'
            type='file'
            name='productImages'
            onChange={(e) => {
              setProduct({ ...product, [e.target.name]: e.target.files })
            }}
          />
          <PhotoCamera sx={{ fontSize: '48px' }} />
          {product.productImages && product.productImages.length > 0 && (
            <p>
              {product.productImages.length} Image
              {product.productImages.length > 1 && <>s</>} selected
            </p>
          )}
        </IconButton>
        <div className='btn-section'>
          <button
            className='btn'
            onClick={() => {
              createProduct(product)
            }}
          >
            Add Product
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default CreateProduct
