import Candidate from "@/components/candidates";
import Header from "@/components/header";
import React from "react";

export default function index() {
  return (
    <main>
      <Header />
      <div className="mt-16 bg-white flex justify-center items-center">
        <Candidate />
      </div>
    </main>
  );
}
