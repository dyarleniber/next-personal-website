import Head from "next/head";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import PostSection from "../../components/post";
import Footer from "../../components/footer";
import api from "../../services/devApi";
import devConfig from "../../config/dev";

export default function Post({ postData, name }) {
  return (
    <Layout>
      <Head>
        <meta name="author" content={name} />
        <meta name="description" content={postData.description} />
        <title>{postData.title}</title>
        <meta property="og:image" content={postData.social_image} />
        <meta name="og:title" content={postData.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar blog name={name} />
      <PostSection data={postData} />
      <Footer name={name} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const devUsername = "dyarleniber";
  const { buildperpage: perpage } = devConfig;
  const response = await api.get(
    `/articles?username=${devUsername}&page=${1}&per_page=${perpage}`
  );

  const paths = response.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const name = "Dyarlen Iber";
  const response = await api.get(`/articles/${params.id}`);

  return { props: { postData: response.data, name } };
}
