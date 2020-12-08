import Link from "next/link";
import styles from "./blog.module.css";
import useDevPosts from "../hooks/useDevPosts";
import Loading from "../components/loading";
import Date from "../components/date";

export default function Blog({ username }) {
  const {
    posts,
    isLoading,
    isError,
    setSize,
    isEmpty,
    isLoadingMore,
    isReachingEnd,
  } = useDevPosts(username);

  if (isError || isEmpty) {
    return (
      <section id="blog" className="mx-auto p-8 max-w-5xl h-screen">
        <h1 className="text-center text-base">No records found.</h1>
      </section>
    );
  }

  return (
    <section id="blog" className="mx-auto p-8 max-w-5xl">
      <h1 className="text-xl sm:text-2xl">Latest posts</h1>
      <div className={`${styles.gridwrapper}`}>
        {isLoading
          ? [...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse p-4 rounded-sm shadow-md">
                <div className="w-full h-16 bg-gray-300 rounded"></div>
                <div className="mt-2 w-full h-2 bg-gray-300"></div>
                <div className="mt-1 w-full h-2 bg-gray-300"></div>
                <div className="mt-1 w-full h-2 bg-gray-300"></div>
                <div className="mt-2 w-full h-2 bg-gray-300"></div>
                <div className="mt-1 w-full h-2 bg-gray-300"></div>
                <div className="mt-1 w-full h-2 bg-gray-300"></div>
              </div>
            ))
          : posts.map((post, i) => (
              <Link key={`${i}_${post.id}`} href={`/posts/${post.id}`}>
                <a className="bg-white rounded-sm shadow-md hover:shadow-2xl transition duration-500 ease-in-out hover:border border-gray-300">
                  {post.cover_image && (
                    <img
                      className="w-full"
                      src={post.cover_image}
                      alt={post.title}
                    />
                  )}
                  <div className="flex flex-col justify-between">
                    <div class="px-6 py-4">
                      <p className="font-bold text-xl">{post.title}</p>
                      <p className="mt-1 text-base">{post.description}</p>
                      <p className="mt-2 text-sm text-right">
                        <Date dateString={post.published_at} />
                      </p>
                    </div>
                    <div class="px-6 py-4">
                      {post.tag_list &&
                        post.tag_list.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block text-sm font-bold mr-4"
                          >
                            {`#${tag}`}
                          </span>
                        ))}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
      </div>
      {isLoadingMore && (
        <button
          type="button"
          className="block mt-8 mx-auto bg-gray-100 font-semibold text-base py-3 px-6 rounded-md shadow-lg focus:outline-none cursor-not-allowed"
          disabled={true}
        >
          <Loading />
        </button>
      )}
      {!isLoadingMore && !isReachingEnd && (
        <button
          type="button"
          onClick={() => setSize((size) => size + 1)}
          className="block mt-8 mx-auto transition duration-500 ease-in-out transform hover:scale-110 bg-gray-100 font-semibold text-base py-3 px-6 rounded-md shadow-lg focus:outline-none"
        >
          Load more
        </button>
      )}
    </section>
  );
}
