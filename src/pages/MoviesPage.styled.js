import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;

export const Link = styled(NavLink)`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;

  &:hover {
    color: orangered;
  }
`;
