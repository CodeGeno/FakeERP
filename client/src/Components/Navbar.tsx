import Wrapper from '../styles/NavbarWrapper'
//icons

import { useAppContext } from '../context/appContext'
import { BiArrowToLeft, BiUserCircle } from 'react-icons/bi'

function Navbar() {
  const { handleSlider, showSlider } = useAppContext()

  return (
    <Wrapper>
      <button
        className={showSlider ? 'btn' : 'hidden btn'}
        onClick={handleSlider}
      >
        <BiArrowToLeft />
      </button>

      <div className='title'>FakeERP</div>
      <button className='btn'>
        <BiUserCircle />
      </button>
    </Wrapper>
  )
}
export default Navbar
