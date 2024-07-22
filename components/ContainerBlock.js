import { useState, useEffect } from 'react';
import Head from "next/head";
import Script from 'next/script';
import { useRouter } from "next/router";
import { BiSolidUpvote } from "react-icons/bi";


import dynamic from 'next/dynamic'
const DynamicHeader = dynamic(() => import('./core/Header'), {
  loading: () => <><svg className="bird" viewBox="0 0 100 100">
  <path d="M15 20 L30 5 L50 20 L70 5 L85 20 L60 40 L40 60 L20 40 Z" />
  <g className="triangles">
    <path d="M20 20 L10 15 L15 10 Z" />
    <path d="M30 30 L25 20 L35 25 Z" />
    <path d="M45 35 L40 25 L50 30 Z" />
    <path d="M60 40 L55 30 L65 35 Z" />
    <path d="M75 45 L70 35 L80 40 Z" />
    <path d="M50 50 L45 40 L55 45 Z" />
    <path d="M30 60 L25 50 L35 55 Z" />
    <path d="M10 70 L5 60 L15 65 Z" />
  </g>
</svg>
</>,
});
const DynamicFooter = dynamic(() => import('./core/Footer'), {
  loading: () => <><svg className="bird" viewBox="0 0 100 100">
  <path d="M15 20 L30 5 L50 20 L70 5 L85 20 L60 40 L40 60 L20 40 Z" />
  <g className="triangles">
    <path d="M20 20 L10 15 L15 10 Z" />
    <path d="M30 30 L25 20 L35 25 Z" />
    <path d="M45 35 L40 25 L50 30 Z" />
    <path d="M60 40 L55 30 L65 35 Z" />
    <path d="M75 45 L70 35 L80 40 Z" />
    <path d="M50 50 L45 40 L55 45 Z" />
    <path d="M30 60 L25 50 L35 55 Z" />
    <path d="M10 70 L5 60 L15 65 Z" />
  </g>
</svg>
</>,
});
export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const meta = {
    title: "Rayonweb solutions",
    description: "Rayonweb Solutions: Your trusted partner for innovative web development, design, and digital marketing services. Enhance your online presence with our expert solutions.",
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta.title}</title>
      </Head>
      <main className="">
        <DynamicHeader />
        <div>{children}</div>
        <DynamicFooter />
        <div className="back-to-top-btn" style={{ display: showBtn ? 'block' : 'none' }}>
        <BiSolidUpvote className='active' size={50} onClick={handleClick}/>
    </div>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" />
    </div>
  );
}
