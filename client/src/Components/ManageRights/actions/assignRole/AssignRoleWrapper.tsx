import styled from 'styled-components'

const Wrapper = styled.div`
  .roles-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .alert {
    width: 100%;
    margin: 0;
  }
  .form-input {
    font-size: 2rem;
    height: auto;
    margin: 0 0 1rem 0;
  }
  @media screen and (max-width: 992px) {
    .roles-section {
    }
    .alert {
      width: 100%;
      margin: 0;
    }
    .form-input {
      font-size: 1rem;
      height: auto;
      margin: 0 0 1rem 0;
    }
  }
`

export default Wrapper
