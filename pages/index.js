import ContainerBlock from "../components/ContainerBlock";
import Index from "../components/HomePage/Index"
import About from "@components/About/AboutBannerSection";
import Services from "@components/service/ServiceBanner";
import Portfolio from "@components/testimonial/TestimonialBanner";
// import Skills from "@components/Skilles";

export default function Home({  }) {
  return (
    <ContainerBlock>
         <Index />
         {/* <Skills /> */}
    </ContainerBlock>
  );
}