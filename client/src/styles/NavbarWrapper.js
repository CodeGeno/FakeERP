import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
  padding: 0 1rem;
  background-color: white;
  box-shadow: var(--shadow-1);

  .btn {
    display: flex;
    font-size: 1.5rem;
    transition: var(--transition);
  }
  .hidden {
    transform: rotate(180deg);
    transition: var(--transition);
  }
  .title {
    font-size: 2rem;
    font-weight: 900;
  }
  .singleTitle {
    display: flex;
    width: 100%;
    font-size: 2rem;
    font-weight: 900;
    justify-content: center;
  }
`

export default Wrapper
