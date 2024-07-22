import React, { useState } from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";

const DynamicContainerBlock = dynamic(() => import('@components/ContainerBlock'), {
  loading: () => <>
  <div className="loader text-center">
  <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
</>
  });

const DynamicServiceblock = dynamic(() => import('@components/service/ServiceBanner'), {
  loading: () => <>
  <div className="loader text-center">
  <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
</>
  });
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
      <DynamicContainerBlock>
        <DynamicServiceblock />
        <DynamicMaincont />
      </DynamicContainerBlock>
    </>
  );
}
