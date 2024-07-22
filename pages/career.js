import React from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";

const DynamicContainerBlock = dynamic(() => import('@components/ContainerBlock'), {
  loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
});
const DynamicCareerBanner = dynamic(() => import('@components/Career/CareerBanner'), {
  loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
});
const DynamicCareerContant = dynamic(() => import('@components/Career/CareerContant'), {
  loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
});
export default function Career() {
  return (
    <>
      <DynamicContainerBlock>
      <DynamicCareerBanner />
      <DynamicCareerContant />
      </DynamicContainerBlock>
    </>
  );
}
