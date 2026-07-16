import { StickyFooter } from "../_home/StickyFooter";
import { WhatsAppFloat } from "./_components/WhatsAppFloat";
import { EmergencyBanner } from "./_components/EmergencyBanner";
import { NurseHero } from "./_components/NurseHero";
import { NurseTrustBar } from "./_components/NurseTrustBar";
import { NurseBookingForm } from "./_components/NurseBookingForm";
import { NurseServices } from "./_components/NurseServices";
import { NursePricing } from "./_components/NursePricing";
import { NurseCalculator } from "./_components/NurseCalculator";
import { NurseWhyChoose } from "./_components/NurseWhyChoose";
import { NurseHowItWorks } from "./_components/NurseHowItWorks";
import { NurseAreas } from "./_components/NurseAreas";
import { NurseTestimonials } from "./_components/NurseTestimonials";
import { NurseFaq } from "./_components/NurseFaq";
import { NurseComparison } from "./_components/NurseComparison";
import { NurseBlog } from "./_components/NurseBlog";
import { NurseSymptomChecker } from "./_components/NurseSymptomChecker";
import { NurseCtaBanner } from "./_components/NurseCtaBanner";

export default function NurseServicesPage() {
  return (
    <div className="bg-white text-htext">
      <WhatsAppFloat />
      <EmergencyBanner />

      <NurseHero />
      <NurseTrustBar />
      <NurseBookingForm />
      <NurseServices />
      <NursePricing />
      <NurseCalculator />
      <NurseWhyChoose />
      <NurseHowItWorks />
      <NurseAreas />
      <NurseTestimonials />
      <NurseFaq />
      <NurseComparison />
      <NurseBlog />
      <NurseSymptomChecker />
      <NurseCtaBanner />

      <StickyFooter />
    </div>
  );
}
