import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
  padding: 0 2rem;
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
  .user {
    position: relative;
  }
  .user:hover .bis {
    display: block;
  }
  .bis {
    font-size: 1rem;
    position: absolute;
    display: none;
    left: 50%;
    transform: translate(-50%, 0);
    .btn {
      font-size: 0.8rem;
      margin: 0.5rem 0;
      display: flex;
      width: auto;
    }
  }
`

export default Wrapper
