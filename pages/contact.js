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
const DynamicContactBanner = dynamic(() => import('@components/contact/ContactBanner'), {
  loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
});
const DynamicContactContant = dynamic(() => import('@components/contact/ContactContant'), {
  loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
});
export default function Contact() {
  return (
    <>
      <DynamicContainerBlock>
        <DynamicContactBanner />
        <DynamicContactContant />
      </DynamicContainerBlock>
    </>
  );
}
