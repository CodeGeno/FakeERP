import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
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

  a {
    font-size: 1.6rem;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 992px) {
    .btn-container {
      gap: 1px;
      text-align: center;
      display: flex;
      justify-content: center;
      width: 100%;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 33%;
      }
    }
    .product-box {
      padding: 1rem 0.5rem;
    }
    .section-container {
      padding: 1rem 1rem;
    }

    a {
      font-weight: 400;
      font-size: 0.8rem;
    }
  }
`

export default Wrapper
