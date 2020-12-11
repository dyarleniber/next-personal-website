import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children, blog, name }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar blog={blog} name={name} />
      <main className="bg-gray-100 text-gray-900 font-sans">{children}</main>
      <Footer name={name} />
    </>
  );
}
