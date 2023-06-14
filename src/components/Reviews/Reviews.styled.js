import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  p {
    font-size: 14px;
  }

  li {
    border-bottom: 1px solid black;
  }

  li:last-child {
    border-bottom: none;
  }
`;
