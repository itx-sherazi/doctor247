import { StickyFooter } from "../_home/StickyFooter";
import { FloatingWidget } from "../_home/FloatingWidget";
import { PhysioHero } from "./_components/PhysioHero";
import { PhysioTrustBar } from "./_components/PhysioTrustBar";
import { PhysioBookingForm } from "./_components/PhysioBookingForm";
import { PhysioServices } from "./_components/PhysioServices";
import { PhysioConditions } from "./_components/PhysioConditions";
import { PhysioPricing } from "./_components/PhysioPricing";
import { PhysioWhyChoose } from "./_components/PhysioWhyChoose";
import { PhysioHowItWorks } from "./_components/PhysioHowItWorks";
import { PhysioAreas } from "./_components/PhysioAreas";
import { PhysioTestimonials } from "./_components/PhysioTestimonials";
import { PhysioFaq } from "./_components/PhysioFaq";
import { PhysioCtaBanner } from "./_components/PhysioCtaBanner";

export default function PhysioServicesPage() {
  return (
    <div className="bg-white text-htext">
      <PhysioHero />
      <PhysioTrustBar />
      <PhysioBookingForm />
      <PhysioServices />
      <PhysioConditions />
      <PhysioPricing />
      <PhysioWhyChoose />
      <PhysioHowItWorks />
      <PhysioAreas />
      <PhysioTestimonials />
      <PhysioFaq />
      <PhysioCtaBanner />
      <FloatingWidget />
      <StickyFooter />
    </div>
  );
}
export default function PhysioServicesPage() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Physiotherapy Services</h1>
      <p className="text-gray-600">Coming soon.</p>
    </div>
  );
}