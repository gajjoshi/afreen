import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import { Homepage } from "@/components/homepage";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <Header />
      <Homepage />
    </main>
  );
}
