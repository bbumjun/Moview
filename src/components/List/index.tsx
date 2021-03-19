import styled from "styled-components";
import React from "react";

const StyledList = styled.ul`
  list-style: none;
`;
interface ListProps<Object> {
  items: Object[];
}
const List: React.FC<ListProps<Object>> = ({ items }) => {
  return <StyledList>{items.map((item) => `<li>${item}</li>`)}</StyledList>;
};

export default List;
