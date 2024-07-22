import React from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";

const DynamicContainerBlock = dynamic(() => import('@components/ContainerBlock'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
});
const DynamicportfolioBanner = dynamic(() => import('@components/Portfolio/portfolioBanner'), {
  loading: () => <>
  <div className="loader text-center">
      <Image src="/loding.png" width={50} height={50} alt="Loader" />
  </div>
</>
});
const DynamicProjectsSection = dynamic(() => import('@components/Home/ProjectsSection'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
});
export default function Portfolio() {
  return (
    <>
      <DynamicContainerBlock>
      <DynamicportfolioBanner />
      <DynamicProjectsSection />
      </DynamicContainerBlock>
    </>
  );
}
