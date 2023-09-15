import { FC } from "react";
interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <main className="py-16 max-w-2xl mx-auto my-20">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold leading-relaxed">
          Synced's Tech Stack: How we're
          <br /> helping athletes get to the next level
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          I get a lot of people asking me the specific technologies we used to
          build Synced. I thought it would be great for other athletes who might
          also be engineers to read about our stack, and what problems we are
          trying to solve in the future.
        </p>
      </div>

      <section className="py-8 space-y-8">
        <h2 className="text-3xl font-semibold ">About the product</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          At Synced, we are driven to offer athletes and teams an all-in-one
          platform to help them get ahead of the competition. Our platform
          integrates features such as messaging, workout logging, feedback
          dashboards, and calendar workspaces to offer all your sporting needs
          into one efficient tool. These centralized featuers drive our product
          roadmap.
        </p>
      </section>

      <section className="py-8 space-y-6">
        <h2 className="text-3xl font-semibold "> Tech Stack</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          Our tech stack is modern and robust, we use Nextjs 13(app router),
          React, Typescript front end back, Mongodb, Prisma ORM. Nextjs API
          backend, Tailwind CSS and Pusher's realtime websockets.
        </p>
        <div className=" space-y-4">
          <h3 className="text-xl font-semibold ">Front End</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Reacts single page structure, along with Nextjs server side
            rendering, nested layouts, nested routes, and seamless deployment,
            to Vercel made it an easy decision for what to use for our ui
            framework. To keeo endless react components with Typescript
            organized, we followed a few best practices that worked for us:
            <br />
            <br />
            -Folder structure: Nextjs app router's file based routing and layout
            made it easier for us to keep everything organized. We have a
            seperate components folder in every route and nested route, for
            example, conversations, and [conversationId] (for rendering dynamic
            one on one chats and group chats). Following this architecutre
            throughout the app has helped us stay organized and dial in on
            whatever feature we're working on.
            <br />
            <br />
            -Rendering Performance: Due to Nextjs 13's server side rendering,
            image optimization, code splitting, and lazy loading, we have not
            had to put as much effort in optimizing performance. Due to this,
            our page loads are blazing fast, loading states are shown
            immediately. If we did all of this with plain React, it would have
            taken much longer. We also smartly used Reacts useMemo and
            useCallback hooks where they were needed, to reduce unnecesarry
            re-renders.
            <br />
            <br />
            In terms of data fetching, we use react query(with axios) to
            efficiently manage our loading states, errors, and callbacks. This
            has helped us manually write less useEffect hooks, and write less
            code than normally using fetch, useEffect, and writing an extra
            state variable for a loading state.
            <br />
            <br />
            For styling, we use Tailwind CSS all throughout, along with a few
            libraries. Tailwind gave us full customization with every component,
            along with helping us style our comoonents efficiently without
            having to constantly switch between CSS files. For libraries, we
            originally used Headless Ui for a few different components, mainly
            the modals, but a new component library called Shadcn/ui was a life
            saver, offering endless customizable components we used.
          </p>
        </div>
        <div className=" space-y-4">
          <h3 className="text-xl font-semibold ">Back End</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Our backend consists of Nextjs 13 api route handlers, Prisma,
            Pusher, and Mongodb. Prisma and Mongodb work exceptionally well
            together, while Mongodb traditionally does not support relations,
            prisma lets you add relations to your models. Our app has many
            connections between models, conversations to users, group chats to
            conversations, teams to their specific calender. The schema prisma
            enforces helps us keep integrity between all of them, while Mongodb
            helps us scale to any level we want.
            <br />
            <br />
            For our real time messaging, notifications, and events in our
            workspace calender, we use Pusher for bidirectional data between the
            client and server. With its vast comprehensive documentation, it has
            ben easy to implement. However, it is a paid service, and as the
            user base grows, we might consider another option.
          </p>
        </div>
        <br />
        <h2 className="text-3xl font-semibold ">Star us on Github!</h2>
        <p>
          Right now we are working on a feature for different athletes to be
          able to track their skill workouts, and have ai generate them feedback
          and plans. We are very excited. We plan to add many more features in
          the future, stay up to date with the progress on Github.
        </p>
        <p className="">
          https://github.com/Eshwar1212-maker/Sports-Sync/tree/development
        </p>
      </section>

      <section className="py-8 space-y-3"></section>
    </main>
  );
};

export default page;
