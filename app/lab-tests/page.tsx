import { StickyFooter } from "../_home/StickyFooter";
import { FloatingWidget } from "../_home/FloatingWidget";
import { LabHero } from "./_components/LabHero";
import { LabTrustBar } from "./_components/LabTrustBar";
import { LabBookingForm } from "./_components/LabBookingForm";
import { LabTests } from "./_components/LabTests";
import { LabPackages } from "./_components/LabPackages";
import { LabWhyChoose } from "./_components/LabWhyChoose";
import { LabHowItWorks } from "./_components/LabHowItWorks";
import { LabAreas } from "./_components/LabAreas";
import { LabTestimonials } from "./_components/LabTestimonials";
import { LabFaq } from "./_components/LabFaq";
import { LabCtaBanner } from "./_components/LabCtaBanner";

export default function LabTestsPage() {
  return (
    <div className="bg-white text-htext">
      <LabHero />
      <LabTrustBar />
      <LabBookingForm />
      <LabTests />
      <LabPackages />
      <LabWhyChoose />
      <LabHowItWorks />
      <LabAreas />
      <LabTestimonials />
      <LabFaq />
      <LabCtaBanner />
      <FloatingWidget />
      <StickyFooter />
    </div>
  );
}
