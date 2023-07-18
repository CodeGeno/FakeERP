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
    .input-container {
      display: flex;
      align-items: center;
    }
    .form-input,
    .form-label {
      margin: 0;
      font-size: 0.7rem;
    }
  }
`

export default Wrapper
