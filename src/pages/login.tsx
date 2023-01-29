import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";

const Login: NextPage = () => {

  return (
    <>
      <Head>
        <title>Risk Ray Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Header />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
          Login page
        </div>
      </main>
    </>
  );
};

export default Login;

