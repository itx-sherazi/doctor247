import { TopBar } from "./_home/TopBar";
import { Navbar } from "./_home/Navbar";
import { Hero } from "./_home/Hero";
import { Services } from "./_home/Services";
import { HowItWorks } from "./_home/HowItWorks";
import { WhyChoose } from "./_home/WhyChoose";
import { Professionals } from "./_home/Professionals";
import { Guarantee } from "./_home/Guarantee";
import { Trust } from "./_home/Trust";
import { HomeNursing } from "./_home/HomeNursing";
import { Surgeries } from "./_home/Surgeries";
import { Areas } from "./_home/Areas";
import { Reviews } from "./_home/Reviews";
import { Insurance } from "./_home/Insurance";
import { Faq } from "./_home/Faq";
import { FloatingWidget } from "./_home/FloatingWidget";
import { SeoKeywords } from "./_home/SeoKeywords";
import { StickyFooter } from "./_home/StickyFooter";
import { MainFooter } from "./_home/MainFooter";

export default function Home() {
  return (
    <div className="bg-white text-htext">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <Professionals />
      <Guarantee />
      <Trust />
      <HomeNursing />
      <Surgeries />
      <Areas />
      <Reviews />
      <Insurance />
      <Faq />
      <FloatingWidget />
      <SeoKeywords />
      <StickyFooter />
      <MainFooter />
    </div>
  );
}
