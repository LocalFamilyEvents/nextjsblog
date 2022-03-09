import { StrictMode } from "react";

import Layout from "../../../components/layout";

import { ShopContextProvider } from "./shop-context";
import ShopFront from "./shop-front";

const Index = () => (
  <Layout>
    <StrictMode>
      <ShopContextProvider>
        <ShopFront />
      </ShopContextProvider>
    </StrictMode>
  </Layout>
);

export default Index;
