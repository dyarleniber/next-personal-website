import Head from "next/head";
import Layout from "../components/layout";
import BlogSection from "../components/blog";

export default function Blog({ name, description, devUsername }) {
  return (
    <Layout blog name={name}>
      <Head>
        <title>{name}</title>
        <meta name="author" content={name} />
        <meta name="description" content={description} />

        {/* Schema.org markup for Google+ */}
        <meta itemprop="name" content={name} />
        <meta itemprop="description" content={description} />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={description} />

        {/* Open Graph data */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={name} />
      </Head>
      <BlogSection username={devUsername} />
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
