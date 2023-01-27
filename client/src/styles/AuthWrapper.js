import styled from 'styled-components'

const Wrapper = styled.div`
  .password-section {
    display: flex;
    justify-content: center;
    margin: 1rem 0 0 0;
    flex-direction: column;
  }
  h1 {
    font-size: 2rem;
  }
  .register-section {
    display: flex;
    align-items: center;
    height: 100%;
    text-align: center;
    margin: 0.5rem 0;
    gap: 0.5rem;
    p {
      margin: 0;
      padding: 0;
    }
  }
  .register-btn {
    background-color: transparent;
    height: 100%;
    border: none;
    align-items: center;
    font-size: 1rem;
    color: var(--primary-500);
  }
`

export default Wrapper
