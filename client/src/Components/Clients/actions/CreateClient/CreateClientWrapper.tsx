import styled from 'styled-components'

const Wrapper = styled.div`
  h3 {
    margin: 2rem 0 0.5rem 0;
  }
  .street-row {
    display: flex;
    gap: 1rem;
  }
  .street {
    flex-basis: 60%;
  }
  .house-number {
    flex-basis: 20%;
  }
  .zip-row {
    display: flex;
    gap: 1rem;
  }
  .zip {
    flex-basis: 30%;
  }
  .country {
    flex-basis: 50%;
  }
  .tax-row {
    display: flex;
  }
  .tax {
    flex-basis: 80%;
  }

  .add-btn-section {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    .btn {
      width: 100%;
      font-size: 2rem;
    }
  }
  .moreOffice {
    margin: 2rem 0;
    .form-label {
      margin: 0;
    }
  }
  .office-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .office-row-left {
      flex-basis: 80%;
    }

    .btn {
      display: flex;
      font-size: 1rem;
    }
  }
`

export default Wrapper
