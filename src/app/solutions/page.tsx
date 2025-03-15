import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Solution from "@/components/Solution/Solution";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "155px" }}>
        <Solution />
      </div>
      <Footer />
    </div>
  );
};

export default page;
