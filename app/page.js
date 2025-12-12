import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Everest Fire — Fire Safety Solutions</title>
        <meta
          name="description"
          content="Fire safety installation, products and AMC"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Products />
          <Testimonials />
          <Brands />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
