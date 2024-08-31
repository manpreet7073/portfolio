import React, { useState } from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";

const DynamicMaincont = dynamic(() => import('@components/Home/ServiceSection'), {
  loading: () => <>
  <div className="loader text-center">
  <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
</>
  });
export default function service() {
  return (
    <>
        <DynamicMaincont />
    </>
  );
}
