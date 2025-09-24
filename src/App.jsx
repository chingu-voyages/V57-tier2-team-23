import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
      path:'/',
      element: (
        <div className="h-screen flex flex-col overflow-y-hidden">
          <Header />
          <HomePage />
          <Footer />
        </div>
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
