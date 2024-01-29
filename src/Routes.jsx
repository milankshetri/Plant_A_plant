import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Contanct = React.lazy(() => import("pages/Contanct"));
const CheckOut = React.lazy(() => import("pages/CheckOut"));
const Cart = React.lazy(() => import("pages/Cart"));
const Product = React.lazy(() => import("pages/Product"));
const ShopPage = React.lazy(() => import("pages/ShopPage"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/contanct" element={<Contanct />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
