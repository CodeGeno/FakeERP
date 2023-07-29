import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .form-label {
    width: 300px;
  }
  .form-input {
    margin-bottom: 1rem;
  }
  .product-box {
    background-color: red;
    display: flex;
    width: 100%;
    margin: 1rem;
    background-color: white;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  h4 {
    margin: 0;
    padding: 0;
  }
  .input-container {
    display: flex;
    gap: 0.3rem;
    width: 100%;
  }
  textarea {
    height: 100px;
    min-height: 100px;
    width: 100%;
    padding: 0.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #333;
    resize: vertical;
  }
  .img-container {
    display: flex;
    flex-wrap: wrap;
  }
  .img-box {
    flex-basis: 20%;
    position: relative;
  }
  .remove-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: red;
    border-width: 0;
    border-radius: 2px;
    color: white;
  }
  .img {
    height: 100%;
    width: 100%;
  }

  .titles {
    display: flex;
    margin: 1rem 0;
    font-weight: 800;
    width: 100%;
    div {
      flex-basis: 33%;
      text-align: center;
    }
  }
  .hidden {
    cursor: pointer;
  }
  .white {
    background-color: white !important;
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
  .btn-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .btn-container .btn {
    font-size: 1rem;
  }
  h3 {
    margin: 0;
  }
  .img-container {
    margin: 1rem 0;
  }
  @media screen and (max-width: 992px) {
    .row {
      width: 100%;
      padding: 0 0.2rem;
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      font-weight: 600;
    }
    .description {
      width: 100%;
      padding: 0 0.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`

export default Wrapper
