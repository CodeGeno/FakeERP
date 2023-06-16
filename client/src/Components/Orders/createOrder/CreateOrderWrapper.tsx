import styled from 'styled-components'

const Wrapper = styled.div`
  .product-table {
    margin: 2rem 0;
    .title {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      .name {
        flex-basis: 40%;
        border-top-left-radius: 10px;
        border-style: solid;
        border-width: 3px;
        border-color: black;
        border-right-width: 0px;
        font-size: 2rem;
      }
      .price,
      .quantity,
      .total {
        flex-basis: 20%;
        border-style: solid;
        border-color: black;
        font-size: 2rem;
      }

      .quantity {
        border-width: 3px 0px 3px 3px;
      }
      .total {
        border-top-right-radius: 10px;
        border-width: 3px 3px 3px 3px;
      }
      .price {
        border-style: solid;
        border-color: black;

        border-width: 3px 0px 3px 3px;
      }
    }
    .product {
      display: flex;
      font-size: 1rem;
      .name {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 40%;
        border-style: solid;
        border-width: 3px;
        border-color: black;
        border-top-width: 0px;
        border-right-width: 0px;
        padding-left: 10px;
      }
      .last {
        border-bottom-left-radius: 10px;
      }
      .price,
      .quantity,
      .total {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 10px;
        flex-basis: 20%;
        border-style: solid;
        border-color: black;
        border-top-width: 0px;
      }
      .total {
        border-width: 0px 3px 3px 3px;
      }
      .quantity {
        border-width: 0px 0px 3px 3px;
        display: flex;
        flex-direction: column;
      }
      .price {
        border-width: 0 0px 3px 3px;

        .price-text {
          display: flex;
          justify-content: center;
          width: 80px;
        }
      }
      .quantity {
        padding: 10px;
      }
      .quantity .qty {
        gap: 5px;
        justify-content: center;
        align-items: center;
        display: flex;
        .btn {
          margin: 0.5rem 0;
        }
      }
      .quantity .form-input {
        display: flex;
        text-align: center;
      }
    }
  }
  .red {
    color: red;
    font-size: 0.8rem;
  }
  .total-price {
    display: flex;
    justify-content: flex-end;

    .total {
      display: flex;
      justify-content: center;
      flex-basis: 20%;
      border-style: solid;
      border-width: 0 0 3px 3px;
      border-color: black;
      font-size: 2rem;
      border-bottom-left-radius: 10px;
    }
    .price {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-basis: 20%;
      border-style: solid;
      border-width: 0 3px 3px 0px;
      border-color: black;
      border-bottom-right-radius: 10px;
      font-size: 1.2rem;
    }
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    .btn {
      margin: 2rem 0;
      font-size: 2rem;
    }
  }
  .select-section {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    .form-input {
      font-size: 1.4rem;
      height: auto;
    }
    .form-select {
      font-size: 1.4rem;
      height: auto;
    }
    .btn {
      font-size: 1.4rem;
    }
    .select-button-section {
      display: flex;
      gap: 1rem;
    }
  }
  .company-date {
    display: flex;
    gap: 1rem;
    .input-container {
      flex-basis: 50%;
      .form-input {
        font-size: 1.4rem;
        height: auto;
      }
      .form-select {
        font-size: 1.4rem;
        height: auto;
      }
    }
  }
`

export default Wrapper
