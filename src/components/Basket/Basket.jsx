import React from "react";
import { NavLink } from "react-router-dom";
import {
  BasketButton,
  BasketHeader,
  BasketTag,
  BasketUl,
  BasketLI,
  Div,
} from "./style";
import TotalComponent from "../TotalComponents/TotalComponent";
import { useDispatch, useSelector } from "react-redux";
const Basket = () => {
  const dispatch = useDispatch();
  const cardItem = useSelector((state) => state.cart);
  const handleRemoveItem = (id) => {
    const product = cardItem.find((element) => element.id === id);
    if (product) {
      if (product.quantity > 1) {
        dispatch({
          type: "update_item",
          payload: { id, quantity: product.quantity },
        });
      } else {
        dispatch({ type: "remove_item", payload: { id } });
      }
    }
  };
  return (
    <>
      <BasketHeader>
        <BasketTag>Basket</BasketTag>
        <NavLink to="/">
          <BasketButton>Back</BasketButton>
        </NavLink>
      </BasketHeader>
      <BasketUl>
        {cardItem.map((item) => (
          <BasketLI key={item.id}>
            <Div>
              {item.name} - ${item.price} -{item.quantity}
            </Div>

            <BasketButton onClick={() => handleRemoveItem(item.id)}>
              Remove
            </BasketButton>
          </BasketLI>
        ))}
      </BasketUl>
      <TotalComponent />
    </>
  );
};

export default Basket;
