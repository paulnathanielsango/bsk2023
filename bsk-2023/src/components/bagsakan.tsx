import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import { Layout } from "antd";

export function Bagsakan() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default Bagsakan;
