import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <main className="bg-accent">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
