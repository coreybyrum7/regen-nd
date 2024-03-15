# Front End & Full Stack: Coding Challenge

# Project Description 🚀

This is a [Next.js](https://nextjs.org/) project bootstrapped with TypeScript. It uses CSS and SCSS modules for styling. It also uses Express and PostgreSQL, which were configured and provided before the challenge.

# Architectural Decisions 👨‍🚀

## NextJS ⚛️

NextJS is a powerful React framework with the perfect tools for completing this challenge.

NextJS 14 and the App Router feature server components and streaming with suspense, both perfect tools for this challenge. Streaming optimizes the user experience by seamlessly handling dependent requests.

## Routes 🗺️

With this implementation, data is fetched on the server and cached, which is the [default in NextJS](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data).

🆕 `/` \
While this route wasn't specifically requested, it seemed like a good idea to create a default route and not utilize a redirect. The page features a title and a link to all projects. Note, there's still only one project in the database.

🆕 `/projects` \
While this route also wasn't specifically requested, I wanted to make the application feel like a real life scenario. This page display a list of all projects, selecting one will take you to that specific project page.

A new endpoint was created in the server application to make this work.

`/projects/:project-id` \
This route exemplifies the super powers of NextJS by displaying high level project information prior to rendering the projects posts. The application utilizes the React Suspense boundary to display a skeleton loader while the fetch request and its promise are completing.

At the top of this page, you'll notice a componentized button that utilizes the Regen Network brand colors. This button routes back to the `/projects` page where you can then select another project.

### API Routes Added

`/` as previously mentioned \
`/projects` as previously mentioned \
`/post/:post-id` while not accessible via the application, the server route was added.

## UI 🎨

Not many components were created but the ones that were are placed in an atomic architecture. This architecture allows for two major positives, application productivity and a positive developer experience.

One, we're optimizing for the future. Creating a component heirarchy that can scale. Readying ourselves for adaptations and inevitable updates. We can't stop change from happening but we can be optimized and prepared when it's time to scale.

Two, we're developing with our future selves in mind. Knowing that all types are in the types folder, all ui components are within the ui folder, we can focus on what we're currently implementing without gettings wires crossed. It also allows atomic updates to happen without creating downstream effects.

## Styles ⚡️

I'm a big fan of CSS pre-processors and SCSS has been my go-to over the past few years. With a modular approach, it's extremely powerful. We can create re-usable functionality while still writing flexible and isolated styled components.

---

# Running the Application 🏃

1. Copy the `.env.local` into your `.env` file.

2. Follow the README.md instructions in the `server` folder. The node server must be running.

3. From within the `next-js` folder, install the project dependencies:

```bash
npm run install
# or
yarn install
# or
pnpm install
# or
bun install
```

4. Build the application:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

5. Finally, start the application:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the results.

To simulate a poor network, you can utilize the `wait` method provided in the app or your browser configurations.
