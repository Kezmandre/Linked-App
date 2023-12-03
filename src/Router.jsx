import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Component/Layout/Layout";
import ContactPage from "./Pages/ContactPage";
import RegisterPage from "./Pages/RegisterPage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default Router;
