import Footer from "@/components/Footer/Footer";
import AboutProject from "@/components/Landing/AboutProject";
import Banner from "@/components/Landing/Banner";
import CTA from "@/components/Landing/CTA";
import FAQ from "@/components/Landing/FAQ";
import Journey from "@/components/Landing/Journey";
import Revolutionary from "@/components/Landing/Revolutionary";
import PricingTable from "@/components/Landing/TeknoTable";
import Tokenomics from "@/components/Landing/Tokenomics";
import WhyCoco from "@/components/Landing/WhyCoco";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="font-sans ">
      <Navbar />
      <Banner />
      <AboutProject />
      <Revolutionary />
      <Journey />
      <Tokenomics />
      <PricingTable />
      <WhyCoco />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
