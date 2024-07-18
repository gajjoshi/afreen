import Header from "@/components/header";
import OurServices from "@/components/services";
import React from "react";

export default function page() {
  return (
    <main>
      <Header />
      <div className=" mt-16  flex justify-center items-center bg-white">
        <OurServices />
      </div>
    </main>
  );
}
