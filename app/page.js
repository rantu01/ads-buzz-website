import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/home/Hero";
import BookingSection from "@/components/home/BookingSection";
import MediaBlock from "@/components/home/MediaBlock";
import AdSolutions from "@/components/home/AdSolutions";
import BenefitsSection from "@/components/home/BenefitsSection";
import Testimonials from "@/components/home/Testimonials";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/home/PricingSection";
import GuaranteeCertificate from "@/components/home/GuaranteeCertificate";
import ComparisonTable from "@/components/home/ComparisonTable";
import BookingSection2 from "@/components/home/BookingSection2";
import MilestoneRewards from "@/components/home/MilestoneRewards";
import Testimonials2 from "@/components/home/Testimonials2";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import LatestBlogs from "@/components/home/LatestBlogs";
import YoutubeSection from "@/components/home/YoutubeSection";
import CallToActionBanner from "@/components/home/CallToActionBanner";

export default function Home() {
  return (
    <div id="top" className="bg-[#040719] text-white">
      <Header />

      <main id="main" className="pt-[89px]">
        {/* 1 · HERO */}
        <Hero />

        <BookingSection></BookingSection>

        {/* 3 · MEDIA block */}
        <MediaBlock />

        {/* 4 · CONTENT — platforms */}
        <AdSolutions></AdSolutions>

        {/* 5 · BENEFITS */}
        <BenefitsSection></BenefitsSection>

        {/* 6 · SUCCESS STORIES */}
        <Testimonials></Testimonials>

        {/* 7 · HOW IT WORKS */}
        <HowItWorks></HowItWorks>

        {/* 8 · PRICING */}
        <PricingSection></PricingSection>

        {/* 9 · GUARANTEES */}
        <GuaranteeCertificate></GuaranteeCertificate>

        {/* 10 · COMPARISON */}
        <ComparisonTable></ComparisonTable>

        {/* 11 · BOOK A CALL */}
        <BookingSection2></BookingSection2>

        {/* 12 · REWARDS */}
        <MilestoneRewards></MilestoneRewards>

        {/* 13 · WHAT CLIENTS SAY + FAQ */}
        <Testimonials2></Testimonials2>       

        {/* 14 · TEAM */}
        <MeetTheTeam></MeetTheTeam>

        {/* 15 · BLOG */}
        <LatestBlogs></LatestBlogs>

        {/* 16 · YOUTUBE */}
        <YoutubeSection></YoutubeSection>

        {/* 16 · CTA */}
        <CallToActionBanner></CallToActionBanner>
      </main>

      <Footer />
    </div>
  );
}
