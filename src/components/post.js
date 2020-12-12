import Link from "next/link";
import Date from "../components/date";

export default function Post({ data }) {
  return (
    <article className="mx-auto p-8 max-w-5xl overflow-auto">
      <Date
        className="text-base text-gray-700"
        dateString={data.published_at}
      />
      {data.edited_at && (
        <div className="text-xs text-gray-700">
          <p className="inline">Updated on </p>
          <Date dateString={data.edited_at} />
        </div>
      )}
      <h1 className="mt-4 text-3xl">{data.title}</h1>
      <img
        className="mt-4 w-full"
        src={data.cover_image}
        alt="Article cover image"
      />
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: data.body_html }}
      />
      <Link href="/blog">
        <a className="block my-4">← Back to blog</a>
      </Link>
    </article>
  );
}
