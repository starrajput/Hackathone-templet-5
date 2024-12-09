import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from  "./components/Hero"
import Edit from "./components/Edit";
import Products from "./components/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    <Edit />
      <Products />
    </div>
  );
}
