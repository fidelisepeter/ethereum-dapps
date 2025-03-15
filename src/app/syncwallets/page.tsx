import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Wallet from "@/components/Wallets/Wallet";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "155px" }}>
        <Wallet />
      </div>
      <Footer />
    </div>
  );
};

export default page;
