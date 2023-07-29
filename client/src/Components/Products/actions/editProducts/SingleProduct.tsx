import { useAppContext } from '../../../../context/appContext'
import { SetStateAction, useEffect, useState } from 'react'
import { ProductDB } from '../../../../Models/ProductModel'
import InputRow from './InputRow'
import TextArea from './TextArea'
import Images from './Images'
import { PhotoCamera } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Alert from '../../../Alert'

const SingleProduct: React.FC<{
  product: ProductDB
  index: number
  handleProductChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => void
  products: ProductDB[]
  setProducts: React.Dispatch<SetStateAction<ProductDB[]>>
  updateSingleProduct: (index: number, updatedProduct: any) => void
}> = ({
  product,
  handleProductChange,
  index,
  setProducts,
  products,
  updateSingleProduct,
}) => {
  //States
  const [initialState, setInitialState] = useState(product)
  const [edit, setEdit] = useState(false)
  const [moreImages, setMoreImages] = useState<any>([])

  //Context
  const { updateProduct, cancelModification } = useAppContext()
  const [showMore, setShowMore] = useState(false)
  const { description, images, name, path, price, quantity } = product

  const handleImageChange = (event) => {
    const files = event.target.files
    const imageArray = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const imageUrl = URL.createObjectURL(file)
      imageArray.push({ url: imageUrl, file })
    }
    setMoreImages((prevState) => [...prevState, ...imageArray]) // use a function to update the state
  }

  const newImageRemove = (index: number) => {
    let temp = moreImages
    temp.splice(index, 1)
    setMoreImages([...temp])
  }
  const oldImageRemove = (productIndex: number, imageIndex: number) => {
    let temp = [...products] // create a new copy of the products array
    temp[productIndex].images.splice(imageIndex, 1)
    setProducts(temp)
  }
  const cancelChanges = () => {
    setProducts([...products, (products[index] = initialState)])
    setEdit(false)
  }
  const handleUpdate = async () => {
    let temp = [product, moreImages]
    let result = await updateProduct(temp)
    updateSingleProduct(index, result[0])
    setMoreImages([])
    setEdit(false)
  }
  const cancelMod = async (id) => {
    const result = await cancelModification(id)
    updateSingleProduct(index, result[0])
    setMoreImages([])
    setEdit(false)
  }
  const columnClassNames = () => {
    if (showMore) {
      if (index % 2 == 0) return 'product-box'
      else return 'white product-box'
    } else {
      if (index % 2 == 0) return 'hidden product-box'
      else return 'white hidden product-box'
    }
  }
  return (
    <div
      className={columnClassNames()}
      onClick={() => {
        if (!showMore) setShowMore(true)
      }}
    >
      <>
        <div className='top'>
          <div className='value'>{name}</div>
          <div className='value'> {quantity}</div>
          <div className='value'> {price} $</div>
        </div>
        {showMore && images.length > 0 && !edit && (
          <>
            <h3>Images</h3>
            <div className='img-container'>
              {images.map((image, ind) => {
                const path =
                  'https://fakeerp.site' + `/uploads/${product.path}/${image}`
                return (
                  <Images
                    path={path}
                    type='old'
                    key={ind}
                    index={ind}
                    ind={index}
                    handleOld={oldImageRemove}
                    remove={false}
                  />
                )
              })}
            </div>
          </>
        )}
        {showMore && edit && (
          <>
            <InputRow
              object={product}
              handleProductChange={handleProductChange}
              index={index}
              name='name'
              placeholder='Product name'
            />
            <InputRow
              object={product}
              handleProductChange={handleProductChange}
              index={index}
              name='price'
              placeholder='Price'
            />
            <TextArea
              object={product}
              handleProductChange={handleProductChange}
              index={index}
              name='description'
              placeholder='Description'
            />
            <div>
              {images.length > 0 && <h3>Images</h3>}
              <div className='img-container'>
                {images.map((image, ind) => {
                  const path =
                    'https://fakeerp.site' + `/uploads/${product.path}/${image}`

                  return (
                    <Images
                      path={path}
                      type='old'
                      key={ind}
                      index={ind}
                      ind={index}
                      handleOld={oldImageRemove}
                      remove={true}
                    />
                  )
                })}
                {moreImages.map((ima, index) => {
                  return (
                    <Images
                      path={ima.url}
                      type='new'
                      index={index}
                      key={index}
                      handleNew={newImageRemove}
                      remove={true}
                    />
                  )
                })}
              </div>

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
                  onChange={handleImageChange}
                />
                <PhotoCamera sx={{ fontSize: '48px' }} />
              </IconButton>
            </div>
            <div className='btn-container'>
              <button className='btn' onClick={handleUpdate}>
                Update
              </button>
              <button
                className='btn'
                onClick={() => {
                  cancelMod(product.id)
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}
        {showMore && !edit && (
          <div className='btn-container'>
            <button
              className='btn'
              onClick={() => {
                setEdit(true)
              }}
            >
              Edit
            </button>
          </div>
        )}
      </>
    </div>
  )
}

export default SingleProduct
//  {
//    edit && (
//      <>
//        <InputRow
//          object={product}
//          handleProductChange={handleProductChange}
//          index={index}
//          name='name'
//          placeholder='Product name'
//        />
//        <InputRow
//          object={product}
//          handleProductChange={handleProductChange}
//          index={index}
//          name='price'
//          placeholder='Price'
//        />
//        <TextArea
//          object={product}
//          handleProductChange={handleProductChange}
//          index={index}
//          name='description'
//          placeholder='Description'
//        />
//        <div>
//          {images.length > 0 && <h3>Images</h3>}
//          <div className='img-container'>
//            {images.map((image, ind) => {
//              const path =
//                'https://fakeerp.site' + `/uploads/${product.path}/${image}`

//              return (
//                <Images
//                  path={path}
//                  type='old'
//                  key={ind}
//                  index={ind}
//                  ind={index}
//                  handleOld={oldImageRemove}
//                  remove={true}
//                />
//              )
//            })}
//          </div>
//          {images.length > 0 && <h3>Images</h3>}
//          <div className='img-container'>
//            {moreImages.map((ima, index) => {
//              return (
//                <Images
//                  path={ima.url}
//                  type='new'
//                  index={index}
//                  key={index}
//                  handleNew={newImageRemove}
//                  remove={true}
//                />
//              )
//            })}
//          </div>
//          <IconButton
//            color='primary'
//            aria-label='upload picture'
//            component='label'
//          >
//            <input
//              multiple
//              hidden
//              accept='image/*'
//              type='file'
//              name='productImages'
//              onChange={handleImageChange}
//            />
//            <PhotoCamera sx={{ fontSize: '48px' }} />
//          </IconButton>
//        </div>
//        <div className='btn-section'>
//          <button className='btn' onClick={handleUpdate}>
//            Update
//          </button>
//          <button
//            className='btn'
//            onClick={() => {
//              cancelMod(product.id)
//            }}
//          >
//            Cancel
//          </button>
//        </div>
//      </>
//    )
//  }
