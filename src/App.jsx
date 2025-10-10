import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LookupPage from "./pages/LookupPage";
import { Toaster } from "./components/ui/sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col flex-grow">
        <Header />
        <HomePage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lookup",
    element: (
      <div className="flex flex-col">
        <Toaster />
        <Header />
        <LookupPage />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
