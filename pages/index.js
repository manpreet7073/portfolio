import ContainerBlock from "../components/ContainerBlock";
import Banner from "@components/Banner";
import About from "@components/About";
import Services from "@components/Services";
import Portfolio from "@components/Portfolio";
import Skills from "@components/Skilles";

export default function Home({  }) {
  return (
    <ContainerBlock>
         <Banner />
         <About />
         <Services />
         <Skills />
         <Portfolio />

    </ContainerBlock>
  );
}