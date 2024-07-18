import AboutUs from "@/components/aboutUs";
import React from "react";
import Header from "@/components/header";
export default function page() {
  return (
    // <div>
    //
    // </div>
    <main
      className={` bg-white flex min-h-screen overflow-x-hidden flex-col items-center justify-between  `}
    >
      <Header />
      <AboutUs />
    </main>
  );
}
