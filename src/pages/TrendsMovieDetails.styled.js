import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieDetailsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const MovieDetailsImg = styled.div`
  img {
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const MovieDetailsInfo = styled.div`
  max-width: 480px;
  h2 {
    margin-top: 20 px;
  }
`;

export const MovieAddInfoWrap = styled.div`
  h2 {
    font-size: 16px;
  }

  ul {
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  margin-bottom: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: black;

  &:hover {
    color: orangered;
  }

  &.active {
    color: orangered;
  }
`;
