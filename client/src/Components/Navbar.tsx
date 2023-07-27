import Wrapper from '../styles/NavbarWrapper'
//icons

import { useAppContext } from '../context/appContext'
import { BiArrowToLeft, BiUserCircle } from 'react-icons/bi'

import { NavLink, useNavigate } from 'react-router-dom'

import { useEffect } from 'react'

function Navbar() {
  const {
    handleSlider,
    showSlider,
    userDetail,
    AlertMessageAndType,
    disconnectUser,
  } = useAppContext()
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
          <div className='user'>
            <button className='btn'>
              <BiUserCircle />
            </button>
            <div className='bis'>
              <ul>
                <li>
                  <NavLink to='/settings' className='btn'>
                    Settings
                  </NavLink>
                </li>
                <li>
                  <button
                    className='btn'
                    onClick={() => {
                      disconnectUser()
                      navigate('/')
                    }}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  )
}
export default Navbar
