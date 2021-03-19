import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import CardList from "./CardList";
interface TrendViewProps {
  category: string;
}
const TrendView: React.FC<TrendViewProps> = ({ category }) => {
  return (
    <>
      <CardList />
    </>
  );
};
export default TrendView;
