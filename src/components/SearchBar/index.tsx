import React from "react";
import styled from "styled-components";
import SearchIcon from "components/Icon/Search";
const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.base};
  background-color: #f5f5f7;
`;
const Input = styled.input`
  width: 20rem;
  background-color: #f5f5f7;
  padding: 0;
  border: none;
  :focus {
    outline: none;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;
const SearchBar: React.FC = () => {
  return (
    <form>
      <Wrapper>
        <Label>
          <SearchIcon />
          <Input type="text" placeholder="작품을 검색해보세요."></Input>
        </Label>
      </Wrapper>
    </form>
  );
};

export default SearchBar;
