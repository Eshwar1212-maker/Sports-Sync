
"use client"

import { motion, useScroll, useSpring } from "framer-motion";
import { FC } from "react";


interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const { scrollYProgress } = useScroll();

  return (
    <main className="max-w-[340px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-2xl mx-auto my-[70px] lg:my-j40 bg-white text-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[75px] bg-blue-500 transform-origin-left"
        style={{ scaleX: scrollYProgress }}
   />
      <div>
      <div className="space-y-8">
        <h1 className="hidden sm:block text-3xl font-bold leading-relaxed text-black">
          Synced's Tech Stack: How we're
          <br /> helping athletes get to the next level
        </h1>
        <h1 className="text-3xl font-bold leading-relaxed sm:hidden">
          Synced's Tech Stack: How we're helping athletes get to the next level
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          I get a lot of people asking me the specific technologies we used to
          build Synced. I thought it would be great for other athletes who might
          also be engineers to read about our stack, and what problems we are
          trying to solve in the future.
        </p>
      </div>

      <section className="py-8 space-y-8">
        <h2 className="text-3xl font-semibold">About the product</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          At Synced, we are driven to offer athletes and teams an all-in-one
          platform to help them get ahead of the competition. Our platform
          integrates features such as messaging, workout logging, feedback
          dashboards, and calendar workspaces to offer all your sporting needs
          into one efficient tool. These centralized features drive our product
          roadmap.
        </p>
      </section>

      <section className="py-8 space-y-6">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          Our tech stack is modern and robust; we use Next.js 13 (app router),
          React, TypeScript for the front end, MongoDB, Prisma ORM, Next.js API
          backend, Tailwind CSS, Redis for caching, and Pusher's real-time websockets.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Front End</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            React's single-page structure, along with Next.js server-side
            rendering, nested layouts, nested routes, and seamless deployment to
            Vercel made it an easy decision for what to use for our UI
            framework. To keep endless React components with TypeScript
            organized, we followed a few best practices that worked for us:
            <br />
            <br />
            - Folder structure: Next.js app router's file-based routing and
            layout made it easier for us to keep everything organized. We have a
            separate components folder in every route and nested route, for
            example, conversations, and [conversationId] (for rendering dynamic
            one-on-one chats and group chats). We tried to put as little code as
            possible in higher level components. .Following this architecture
            throughout the app has helped us stay organized and dial in on
            whatever feature we're working on.
            <br />
            <br />
            - Rendering Performance: Due to Next.js 13's server-side rendering,
            image optimization, code splitting, and lazy loading, we have not
            had to put as much effort into optimizing performance. Due to this,
            our page loads are blazing fast, and loading states are shown
            immediately. If we did all of this with plain React, it would have
            taken much longer. We also smartly used React's useMemo and
            useCallback hooks where they were needed, to reduce unnecessary
            re-renders.
            <br />
            <br />
            In terms of data fetching, we use react-query (with axios) to
            efficiently manage our loading states, errors, and callbacks. This
            has helped us manually write fewer useEffect hooks, and write less
            code than normally using fetch, useEffect, and writing an extra
            state variable for a loading state.
            <br />
            <br />
            For styling, we use Tailwind CSS all throughout, along with a few
            libraries. Tailwind gave us full customization with every component,
            along with helping us style our components efficiently without
            having to constantly switch between CSS files. For libraries, we
            originally used Headless UI for a few different components, mainly
            the modals, but a new component library called Shadcn/ui was a life
            saver, offering endless customizable components we used.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Back End</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Our backend consists of Next.js 13 serverless API route handlers, Prisma,
            Pusher, and MongoDB. Prisma and MongoDB work exceptionally well
            together; while MongoDB traditionally does not support relations,
            Prisma lets you add relations to your models. Our app has many
            connections between models: conversations to users, group chats to
            conversations, teams to their specific calendar. The schema Prisma
            enforces helps us maintain integrity between all of them, while
            MongoDB helps us scale to any level we want.
            <br />
            <br />
            Another important technology we use to improve our app performance 
            is upstash/redis for caching database calls. We use this extensively 
            throughout the calender and workout log. We observed using it 
            decreased the page load of certain calls to our databse(like work
            space names, specific workout logs, etc) by more than 80 percent.
            <br />
            <br />

            For our real-time messaging, notifications, and events in our
            workspace calendar, we use Pusher for bidirectional data between the
            client and server. With its vast comprehensive documentation, it has
            been easy to implement. However, it is a paid service, and as the
            user base grows, we might consider another option.
          </p>
        </div>
        <br />
        <h2 className="text-3xl font-semibold">Star us on Github!</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          Right now we are working on a feature for different athletes to be
          able to track their skill workouts, and have AI generate them feedback
          and plans. We are very excited. We plan to add many more features in
          the future; stay up to date with the progress on Github.
        </p>
        <br />
        <a
          href="https://github.com/Eshwar1212-maker/Sports-Sync/tree/development"
          target="_blank"
        >
          https://github.com/Eshwar1212-maker/Sports-Sync/tree/development
        </a>
      </section>
      </div>
    </main>
  );
};

export default page;
