// next-seo.config.js
const siteUrl = "https://www.ankiom.com"; // change to your real domain later

export default {
  title: "Ankiom | IoT & Next.js Web Solutions",
  description:
    "Ankiom builds modern web, mobile, and IoT solutions using Next.js, Flutter, and advanced cloud technologies.",
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Ankiom | Smart Web & IoT Development",
    description:
      "Professional Next.js and IoT application development services built for scale and performance.",
    siteName: "Ankiom",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ankiom Website Preview",
      },
    ],
  },
  twitter: {
    handle: "@ankiom_official",
    site: "@ankiom_official",
    cardType: "summary_large_image",
  },
};
