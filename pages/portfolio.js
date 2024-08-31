import React from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";

const DynamicProjectsSection = dynamic(() => import('@components/Home/ProjectsSection'), {
  loading: () => <>
        <div className="loader text-center">
      <Image src="/loding.png" width={50} height={50} alt="Flying Bird" className="loader-image" />
    </div>
    </>
});
export default function Portfolio() {
  return (
    <>
      <DynamicProjectsSection />
    </>
  );
}
