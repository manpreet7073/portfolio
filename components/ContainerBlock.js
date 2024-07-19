import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./core/Header";
import Footer from "./core/Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

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
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
      </Head>
      <main className="">
        <Header />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
