import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "../styles/post.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
