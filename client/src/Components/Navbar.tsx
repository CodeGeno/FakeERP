import Wrapper from '../styles/NavbarWrapper'
//icons
import { FiInstagram } from 'react-icons/fi'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState, useEffect, useRef } from 'react'

const INITIAL_MAX_HEIGHT = 10000
function Navbar() {
  const [listHeight, setListHeight] = useState<number>(400)
  const collapseMenuRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef<any>(null)

  const maxHeightRef = useRef(INITIAL_MAX_HEIGHT)
  const [show, setShow] = useState(true)
  useEffect(() => {
    setListHeight(document.getElementsByClassName('ul')[0]?.clientHeight)

    console.log(listHeight)
  }, [])

  useEffect(() => {
    console.log(isFirstRender)
  }, [isFirstRender])
  useEffect(() => {
    if (collapseMenuRef.current) {
      if (
        maxHeightRef.current > collapseMenuRef.current.offsetHeight &&
        maxHeightRef.current !== INITIAL_MAX_HEIGHT
      ) {
        // HALT!! // Someone collapsed the menu too early! // The offsetHeight is not full.
        return
      }
      maxHeightRef.current = collapseMenuRef.current.offsetHeight
    }
  }, [show])

  return (
    <>
      <Wrapper
        show={show}
        maxHeight={
          show ? { maxHeight: maxHeightRef.current } : { maxHeight: 0 }
        }
      >
        <div className='navbar-burger'>
          <div>FakeERP</div>
          <button
            className={show ? 'visible btn' : 'btn'}
            onClick={() => {
              setShow(!show)
            }}
          >
            <RxHamburgerMenu />
          </button>
        </div>
        <div className='ul-container' ref={collapseMenuRef}>
          <ul className='navbar-links'>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
          <ul className='navbar-socials'>
            <li>
              <FiInstagram />
            </li>
            <li>
              <AiFillTwitterSquare />
            </li>
          </ul>
        </div>
      </Wrapper>
    </>
  )
}
export default Navbar
