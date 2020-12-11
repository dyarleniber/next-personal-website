import Head from "next/head";
import Layout from "../../components/layout";
import PostSection from "../../components/post";
import api from "../../services/devApi";
import devConfig from "../../config/dev";

export default function Post({ postData, name }) {
  return (
    <Layout blog name={name}>
      <Head>
        <title>{postData.title}</title>
        <meta name="author" content={name} />
        <meta name="description" content={postData.description} />
        <meta name="keywords" content={postData.tag_list} />

        {/* Schema.org markup for Google+ */}
        <meta itemprop="name" content={postData.title} />
        <meta itemprop="description" content={postData.description} />
        <meta itemprop="image" content={postData.social_image} />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.description} />
        <meta name="twitter:image:src" content={postData.social_image} />

        {/* Open Graph data */}
        <meta property="og:title" content={postData.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={postData.social_image} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:site_name" content={name} />
        <meta
          property="article:published_time"
          content={postData.published_at}
        />
        <meta property="article:modified_time" content={postData.edited_at} />
        <meta property="article:tag" content={postData.tag_list} />

        {/* Open Graph data */}
        <meta property="og:title" content={postData.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={postData.description} />
        <meta property="og:site_name" content={name} />
        <meta property="og:image" content={postData.social_image} />
      </Head>
      <PostSection data={postData} />
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

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const name = "Dyarlen Iber";
  const response = await api.get(`/articles/${params.id}`);

  return { props: { postData: response.data, name } };
}
