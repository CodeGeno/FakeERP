import styled from 'styled-components'

const Wrapper = styled.div`
  .right-section-single {
    display: flex;
    gap: 10px;
    margin: 0.5rem 0;
  }
  .submit-btn-section {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    button {
      font-size: 2rem;
      width: 100%;
      padding: 1rem;
    }
    .alert-danger {
      cursor: pointer;
    }
  }
  select {
    text-transform: capitalize;
  }
`

export default Wrapper
