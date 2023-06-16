import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  .menu-list {
    transition: var(--transition-mid);
    display: flex;
    width: 10rem;
    min-height: fit-content;
    flex-direction: row;
    background-color: white;
    box-shadow: var(--shadow-1);
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: lightgrey;
    overflow: hidden;
  }
  ul {
    margin: 0;
  }
  .list-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .list-btn {
    cursor: pointer;
    color: black;
    border: transparent;
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    border-bottom-width: 2px;
    border-bottom-style: lightgrey;
    width: 100%;
  }
  .hide {
    width: 0px;
    overflow: hidden;
    transition: var(--transition-mid);
  }
`

export default Wrapper
