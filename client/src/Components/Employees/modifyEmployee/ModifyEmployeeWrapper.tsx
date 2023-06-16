import styled from 'styled-components'
const Wrapper = styled.div`
  .employees-section {
    width: 100%;
    background-color: white;
    justify-content: center;
  }
  .employee-box {
    width: 100%;
    background-color: white;
    box-shadow: var(--shadow-2);
    margin: 0.5rem;
    padding: 1rem;

    h3 {
      text-align: center;
    }
    .input-container {
      margin: 1rem 0;
    }
    .button-section {
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 1rem;
    }
    .btn {
      display: flex;
      font-size: 2rem;
      width: 8rem;
      justify-content: center;
    }
  }
  .red {
    background-color: red;
    color: white;
  }
`

export default Wrapper
