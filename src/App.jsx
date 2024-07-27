import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router";
import ElectronicList from "./components/ElectronicList/ElectronicList";
import Basket from "./components/Basket/Basket";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<ElectronicList />} />
        <Route path="/product" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
