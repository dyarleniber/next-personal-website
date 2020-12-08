import { useRouter } from "next/router";
import Date from "../components/date";

export default function Post({ data }) {
  const router = useRouter();
  return (
    <article className="mx-auto p-8 max-w-5xl">
      <Date
        className="text-base text-gray-700"
        dateString={data.published_at}
      />
      {data.edited_at && (
        <div className="inline text-sm text-gray-700">
          <span> (</span>
          <p className="inline">Updated on </p>
          <Date dateString={data.edited_at} />
          <span>) </span>
        </div>
      )}
      <h1 className="mt-4 text-3xl">{data.title}</h1>
      <img className="mt-4 w-full" src={data.cover_image} />
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: data.body_html }}
      />
      <hr />
      <span
        className="block my-4 text-sm text-gray-700 cursor-pointer"
        onClick={() => router.back()}
      >
        Click here to go back
      </span>
    </article>
  );
}
