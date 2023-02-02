import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Testimonials from "./components/Testimonial";

function App() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Hero />
     <Services />
      <Recommend />
      <Testimonials />
      <Footer />

    </>
  );
}

export default App;
