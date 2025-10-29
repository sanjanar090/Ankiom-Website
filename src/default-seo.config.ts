const defaultSEO = {
  title: "Ankiom IoT | Smart IoT Services & Automation Solutions",
  description:
    "Ankiom IoT provides innovative Internet of Things (IoT) services, automation systems, and smart device solutions for businesses and homes.",
  canonical: "https://www.ankiom.com/",
  openGraph: {
    url: "https://www.ankiom.com/",
    title: "Ankiom IoT | Smart IoT Services & Automation Solutions",
    description:
      "Transform your business with Ankiom IoT's intelligent automation, sensor integration, and real-time monitoring systems.",
    images: [
      {
        url: "https://www.ankiom.com/images/iot-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ankiom IoT - Smart Technology",
        type: "image/jpeg",
      },
    ],
    site_name: "Ankiom IoT",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    handle: "@ankiomsoftindia",
    site: "@ankiomsoftindia",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "IoT, Internet of Things, IoT Services, Smart Devices, Automation, Home Automation, Ankiom, Smart Technology, Industrial IoT, Cloud IoT, Connected Systems, Hyderabad",
    },
    {
      name: "author",
      content: "Ankiom Soft India",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};

export default defaultSEO;
