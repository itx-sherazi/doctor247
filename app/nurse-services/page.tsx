import { TopBar } from "../_home/TopBar";
import { Navbar } from "../_home/Navbar";
import { StickyFooter } from "../_home/StickyFooter";
import { MainFooter } from "../_home/MainFooter";
import { StickyCta } from "./_components/StickyCta";
import { WhatsAppFloat } from "./_components/WhatsAppFloat";
import { AccessibilityToggle } from "./_components/AccessibilityToggle";
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
import { NurseNewsletter } from "./_components/NurseNewsletter";

export default function NurseServicesPage() {
  return (
    <div className="bg-white text-htext">
      <TopBar />
      <Navbar />

      <StickyCta />
      <WhatsAppFloat />
      <AccessibilityToggle />
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
      <NurseNewsletter />

      <StickyFooter />
      <MainFooter />
    </div>
  );
}
