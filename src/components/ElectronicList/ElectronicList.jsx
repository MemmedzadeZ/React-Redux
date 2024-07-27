import React, { useEffect } from "react";
import {
  Button,
  Header,
  HeaderTag,
  Div,
  BasketUl,
  BasketLI,
  BasketDiv,
  BasketP,
} from "./style";
import { NavLink } from "react-router-dom";
import db from "../../db";
import { useDispatch, useSelector } from "react-redux";
const ElectronicList = () => {
  const dispatch = useDispatch();
  const productCount = useSelector((state) => state.productCount);
  const handleAddCart = (product) => {
    dispatch({ type: `add_item`, payload: { ...product, quantity: 1 } });
  };

  useEffect(() => {}, [productCount]);
  return (
    <>
      <Header>
        <HeaderTag>List</HeaderTag>
        <NavLink to="/product">
          <Button>
            Basket
            <Div>{productCount}</Div>
          </Button>
        </NavLink>
      </Header>
      <BasketUl>
        {db.map((item) => (
          <BasketLI key={item.id}>
            <BasketDiv>
              <BasketP>{item.name}</BasketP>

              <Button onClick={() => handleAddCart(item)}>ADD</Button>
            </BasketDiv>
          </BasketLI>
        ))}
      </BasketUl>
    </>
  );
};

export default ElectronicList;
