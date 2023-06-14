import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';

export const SearchForm = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 6px;
  background: rgba(0, 0, 0, 0);
  border: 0;
  outline: 0;
  cursor: pointer;
`;
