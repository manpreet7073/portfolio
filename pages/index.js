import dynamic from 'next/dynamic'
import Image from 'next/image';
const DynamicContainerBlock = dynamic(() => import('@components/ContainerBlock'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
});

const DynamicIndex = dynamic(() => import('@components/HomePage/Index'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
});

export default function Home({  }) {
  return (
    <DynamicContainerBlock>
         <DynamicIndex />
         {/* <Skills /> */}
    </DynamicContainerBlock>
  );
}