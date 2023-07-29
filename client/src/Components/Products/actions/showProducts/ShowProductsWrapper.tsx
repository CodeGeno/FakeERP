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
  .titles {
    display: flex;
    margin: 1rem 0;
    font-weight: 800;
    div {
      flex-basis: 33%;
      text-align: center;
    }
  }
  .hidden {
    cursor: pointer;
  }
  .white {
    background-color: white !important ;
  }
  .product-box {
    display: flex;
    flex-direction: column;
    margin: 0;
    border-radius: 0%;
    background-color: var(--primary-50);
  }
  .product-box .top {
    display: flex;
    width: 100%;
  }
  .product-box .top .value {
    flex-basis: 33%;
    text-align: center;
  }
  .bottom {
    display: flex;
    width: 100%;
  }
  .bottom .image-box {
    flex-basis: 33%;
  }
  .bottom .image-box .img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 992px) {
  }
`

export default Wrapper
