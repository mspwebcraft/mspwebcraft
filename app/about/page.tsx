import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | MSP Webcraft",
  description: "This is About Page of MSP Webcraft",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="MSP WEBCRAFT specializes in crafting dynamic websites, e-commerce, with comprehensive backend support. Our expert team creates captivating frontends using diverse JavaScript libraries for an animated, interactive user experience"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
