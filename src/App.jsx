import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const router = createBrowserRouter([
    {
      path:'/',
      element: (
        <>
          <Header />
          <HomePage />
          <Footer />
        </>
      ),
    },
]);

function App() {

  return (
    <div className='App'>
        <RouterProvider router={router} />
    </div>
  );  
}

export default App;
