import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;
  .actions-section {
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

  .product-box {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-3);
    background-color: var(--primary-50);
    border-radius: 0.5rem;
    align-items: center;
    gap: 1rem;
    margin: 0.5rem 0;
  }
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .bottom {
    display: flex;
    flex-wrap: wrap;
  }

  .image-box {
    flex-basis: 20%;
    display: flex;
    align-items: center;

    justify-content: center;
    .img {
      border-radius: 10px;
      overflow: hidden;
      padding: 0.2rem;
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 992px) {
    .product-box {
      padding: 1rem 0.5rem;
    }
    .section-container {
      padding: 1rem 1rem;
    }
  }
`

export default Wrapper
