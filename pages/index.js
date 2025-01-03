import dynamic from 'next/dynamic'
import Image from 'next/image';
const DynamicIndex = dynamic(() => import('@components/HomePage/Index'), {
  loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
});

export default function Home({  }) {
  return (
         <DynamicIndex />
  );
}