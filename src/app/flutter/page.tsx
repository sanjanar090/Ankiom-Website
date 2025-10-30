"use client";

import { motion } from "framer-motion";
import { NextSeo, WebPageJsonLd, LocalBusinessJsonLd, ProductJsonLd, LogoJsonLd } from "next-seo";
import NavbarFlutter from "@/app/components/NavbarFlutter";
import HeroSection from "@/app/components/HeroSection";
import FlutterSection from "@/app/components/FlutterSection";
import FlutterServiceOffering from "@/app/components/FlutterServiceOffering";
import IndustriesWeServe3 from "@/app/components/IndustriesWeServe3";
import Technologies3 from "@/app/components/Technologies3";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import ContactSection from "../components/ContactSection";
import Footer from "@/app/components/Footer";

export default function FlutterPage() {
  const productionCanonical = "https://ankiom.com/flutter";
  const previewCanonical = "https://ankiom.vercel.app/flutter";
  const canonicalUrl =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
      ? productionCanonical
      : previewCanonical;

  return (
    <>
      <NextSeo
        title="Flutter App Development Services in Bangalore | Ankiom"
        description="Build high-quality cross-platform apps with Ankiom — expert Flutter app development services for Android, iOS, and Web."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "Flutter App Development Services in Bangalore | Ankiom",
          description:
            "Ankiom offers Flutter-based cross-platform app development for startups and enterprises with seamless performance.",
          type: "website",
          locale: "en_IN",
          siteName: "Ankiom Technologies",
          images: [
            {
              url: "https://ankiom.com/images/application-interface.jpg",
              width: 1200,
              height: 630,
              alt: "Flutter App Development Solutions by Ankiom",
            },
          ],
        }}
        twitter={{
          handle: "@ankiom_official",
          site: "@ankiom_official",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Flutter development company, cross-platform apps, mobile app development Bangalore, iOS Android Flutter apps, Ankiom Technologies",
          },
          {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          {
            name: "author",
            content: "Ankiom Technologies",
          },
          {
            name: "language",
            content: "English",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=5",
          },
          {
            httpEquiv: "X-UA-Compatible",
            content: "IE=edge",
          },
        ]}
        additionalLinkTags={[
          { rel: "canonical", href: canonicalUrl },
          { rel: "icon", href: "/favicon.ico" },
          { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
          { rel: "manifest", href: "/manifest.json" },
          {
            rel: "alternate",
            hrefLang: "en",
            href: "https://ankiom.com/flutter",
          },
          {
            rel: "alternate",
            hrefLang: "hi",
            href: "https://ankiom.com/hi/flutter",
          },
        ]}
      />

      <WebPageJsonLd
        id={canonicalUrl}
        description="Ankiom provides expert Flutter app development services for Android, iOS, and Web."
        lastReviewed="2025-01-15"
        reviewedBy={{
          type: "Organization",
          name: "Ankiom Technologies",
        }}
      />

      <LogoJsonLd
        logo="https://ankiom.com/images/logo.png"
        url="https://ankiom.com"
      />

      <LocalBusinessJsonLd
        type="LocalBusiness"
        id="https://ankiom.com/#localbusiness"
        name="Ankiom Technologies"
        description="A software development company specializing in IoT, web, and Flutter app development solutions in Bangalore, India."
        url="https://ankiom.com"
        telephone="+91-7090703720"
        address={{
          streetAddress:
            "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322, Bengaluru",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560048",
          addressCountry: "IN",
        }}
        geo={{
          latitude: 12.9716,
          longitude: 77.5946,
        }}
        sameAs={[
          "https://in.linkedin.com/company/ankiom-soft-india",
          "https://twitter.com/ankiom_official",
        ]}
        images={["https://ankiom.com/images/application-interface.jpg"]}
        priceRange="₹₹₹"
      />

      <ProductJsonLd
        productName="Flutter App Development Services"
        description="Cross-platform Flutter app development by Ankiom — powerful, scalable, and cost-effective mobile solutions for modern businesses."
        brand="Ankiom Technologies"
        url={canonicalUrl}
        images={["https://ankiom.com/images/application-interface.jpg"]}
        offers={{
          price: "Custom Quote",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
        }}
        manufacturerName="Ankiom Technologies"
        manufacturerLogo="https://ankiom.com/images/logo.png"
      />

      <NavbarFlutter />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection
          imagelink="/images/application-interface.jpg"
          content={{
            title: "Flutter App Development",
            description:
              "Create stunning cross-platform mobile apps with Flutter. Fast, scalable, and efficient solutions for modern businesses.",
          }}
        />
      </motion.div>

      <FlutterSection />
      <FlutterServiceOffering />
      <IndustriesWeServe3 />
      <Technologies3 />
      <WhyChooseSection />
      <ContactSection heading="Ready to Transform Your Business with Mobile App?" />
      <Footer />
    </>
  );
}
