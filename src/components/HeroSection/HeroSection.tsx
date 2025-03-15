import ClientComponent from "@/components/HeroSection/ClientComponent";
import { heading1, section2 } from "@/components/HeroSection/ServerComponent";

const HeroSection = () => {
  return <ClientComponent heading1={heading1} section2={section2} />;
};

export default HeroSection;
