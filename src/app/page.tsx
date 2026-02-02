import Description from "@/components/description-section";
import FaqSection from "@/components/faq-section";
import Hero from "@/components/hero-section";
import Testimonials from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="py-10 lg:py-12">
      <Hero />
      <Description />
      <Testimonials />
      <FaqSection />
    </div>
  );
}
