import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Latest from "@/components/sections/Latest";
import About from "@/components/sections/About";
import SharedSpace from "@/components/sections/SharedSpace";
import HowItWorks from "@/components/sections/HowItWorks";
import HybridWorking from "@/components/sections/HybridWorking";
import AppSection from "@/components/sections/AppSection";
import Pricing from "@/components/sections/Pricing";
import RecentArticles from "@/components/sections/RecentArticles";
import ContactUs from "@/components/sections/ContactUs";
import TrustedBy from "@/components/sections/TrustedBy";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Latest />
      <SharedSpace />
      <HowItWorks />
      <HybridWorking />
      <AppSection />
      <Pricing />
      <RecentArticles />
      <ContactUs />
      <TrustedBy />
      <Newsletter />
      <Footer />
    </> 
  );
}
