import styled from 'styled-components'

const Wrapper = styled.div`
  h3 {
    margin: 2rem 0 0.5rem 0;
  }

  .company {
    flex-basis: 100%;
    width: 100%;
  }
  .street-row {
    display: flex;
  }
  .street {
    flex-basis: 100%;
    padding: 0 1rem 0 0;
  }
  .house-number {
    flex-basis: 20%;
  }
  .zip-row {
    display: flex;
  }

  .country-row {
    display: flex;
  }
  .country {
    flex-basis: 100%;
  }
  .tax-row {
    display: flex;
  }
  .tax {
    flex-basis: 80%;
  }

  .moreOffice {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .form-label {
      margin: 0;
    }
  }
  .office-row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .btn {
      display: flex;
      font-size: 1rem;
    }
  }
  .city {
    flex-basis: 90%;
    padding: 0 1rem 0 0;
  }
`

export default Wrapper
