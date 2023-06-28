import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
`
export const HeaderNavigation = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    text-decoration: none;
    list-style: none;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`
