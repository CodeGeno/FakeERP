import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  .product-box {
    padding: 1rem 2rem;
    display: flex;
    box-shadow: var(--shadow-3);
    background-color: var(--primary-50);
    border-radius: 0.5rem;
    align-items: center;
    gap: 1rem;
    margin: 0.5rem 0;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-basis: 50%;
    }
    .right {
      flex-basis: 50%;
      .img-box {
        display: flex;
        flex-wrap: wrap;

        align-items: center;
      }
      .single-image-box {
        display: flex;
        flex-direction: column;
        flex-basis: 33.33%;
        padding: 2px;
        height: 100%;
        background-color: white;
      }

      .img {
        height: 100%;
        width: 100%;
      }
    }
  }
  a {
    font-size: 1.6rem;
  }
`

export default Wrapper
