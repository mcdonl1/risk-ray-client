import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "./components/header";
import { useState } from "react";


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
  return <Image
    className="w-7/12 h-[500px] rounded-md border-solid border-white border-2"
    src="/xraysample.jpeg"
    alt="X-ray Image"
    width="100"
    height="100"
  />
}

function DataEntryPanel() {
  const [leftChecked, setLeftChecked] = useState(false);
  const [rightChecked, setRightChecked] = useState(false);
  const [cropLeft, setCropLeft] = useState(false);
  const [cropRight, setCropRight] = useState(false);
  return <div
    className="w-5/12 h-[500px] border-2 flex flex-col items-center justify-around border-white rounded-md py-4 px-3"
  >
    <div id="left-hip-controls" className="flex flex-row w-full justify-around">
      <div id="control-col" className="flex flex-col items-left justify-between w-7/12">
        <h2 className="text-xl font-semibold">Left</h2>
        <span className="w-full flex items-center">
          <label htmlFor="left-control-checkbox" className="text-lg mr-4  text-purple-300">Control</label>
          <input 
            id="left-control-checkbox"
            type="checkbox"
            checked={leftChecked}
            onChange={event => setLeftChecked(event.target.checked)}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </span>
        <input
          type="button"
          value="Crop"
          className={
            (!cropLeft
              ? "bg-transparent hover:bg-purple-700 text-purple-300 hover:text-white  border-purple-500 hover:border-transparent"
              : "bg-purple-700 text-white border-transparent"
            ) + " rounded w-2/3 py-2 px-4 border font-semibold"
          }
          onClick={() => {
            setCropLeft(!cropLeft)
          }}
        />
      </div>
      <div id="preview-col" className="w-[150px] h-[150px] bg-slate-300 flex justify-center items-center text-slate-600 border border-purple-500 rounded">Preview</div>
    </div>
    <div  id="right-hip-controls" className="flex flex-row w-full justify-around">
      <div id="control-col" className="flex flex-col items-right justify-between w-7/12">
        <h2 className="text-xl font-semibold">Right</h2>
        <span className="w-full flex items-center">
          <label htmlFor="right-control-checkbox" className="text-lg mr-4  text-purple-300">Control</label>
          <input 
            id="right-control-checkbox"
            type="checkbox"
            checked={rightChecked}
            onChange={event => setRightChecked(event.target.checked)}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </span>
        <input
          type="button"
          value="Crop"
          className={
            (!cropRight
              ? "bg-transparent hover:bg-purple-700 text-purple-300 hover:text-white  border-purple-500 hover:border-transparent"
              : "bg-purple-700 text-white border-transparent"
            ) + " rounded w-2/3 py-2 px-4 border font-semibold"
          }
          onClick={() => {
            setCropRight(!cropRight)
          }}
        />
      </div>
      <div id="preview-col" className="w-[150px] h-[150px] bg-slate-300 flex justify-center items-center text-slate-600 border border-purple-500 rounded">Preview</div>
    </div>
  </div>;
}