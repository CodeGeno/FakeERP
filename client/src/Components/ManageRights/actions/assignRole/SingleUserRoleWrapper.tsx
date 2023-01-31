import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-basis: ${(props) => (props.show ? 100 : 100)}%;
  transition: var(--transition-slow);
  .user-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 2rem;
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
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 2rem;
  }
  .user-part-left {
    flex-basis: 50%;
  }
  .user-part-right {
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .options {
    margin: 1rem 1rem;
    display: flex;
    .form-select,
    .form-label {
      flex-basis: 50%;
      height: auto;
      font-size: 2rem;
    }
  }

  .form-select {
    text-transform: capitalize;
  }
  .button-section {
    display: flex;
    .btn {
      flex-basis: 50%;
      font-size: 2rem;
    }
  }
`

export default Wrapper
