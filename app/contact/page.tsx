import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | MSP Webcraft",
  description: "This is Contact Page of MSP Webcraft",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Connect with MSP WEBCRAFT! Whether you have inquiries, ideas, or partnership proposals, reach out to our team easily. We're here to assist you in bringing your web development visions to life."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
