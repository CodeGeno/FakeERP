import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
    .btn-container {
      display: flex;
      justify-content: center;
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
`

export default Wrapper
