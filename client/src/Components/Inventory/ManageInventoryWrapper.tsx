import styled from 'styled-components'

const Wrapper = styled.div`
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

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
    padding: 2rem 2rem;
  }
  .form-select {
    margin-right: 0.5rem;
    font-size: 1.4rem;
    height: auto;
  }
  .btn {
    font-size: 1.4rem;
  }
  .select-section {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }
  .product-table {
    margin-top: 1rem;
  }
  .column-names {
    display: flex;
    flex-direction: row;
  }
  .product-name {
    flex-basis: 50%;
    border-top-left-radius: 10px;
  }
  .product-order {
    border-top-right-radius: 10px;
  }

  .product-quantity,
  .product-order {
    flex-basis: 25%;
  }
  .product-quantity,
  .product-order,
  .product-name {
    padding-left: 10px;
    border-style: solid;
    border-width: 3px;
  }
  .product-quantity {
    border-width: 3px 0 3px 0;
  }
  .name {
    display: flex;
    justify-content: center;
    flex-basis: 50%;
  }
  .form-input {
    text-align: center;
    height: auto;
    font-weight: 600;
  }
  .quantity,
  .order {
    display: flex;
    justify-content: center;
    flex-basis: 25%;
  }
  .table-row {
    display: flex;
    flex-direction: row;
  }
  .name {
    border-width: 0 3px 3px 3px;
    border-style: solid;
    display: flex;
    align-items: center;
  }
  .quantity {
    display: flex;
    align-items: center;

    gap: 0.1rem;
    padding: 0.2rem 0.5rem;
    border-width: 0 0 3px 0;
    border-style: solid;
  }
  .order {
    border-width: 0 3px 3px 3px;
    border-style: solid;
    display: flex;
    align-items: center;
  }
  .actions-section {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }
  .btn-section {
    .btn {
      font-size: 2rem;
    }
  }
  a {
    font-size: 2rem;
  }
  p {
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 992px) {
    .section-container {
      padding: 1rem 0.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    .btn {
      font-size: 1rem;
      padding: 0.5rem;
    }
    .form-select {
      font-size: 1rem;
    }
    .column-names {
      font-size: 0.8rem;
    }
    .table-row {
      font-size: 0.7rem;
    }
    .quantity {
      .btn {
        font-size: 0.8rem;
      }
      .form-input {
        font-size: 0.6rem;
        padding: 0.5rem 0;
        min-width: 20px;
      }
    }
  }
`

export default Wrapper
