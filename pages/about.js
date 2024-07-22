import React, { useState } from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";

const DynamicContainerBlock = dynamic(() => import('@components/ContainerBlock'), {
    loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>,
});
const DynamicAboutBannerSection = dynamic(() => import('@components/About/AboutBannerSection'), {
    loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>,
  });
const DynamicAboutContantSection = dynamic(() => import('@components/About/AboutContantSection'), {
    loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
  })

  const DynamicFactsSection = dynamic(() => import('@components/Home/FactsSection'), {
    loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
  })
export default function service() {
  return (
    <>
      <DynamicContainerBlock>
        <DynamicAboutBannerSection />
        <DynamicAboutContantSection />
        <DynamicFactsSection />
      </DynamicContainerBlock>
    </>
  );
}
