import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <main className="bg-accent">
      <Header />
      <section className="min-h-[calc(100vh-439px)]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default RootLayout;
