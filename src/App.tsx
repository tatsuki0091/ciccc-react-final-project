import React from "react";
import { Routes, Route } from "react-router-dom";
import Top from "./features/top/Top";
import Layout from "./features/common/Layout";

function App() {
  return (
    <>
      <header>
        <Layout />
      </header>

      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </>
  );
}

export default App;
