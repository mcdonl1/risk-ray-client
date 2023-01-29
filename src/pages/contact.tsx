import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";


const ContactUs: NextPage = () => {

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Header />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
          Contact us page
        </div>
      </main>
    </>
  );
};

export default ContactUs;

