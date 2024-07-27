import styled from "styled-components";
export const BasketButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const BasketHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BasketTag = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

export const BasketUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const BasketLI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
`;

export const Div = styled.div`
  display: inline-block;
  background-color: #f8f9fa;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
`;
