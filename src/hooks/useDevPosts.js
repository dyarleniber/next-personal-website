import { useSWRInfinite } from "swr";
import devApi from "../services/devApi";
import devConfig from "../config/dev";

const getKey = (pageIndex, previousPageData, username, perpage) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/articles?username=${username}&page=${
    pageIndex + 1
  }&per_page=${perpage}`;
};

const fetcher = async (url) => {
  const response = await devApi.get(url);
  return response.data;
};

export default function useDevPosts(username) {
  const { data, error, isValidating, size, setSize, mutate } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, username, devConfig.perpage),
    fetcher
  );

  const posts = data ? [].concat(...data) : [];
  const isLoading = !error && !data;
  const isError = error;
  const isEmpty = data?.[0]?.length === 0;
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < devConfig.perpage);

  return {
    posts,
    isLoading,
    isError,
    isValidating,
    size,
    setSize,
    mutate,
    isEmpty,
    isLoadingMore,
    isReachingEnd,
  };
}
