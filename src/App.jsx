import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./layout/pages/HomePage";
import Layout from "./layout/pages/Layout";

function App({children}) {

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
