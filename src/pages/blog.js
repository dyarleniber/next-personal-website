import Head from "next/head";
import Layout from "../components/layout";
import BlogSection from "../components/blog";

export default function Blog({ name, description, devUsername }) {
  return (
    <Layout blog name={name}>
      <Head>
        <meta name="author" content={name} />
        <meta name="description" content={description} />
        <title>{name}</title>
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
