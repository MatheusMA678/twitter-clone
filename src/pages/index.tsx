import { type NextPage } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone using NextJS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${inter.className} grid min-h-screen grid-cols-[20rem_auto_28rem] dark:bg-black dark:text-gray-200`}
      >
        <section className="border-r border-gray-800"></section>
        <section className="relative">
          <header className="sticky flex flex-col gap-6 border-b border-gray-800 p-4 backdrop-blur-md">
            <h1 className="text-xl font-bold">Página Inicial</h1>
            <div className="flex items-center justify-around">
              <h2 className="font-semibold">Para você</h2>
              <h2 className="font-semibold">Seguindo</h2>
            </div>
          </header>
          <div className="h-[1000px]">
            <h1 className="text-2xl font-bold">Teste</h1>
          </div>
        </section>
        <section className="border-l border-gray-800"></section>
      </main>
    </>
  );
};

export default Home;
