import styled from 'styled-components'

const Wrapper = styled.div`
  width: auto;
  display: flex;
  min-height: 100vh;
  .menu-list {
    box-shadow: var(--shadow2);
    background-color: white;
    z-index: 0;
    display: flex;
    flex-direction: column;
    width: 10rem;
  }

  .list-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    gap: 5px;
  }
  .list-btn {
    display: flex;
    flex-direction: column;
    padding: 0 0 10px 0;
    color: var(--primary-500);
    text-decoration: none;
  }
  .list-btn:hover {
    cursor: pointer;
  }
  .slide-in {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .hide {
    opacity: 0;
    transform: translateX(-100%);
  }
  @media screen and (max-width: 992px) {
  }
`

export default Wrapper
