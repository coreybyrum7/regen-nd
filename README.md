# Front End & Full Stack: Coding Challenge

# Project Description 🚀

This is a [Next.js](https://nextjs.org/) project bootstrapped with TypeScript. It uses CSS and SCSS modules for styling. It also uses Express and PostgreSQL, which were configured and provided before the challenge.

# Architectural Decisions 👨‍🚀

## NextJS ⚛️

NextJS is a powerful React framework with the perfect tools for completing this challenge.

NextJS 14 and the new App Router feature server components and streaming with suspense, both perfect tools for this challenge. Streaming optimized the user experience by seamlessly handling dependent requests.

## Routes 🗺️

With this implementation, data is fetched on the server and cached, which is the [default in NextJS](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data).

🆕 `/` \
While this route wasn't specifically requested, it seemed like a good idea to create a default route and not utilize a redirect. The page features a title and a link to all projects.

🆕 `/projects` \
While this route also wasn't specifically requested, I wanted to make the application feel closer to a real life scenario. This page display a list of all projects, selecting one will take you to that specific project page. Note, there is still currently only one project in the database.

A new endpoint was created in the server application to make this work.

`/projects/:project-id` \
This route exemplifies the super powers of NextJS by displaying high level project information prior to rendering the projects posts. The application utilizes the React Suspense boundary to display a Skeleton loader while the fetch request and its promise are completing.

At the top of this page, you'll notice a compentized button that utilizes the Regen Network brand colors. This button routes us back to the `/projects` page where you could then easily select another project.

### API Routes Added

`/` as previously mentioned \
`/projects` as previously mentioned \
`/post/:post-id` while not accessible via the application, the server route was added.

## UI 🎨

Not many components were created but the ones that were are placed in an atomic architecture. This architecture allows for two major positives, for both application productivity and developer experience.

One, we're optimizing for the future. Creating a component heirarchy that can scale. Readying ourselves for adaptations and inevitable updates. We can't stop change from happening but we can be optimized and prepared when it's time to scale.

Two, we're developing with our future selves in mind. Knowing that all types are in the types folder, all ui components are within the ui folder, allows us to focus on what we're currently implementing without gettings wires crossed. It also allows us to make atomic updates without creating downstream effects.

## Styles ⚡️

I'm a big fan of CSS pre-processors and SCSS has been my go-to over the past few years. With a modular approach, it's extremely powerful. We can create re-usable functionality while still writing flexible and isolated styled components.

---

# Running the Application 🏃

1. Copy the `.env.local` into your `.env` file.

2. Follow the README.md instructions in the `server` folder. The docker engine must be running before moving on. Query the local server to ensure connection, localhost:5000/projects.

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

</br>

## ⬇️ For reference, the challenge is displayed below.

</br>
</br>
</br>
</br>

# Provided Challenge - Data Stream Full-stack Code Challenge

A project like the ones on https://app.regen.network/projects can have a “Data Stream” consisting of one or more “Data Posts”.

This challenge consists of displaying the list of Data Posts for a project, using React and TypeScript.

The goal here is for us to get a basic understanding of how you code, so it's not meant to be very difficult. Ideally you shouldn't spend more than a few hours on it.

## Front-end

Write a React application that displays, for a particular project, the project name and its data feed of entry posts as a reverse chronological list. There are no explicit requirements for which fields you should include in this data feed view. Feel free to go with whatever you think makes the most sense!

We recommend picking one of the [React-powered frameworks](https://react.dev/learn/start-a-new-react-project) popular in the community, though it's also fine if you have a different preferred way of bootstrapping a project.

Ideally your submission should involve a component-based approach, and have a responsive layout (optimising for both mobile and web views).

## Back-end

Under the `server/` folder, we provide an Express app with 2 endpoints:

- GET `/projects/:projectId`: get project data by `projectId`
- GET `/projects/:projectId/posts?limit=x&offset=y`: get the list of posts by `projectId`

The data is stored in a seeded PostgreSQL database with one project with UUID `b7823232-81a9-4cd8-a3fc-63dda206d63f` and a few posts for this project.
Please, see instructions in `server/README.md` for running that locally.

**Optional task**: add an endpoint to get a single post by UUID.

## What we're looking for

With this challenge we're trying to get a sense of how you would architect a basic front-end application. We're not looking for anything visually innovative, but do appreciate clean design. That being said, this is a coding challenge, not a design challenge - so code readability, and clean architecture are the main things we will be paying attention to.

## Submission

For submission, please send us an email with a link to your project, ideally as a github repo. Oh, and don't forget to add a nice README.md so we know how to build & run it :)
