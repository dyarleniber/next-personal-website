import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 text-gray-900 font-sans">{children}</div>
    </>
  );
}
