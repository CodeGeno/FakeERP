import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: var(--transition);
  background-color: var(--white);
  font-size: 2rem;
  font-weight: 900;
  .navbar-burger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 33.33%;
  }
  .btn {
    visibility: hidden;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .ul-container {
    display: flex;
    justify-content: space-between;
    flex-basis: 66.66%;
    overflow: hidden;
    transition: var(--transition-slow);
  }
  ul {
    margin: 0;
  }
  .navbar-links {
    display: flex;
    flex-basis: 50%;
    flex-direction: row;
    justify-content: space-between;
  }
  .navbar-socials {
    display: flex;
    flex-basis: 50%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
  }
  .homo {
    background-color: rosybrown;
  }
  .ul {
    padding: 0;
    margin: 0;
    line-height: 2rem;
  }

  @media screen and (max-width: 992px) {
    padding: 0.5rem 0.5rem;
    flex-direction: column;
    .ul-container {
      flex-direction: column;
      max-height: ${(props) => {
        return `${props.maxHeight.maxHeight}px`
      }};
    }
    .navbar-links {
      flex-direction: column;
    }
    .navbar-socials {
      justify-content: flex-start;
    }
    .btn {
      visibility: visible;
      transition: var(--transition-slow);
    }
    .visible {
      transition: var(--transition-slow);
      transform: rotate3d(0, 1, 0, 180deg);
    }
  }
`

export default Wrapper
