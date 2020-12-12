import Head from "next/head";
import Layout from "../components/layout";
import BlogSection from "../components/blog";
import personalDataConfig from "../config/personalData";

export default function Blog({ name, devuser }) {
  return (
    <Layout blog name={name}>
      <Head>
        <title>{name}</title>
        <meta name="author" content={name} />
        <meta name="description" content={`${name} blog`} />

        {/* Schema.org markup for Google+ */}
        <meta itemProp="name" content={name} />
        <meta itemProp="description" content={`${name} blog`} />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={`${name} blog`} />

        {/* Open Graph data */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={`${name} blog`} />
        <meta property="og:site_name" content={name} />
      </Head>
      <BlogSection username={devuser} />
    </Layout>
  );
}

export function getStaticProps() {
  const { name, devuser } = personalDataConfig;

  return {
    props: { name, devuser },
  };
}
