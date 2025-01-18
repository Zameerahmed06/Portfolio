'use client'

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";;
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      mirror: true,
      easing: "ease-out-back",
      offset: 160,
      delay: 100,
      anchorPlacement: "bottom-bottom"
    });
    AOS.refresh();
  }, []);
  return (
    <main>
      < Hero />
      < Skills />
      < Contact />
      < About />
      < Footer />
    </main>
  );}
