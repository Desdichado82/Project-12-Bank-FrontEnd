import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

export const MainNavItem = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  font-size:1rem;
  padding:1rem;
  color: var(--font-color);

  &:hover {
    text-decoration: underline;
  }

  &.router-link-exact-active {
    color: var(--accent-color);
  }
`;

export const MainNavLogo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const MainNavLogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`;