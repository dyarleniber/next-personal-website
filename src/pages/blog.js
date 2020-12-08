import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import BlogSection from "../components/blog";
import Footer from "../components/footer";

export default function Blog({ name, description, devUsername }) {
  return (
    <Layout>
      <Head>
        <meta name="author" content={name} />
        <meta name="description" content={description} />
        <title>{name}</title>
      </Head>
      <Navbar blog name={name} />
      <BlogSection username={devUsername} />
      <Footer name={name} />
    </Layout>
  );
}

export function getStaticProps() {
  const name = "Dyarlen Iber";
  const description =
    "Full Stack Developer with 5+ years of hands-on experience in web development.";
  const devUsername = "dyarleniber";

  return {
    props: { name, description, devUsername },
  };
}
