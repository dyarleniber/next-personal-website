import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Contact from "../components/contact";

export default function Home({
  name,
  heading,
  description,
  location,
  email,
  socialmedialinks,
}) {
  return (
    <Layout name={name}>
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
      <Hero
        heading={heading}
        description={description}
        location={location}
        email={email}
        socialmedialinks={socialmedialinks}
      />
      <Contact />
    </Layout>
  );
}

export function getStaticProps() {
  const name = "Dyarlen Iber";
  const heading = `Hi, I'm ${name}`;
  const description =
    "Full Stack Developer with 5+ years of hands-on experience in web development.";
  const location = "Dublin, Ireland";
  const email = "dyarlen1@gmail.com";
  const socialmedialinks = [
    {
      name: "github",
      icon: "/images/icons/github.svg",
      url: "https://github.com/dyarleniber",
    },
    {
      name: "dev",
      icon: "/images/icons/dev.svg",
      url: "https://dev.to/dyarleniber",
    },
    {
      name: "linkedin",
      icon: "/images/icons/linkedin.svg",
      url: "https://www.linkedin.com/in/dyarleniber",
    },
    {
      name: "instagram",
      icon: "/images/icons/instagram.svg",
      url: "https://www.instagram.com/dyarleniber",
    },
    {
      name: "freecodecamp",
      icon: "/images/icons/freecodecamp.svg",
      url: "https://www.freecodecamp.org/dyarleniber",
    },
    {
      name: "hackerrank",
      icon: "/images/icons/hackerrank.svg",
      url: "https://www.hackerrank.com/dyarleniber",
    },
  ];

  return {
    props: { name, heading, description, location, email, socialmedialinks },
  };
}
