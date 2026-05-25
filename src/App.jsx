import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import UHome from "./updatedComponets/UHome";
import FeaturesSection from "./updatedComponets/FeaturesSection";
import MarketTicker from "./components/MarketTicker";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FeedbackPage from "./updatedComponets/FeedbackPage";
import ChartPage from "./components/ChartPage";
import HeatmapPage from "./components/HeatmapPage";
import PoliciesLayout from "./components/PoliciesLayout";
import InvestorCharter from "./pages/policies/InvestorCharter";
import TermsConditions from "./pages/policies/TermsConditions";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import ClientTerm from "./pages/policies/ClientTerm";
import CodeOfConduct from "./pages/policies/CodeOfConduct";
import RedressalOfGrievance from "./pages/policies/RedressalOfGrievance";
import DisclosureUserKYC from "./pages/policies/DisclosureUserKYC";
import ComplaintsBoard from "./pages/policies/ComplaintsBoard";
import PMLAPolicy from "./pages/policies/PMLAPolicy";
import WebsiteDisclaimer from "./pages/policies/WebsiteDisclaimer";
import AccessibilityStatement from "./pages/policies/AccessibilityStatement";
import SocialMediaDisclaimers from "./pages/policies/SocialMediaDisclaimers";
import LegalRiskDisclosure from "./pages/policies/LegalRiskDisclosure";
import RefundPolicy from "./pages/policies/RefundPolicy";
import CancellationPolicy from "./pages/policies/CancellationPolicy";
import ConflictOfInterestPolicy from "./pages/policies/ConflictOfInterestPolicy";
import ProPointsPolicy from "./pages/policies/ProPointsPolicy";
import DataDeletionPolicy from "./pages/policies/DataDeletionPolicy";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import Pricing from "./components/Pricing";
import Charts from "./components/Charts";
import MarketTop from "./components/MarketTop";
import MediaPresence from "./components/MediaPresence";
import FeatureSection from "./components/FeatureSection";
import VideoSection from "./components/VideoSection";
import KYCModal from "./components/KYCModal";

export default function App() {
  return (
    <div className="min-h-screen bg-trading-light dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-black focus:z-50">Skip to main content</a>
      <Navbar />

      <main id="main-content">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MarketTop />
              <UHome />
              <MediaPresence />
              <FeaturesSection />
              <MarketTicker />
              <ChartPage />
              <HeatmapPage />
              <FeatureSection />
              <VideoSection />
              <WhyChooseUs />
            </>
          }
        />

        <Route path="/policies" element={<PoliciesLayout />}>
          <Route index element={<Navigate to="terms-conditions" replace />} />
          <Route path="investor-charter" element={<InvestorCharter />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="client-term" element={<ClientTerm />} />
          <Route path="code-of-conduct" element={<CodeOfConduct />} />
          <Route path="disclosure-user-kyc" element={<DisclosureUserKYC />} />
          <Route path="complaints-board" element={<ComplaintsBoard />} />
          <Route path="pmla-policy" element={<PMLAPolicy />} />
          <Route path="website-disclaimer" element={<WebsiteDisclaimer />} />
          <Route
            path="social-media-disclaimers"
            element={<SocialMediaDisclaimers />}
          />
          <Route
            path="legal-risk-disclosure"
            element={<LegalRiskDisclosure />}
          />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="cancellation-policy" element={<CancellationPolicy />} />
          <Route
            path="conflict-of-interest-policy"
            element={<ConflictOfInterestPolicy />}
          />
          <Route path="pro-points-policy" element={<ProPointsPolicy />} />
          <Route path="data-deletion" element={<DataDeletionPolicy />} />
          <Route
            path="redressal-of-grievance"
            element={<RedressalOfGrievance />}
          />
          <Route path="accessibility-statement" element={<AccessibilityStatement />} />
        </Route>

        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
      </main>

      <Footer />
    </div>
  );
}
