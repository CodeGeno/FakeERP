import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .user-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
    box-shadow: ${(props) => (props.show ? 'var(--shadow-4);' : '')};
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    overflow: hidden;
  }
  .btn {
    border-radius: 0;
  }

  .user-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 1rem;
    font-size: 1rem;
  }

  .options {
    margin: 0.5rem 1rem;
    display: flex;
    .form-select,
    .form-label {
      flex-basis: 50%;
      display: flex;
      height: auto;
      font-size: 0.8rem;
      align-items: center;
      margin: 0;
      text-transform: capitalize;
    }
  }

  .form-select {
    text-transform: capitalize;
    font-size: 1rem;
  }
  .form-input {
  }
  .button-section {
    display: flex;
    .btn {
      flex-basis: 50%;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 992px) {
    .button-section {
      display: flex;
      .btn {
        flex-basis: 50%;
        font-size: 0.8rem;
        padding: 0.5rem;
      }
    }
    .user-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.5rem;
      font-size: 0.8rem;
    }
  }
`

export default Wrapper
