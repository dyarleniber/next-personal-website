import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Contact from "../components/contact";
import personalDataConfig from "../config/personalData";
import api from "../services/githubApi";

export default function Home({ name, email, bio, location, socialmedia }) {
  return (
    <Layout name={name}>
      <Head>
        <title>{name}</title>
        <meta name="author" content={name} />
        <meta name="description" content={bio} />

        {/* Schema.org markup for Google+ */}
        <meta itemProp="name" content={name} />
        <meta itemProp="description" content={bio} />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={bio} />

        {/* Open Graph data */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={bio} />
        <meta property="og:site_name" content={name} />
      </Head>
      <Hero
        name={name}
        email={email}
        bio={bio}
        location={location}
        socialmedia={socialmedia}
      />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const { name, email, socialmedia, githubuser } = personalDataConfig;

  const response = await api.get(`/users/${githubuser}`);
  const { bio, location } = response.data;

  return {
    props: { name, email, bio, location, socialmedia },
  };
}
