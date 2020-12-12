const config = {
  name: process.env.NEXT_PUBLIC_NAME,
  email: process.env.NEXT_PUBLIC_EMAIL,
  githubuser: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
  devuser: process.env.NEXT_PUBLIC_DEV_USERNAME,
  socialmedia: [
    {
      name: "github",
      url: process.env.NEXT_PUBLIC_GITHUB_URL,
      iconpath: "/images/icons/github.svg",
    },
    {
      name: "dev",
      url: process.env.NEXT_PUBLIC_DEV_URL,
      iconpath: "/images/icons/dev.svg",
    },
    {
      name: "linkedin",
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      iconpath: "/images/icons/linkedin.svg",
    },
    {
      name: "instagram",
      url: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      iconpath: "/images/icons/instagram.svg",
    },
    {
      name: "freecodecamp",
      url: process.env.NEXT_PUBLIC_FREECODECAMP_URL,
      iconpath: "/images/icons/freecodecamp.svg",
    },
    {
      name: "hackerrank",
      url: process.env.NEXT_PUBLIC_HACKERRANK_URL,
      iconpath: "/images/icons/hackerrank.svg",
    },
  ],
};

export default config;
