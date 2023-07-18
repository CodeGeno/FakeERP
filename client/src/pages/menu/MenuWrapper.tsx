import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .menu-list {
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
  }
  ul {
    margin: 0;
  }
  .list-container {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .list-btn {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    padding: 0.5rem;

    flex-basis: 15%;
  }
  .hide {
    height: 0px;
    display: none;
  }
  @media screen and (max-width: 992px) {
    .menu-list {
      padding: 0 1rem 1rem;
    }
    .list-container {
      flex-direction: column;
      width: 100%;
      gap: 10px;
    }
    .list-btn {
      display: flex;
      justify-content: center;
      font-size: 1rem;
      padding: 0.5rem;
      cursor: pointer;
      flex-basis: 16.66%;
    }
  }
`

export default Wrapper
