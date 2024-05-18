import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            mb="60px"
            title="Technologies We Use"
            paragraph="Our process encompasses a plethora of skills At MSP WEBCRAFT, our mastery in these domains defines our commitment to cutting-edge digital solutions."
            center
          />

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-10 md:gap-y-14 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
