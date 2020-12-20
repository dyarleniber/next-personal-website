<h1 align="center">
  Next.js Personal website
</h1>

<p align="center">
  :computer: Personal website using JavaScript, Next.js, React, SWR, Tailwind CSS, Jest and React Testing Library.
</p>

<p align="center">
  <a href="https://vercel.com">
    <img src="./public/powered-by-vercel.svg" alt="Powered by Vercel">
  </a>
</p>

<p align="center">
  <a href="https://github.com/dyarleniber/next-personal-website/actions?query=workflow%3ACI">
    <img alt="CI" src="https://github.com/dyarleniber/next-personal-website/workflows/CI/badge.svg">
  </a>
  <a href="https://codecov.io/gh/dyarleniber/next-personal-website">
    <img alt="Coverage" src="https://img.shields.io/codecov/c/github/dyarleniber/next-personal-website">
  </a>
  <a href="https://github.com/dyarleniber/next-personal-website/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/dyarleniber/next-personal-website">
  </a>
</p>

<p align="center">
  <a href="https://next-personal-website-five.vercel.app">Live Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-configuration">Configuration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

Personal website buit with [Next.js](https://nextjs.org), [React](https://reactjs.org) and [Tailwind CSS](https://tailwindcss.com) utility-first framework.

Acceptance criteria defined for each route:

Route | Description
--- | ---
`/` | Users should be able to see my personal information (name, brief description, current location, email and the links of my social networks) and send me a message.
`/blog` | Users should be able to see all my posts.
`/posts/[slug]` | Users should be able to see a full blog post.

The home page will be pre-rendered at build time using data from [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest). Some blog posts will also be pre-rendered at build time. However, new posts will be rendered as users request them. All blog data comes from [DEV Community API](https://docs.dev.to/api).

> All of these pages are configured to perform re-generation after a few seconds. Learn more in the Next.js documentation, on [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration).

The list of the latest blog posts is fetched using the [SWR](https://swr.vercel.app/) library. Which performs a HTTP cache invalidation strategy. This means that first the component will return the data from cache (stale), then it will send the fetch request (revalidate), and finally, it will come with the up-to-date data. In this way, the data will be updated constantly and automatically.

An additional API endpoint (`/api/contact`) has been created to handle sending emails from the contact form. The SMTP Service provided by [SendGrid](https://sendgrid.com/) was used for this purpose.

> An integration with Google Tag Manager was also implemented. This can be used to manage measurement and marketing optimization JavaScript tags (such as the Google Analytics tag).

The code base is covered by automated tests with [Jest](https://jestjs.io) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). React Testing Library is a lightweight solution for testing React components. When testing with it, we render our React components and then assert on the output. Since we test the user behaviour, we can refactor implementation without touching our tests.

The website is hosted on [Vercel](https://vercel.com). And a CI workflow created on [GitHub Actions](https://github.com/features/actions) is responsible for automatically test the source code, generate a coverage report and upload it on [Codecov](https://codecov.io). All these jobs are activated by a push or pull request event on main branch.

## :gear: Configuration

To clone and run this application, you’ll need to have [Git](https://git-scm.com) and [Node.js](https://nodejs.org) installed on your computer.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dyarleniber/next-personal-website.git

# Go into the repository folder
$ cd next-personal-website

# Install dependencies
$ npm install

# Run the app in the development mode (open http://localhost:3000 to view it in the browser)
$ npm run dev
```

To run the tests, run the following command:

```bash
$ npm run test
```

For more information about the deploy process, access the [Vercel website](https://vercel.com).

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/dyarleniber/next-personal-website/blob/main/LICENSE) for more information.

---

Made with ♥ by Dyarlen Iber :wave: [Get in touch!](https://dyarleniber.com)
