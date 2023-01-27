import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  .menu-list {
    width: 10rem;
    height: 100%;
    flex-direction: row;
    background-color: white;
    box-shadow: var(--shadow-1);
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: lightgrey;
  }
  ul {
    margin: 0;
  }
  .list-container {
    display: flex;
    flex-direction: column;
    border-top-width: 2px;
    border-top-style: lightgrey;
  }
  .list-btn {
    cursor: pointer;
    color: black;
    border: transparent;
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    border-bottom-width: 2px;
    border-bottom-style: lightgrey;
  }
`

export default Wrapper
