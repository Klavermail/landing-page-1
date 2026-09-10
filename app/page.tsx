import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Deliverables from "@/components/Deliverables";
import EmailCarousel from "@/components/EmailCarousel";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import Process from "@/components/Process";
import Qualifier from "@/components/Qualifier";
import Founder from "@/components/Founder";
import Guarantee from "@/components/Guarantee";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Section order is deliberate — it follows the buyer's questions in the order
 * they actually ask them:
 *
 *   What is this? → Who trusts you? → Do you understand my problem? →
 *   What do I get? → Can you actually design? → Does it work? → Who says so? →
 *   How does it run? → Am I a fit? → Who are you? → What's my risk? →
 *   Objections → Book.
 */
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Deliverables />
        <EmailCarousel />
        <Results />
        <Reviews />
        <Process />
        <Qualifier />
        <Founder />
        <Guarantee />
        <Faq />
        <FinalCta />
        <Booking />
      </main>
      <Footer />
      <StickyCta />
      <ScrollReveal />
    </>
  );
}
