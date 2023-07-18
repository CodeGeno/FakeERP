import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
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
    font-size: 2rem;
  }
  .all-orders {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .singleOrder-container {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: 2rem 0.5rem;
    border-radius: 10px;
    width: 100%;
    box-shadow: var(--shadow-2);
    .company-row {
      display: flex;
      justify-content: space-between;
    }
    .status-row {
      display: flex;
      justify-content: space-between;
    }

    .product-section {
      margin: 2rem;

      .title {
        .name,
        .price,
        .qty,
        .total {
          flex-basis: 25%;
          display: flex;
          border-style: solid;
          border-width: 0 0 2px 0;
        }
      }
    }
    .product-line {
      display: flex;
      flex-direction: row;
      .name,
      .price,
      .qty,
      .total {
        flex-basis: 25%;
        display: flex;
      }
    }
    .title {
      display: flex;
      flex-direction: row;
    }
  }
  .red {
    color: red;
    // text-decoration: line-through;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    font-size: 1.6rem;
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
      padding: 1rem 0.5rem;
    }

    a {
      font-weight: 400;
      font-size: 0.8rem;
    }
    .singleOrder-container {
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
      padding: 2rem 0.5rem;
      border-radius: 10px;
      width: 100%;
      box-shadow: var(--shadow-2);
      .company-row {
        display: flex;
        justify-content: space-between;
      }
      .status-row {
        display: flex;
        justify-content: space-between;
      }

      .product-section {
        margin: 2rem 0rem;
        font-size: 0.6rem;
      }
    }
  }
`

export default Wrapper
