import Wrapper from '../styles/NavbarWrapper'
//icons

import { useAppContext } from '../context/appContext'
import { BiArrowToLeft, BiUserCircle } from 'react-icons/bi'

import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'

function Navbar() {
  const { handleSlider, showSlider, userDetail, AlertMessageAndType } =
    useAppContext()
  const navigate = useNavigate()
  const checkConnected = () => {
    if (
      !localStorage.getItem('userDetail') &&
      window.location.pathname !== '/'
    ) {
      navigate('/')
      AlertMessageAndType(
        'Not allowed to navigate on this page...diconnecting',
        'danger'
      )
    }
  }

  useEffect(() => {
    checkConnected()
  }, [userDetail])
  return (
    <Wrapper>
      {window.location.pathname === '/' ? (
        <div className='singleTitle'>FakeERP</div>
      ) : (
        <>
          <button
            className={showSlider ? ' btn' : 'hidden btn'}
            onClick={handleSlider}
          >
            <BiArrowToLeft />
          </button>
          <div className='title'>FakeERP</div>
          <button className='btn'>
            <BiUserCircle />
          </button>
        </>
      )}
    </Wrapper>
  )
}
export default Navbar
