import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LayoutWrapper } from "./Layout.style";

function Layout({ children }) {
  return (
    <LayoutWrapper>
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
