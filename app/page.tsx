import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import { Hero } from "./components/sections/hero";
import { Section2 } from "./components/sections/sections2";
import { Section3 } from "./components/sections/sections3";

export default function Home() {
  return <>
    <Navbar />
    <Hero />
    <hr className="h-[2px] bg-gray-200 my-10 w-[70%] mx-auto" />
    <Section2 />
    <Section3 />
    <Footer />
  </>
}
