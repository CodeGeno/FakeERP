import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1rem 0;
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
    font-size: 1.6rem;
  }
`

export default Wrapper
