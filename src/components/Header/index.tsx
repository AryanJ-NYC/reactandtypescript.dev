import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const Brand = styled(Link)`
  color: white;
  padding-right: 2rem;
  text-decoration: none;
`;

const StyledHeader = styled.header`
  background: #2c517f;
  padding: 2rem;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <nav style={{ display: 'flex', flexDirection: 'row' }}>
      <Brand to="/">{siteTitle}</Brand>
      <NavLink to="/examples">Examples</NavLink>
    </nav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
