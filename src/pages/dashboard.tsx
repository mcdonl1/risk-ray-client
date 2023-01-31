import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";
import DataEntryPanel from "./components/dataentrypanel";
import { useEffect, useRef, useState } from "react";


const Dashboard: NextPage = () => {

  return (
    <>
      <Head>
        <title>Risk Ray Dashboard</title>
        <meta name="description" content="Risk ray dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Header />
        <div className="flex flex-row container gap-12 px-4 py-6 text-white">
          <XrayDisplay />
          <DataEntryPanel />
        </div>
      </main>
    </>
  );
};

export default Dashboard;


function XrayDisplay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = new Image();
    image.src = "/xraysample.jpeg";
    const ctx = canvasRef.current?.getContext('2d');
    image.onload = () => ctx?.drawImage(image, 0, 0);
  }, [])


  return <canvas ref={canvasRef} className="w-7/12 h-[500px] rounded-md border-solid border-white border-2">

  </canvas>
}

