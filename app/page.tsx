import { TopBar } from "./_home/TopBar";
import { Navbar } from "./_home/Navbar";
import { Hero } from "./_home/Hero";
import { Trust } from "./_home/Trust";
import { Services } from "./_home/Services";
import { Surgeries } from "./_home/Surgeries";
import { WhyChoose } from "./_home/WhyChoose";
import { HomeDoctor } from "./_home/HomeDoctor";
import { HomeNursing } from "./_home/HomeNursing";
import { HowItWorks } from "./_home/HowItWorks";
import { Specialities } from "./_home/Specialities";
import { Insurance } from "./_home/Insurance";
import { Reviews } from "./_home/Reviews";
import { Comparison } from "./_home/Comparison";
import { Areas } from "./_home/Areas";
import { Faq } from "./_home/Faq";
import { StickyFooter } from "./_home/StickyFooter";
import { MainFooter } from "./_home/MainFooter";

export default function Home() {
  return (
    <div className="bg-white text-htext">
      <TopBar />
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Surgeries />
      <WhyChoose />
      <HomeDoctor />
      <HomeNursing />
      <HowItWorks />
      <Specialities />
      <Insurance />
      <Reviews />
      <Comparison />
      <Areas />
      <Faq />
      <StickyFooter />
      <MainFooter />
    </div>
  );
}
