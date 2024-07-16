import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import LoginPage from "../pages/login";
import AddProductPage from "../pages/Addproduct";
import ProductPage from "../pages/productpage";
import SearchProducts from "../pages/searchproducts";
import RecipePage from "../pages/recipepage";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="Addproduct" element={<AddProductPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="search" element={<SearchProducts />} />
        <Route path="recipe" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
