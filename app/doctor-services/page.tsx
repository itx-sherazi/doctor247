import { StickyFooter } from "../_home/StickyFooter";
import { FloatingWidget } from "../_home/FloatingWidget";
import { DoctorHero } from "./_components/DoctorHero";
import { DoctorTrustBar } from "./_components/DoctorTrustBar";
import { DoctorBookingForm } from "./_components/DoctorBookingForm";
import { DoctorServices } from "./_components/DoctorServices";
import { DoctorConditions } from "./_components/DoctorConditions";
import { DoctorPricing } from "./_components/DoctorPricing";
import { DoctorWhyChoose } from "./_components/DoctorWhyChoose";
import { DoctorHowItWorks } from "./_components/DoctorHowItWorks";
import { DoctorAreas } from "./_components/DoctorAreas";
import { DoctorTestimonials } from "./_components/DoctorTestimonials";
import { DoctorFaq } from "./_components/DoctorFaq";
import { DoctorCtaBanner } from "./_components/DoctorCtaBanner";

export default function DoctorServicesPage() {
  return (
    <div className="bg-white text-htext">
      <DoctorHero />
      <DoctorTrustBar />
      <DoctorBookingForm />
      <DoctorServices />
      <DoctorConditions />
      <DoctorPricing />
      <DoctorWhyChoose />
      <DoctorHowItWorks />
      <DoctorAreas />
      <DoctorTestimonials />
      <DoctorFaq />
      <DoctorCtaBanner />
      <FloatingWidget />
      <StickyFooter />
    </div>
  );
}