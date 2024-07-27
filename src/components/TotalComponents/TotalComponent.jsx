import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TotalTag } from "./style";
const TotalComponent = () => {
  const cardItem = useSelector((state) => state.cart);
  const [total, setTotal] = useState();

  const calculateTotalPrice = () => {
    let total = 0;
    cardItem.forEach((element) => {
      total += element.quantity * element.price;
    });
    return total;
  };
  useEffect(() => {
    const item = calculateTotalPrice();
    setTotal(item);
  }, [cardItem]);
  return (
    <>
      <TotalTag>Total: {total}$</TotalTag>
    </>
  );
};

export default TotalComponent;
