import React, { useState } from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";

const DynamicAboutContantSection = dynamic(() => import('@components/About/AboutContantSection'), {
  loading: () => <>
  <div className="loader text-center">
  <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
</>
  })

  const DynamicFactsSection = dynamic(() => import('@components/Home/FactsSection'), {
    loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
  })
export default function service() {
  return (
    <>
        <DynamicAboutContantSection />
        <DynamicFactsSection />
    </>
  );
}
