import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1rem 0;
  .product {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .section-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 95%;
    background-color: var(--white);
    border-radius: var(--borderRadius);
    padding: 2rem;
  }
  .actions-section {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }
  a {
    font-size: 2rem;
  }
  .btn-section {
    flex-direction: row;
  }
  .employees-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .employee-box-border {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--shadow-3);
    background-color: var(--primary-50);
    border-radius: 0.5rem;
    margin: 0.5rem;
  }
  .employee-box {
    background-color: white;
  }
  h4 {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  p {
    font-size: 1rem;
    margin: 0.5rem;
  }
  a {
    font-size: 1.6rem;
  }
`

export default Wrapper
