import styled from 'styled-components'

const Wrapper = styled.div`
  .checkbox-box {
    margin: 1rem 0;
  }
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
      font-size: 1.5rem;
      width: 100%;
      padding: 1rem;
    }
    .alert-danger {
      cursor: pointer;
    }
  }
  select {
    text-transform: capitalize;
    color: black;
  }
  h2 {
    margin: 0;
  }
  @media screen and (max-width: 992px) {
    .submit-btn-section {
      display: flex;
      width: 100%;
      flex-direction: column;
      margin: 0rem;
      button {
        background-color: var(--primary-600);
        font-size: 1rem;
        width: 100%;
        padding: 0.5rem;
      }

      .alert-danger {
        cursor: pointer;
      }
    }
  }
`

export default Wrapper
