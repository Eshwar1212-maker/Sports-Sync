import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="max-w-[340px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-2xl mx-auto my-[70px] lg:my-j40 bg-white text-black">
            <div className="space-y-8">
        <h1 className=" text-3xl font-bold leading-relaxed">
          How to start using Synced
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
         Every user should first finish customizing their profile, with their name, image, and bio. This way
         you can find your friends easily, and people will know who you are. You will get notifications for 
         when your friend invites you to a group chat or team.
        </p>
      </div>
      <section className="py-8 space-y-8">
        <h2 className="text-3xl font-semibold">For Athletes</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          Our workout log lets you log workouts for different days, and lets you
          come back to them whenever you want. As you log your exercises, your
          dashboard will get filled up with how many exercises you completed
          each month, along with the number of days you worked out each month.
          Over the course of months, you can judge whether your current program
          is sufficient for you, or if it is to intense.
          <br /> <br />
          You can also add any workout from your log to your personal calender.
          We recommend adding any event related to your sport, such as
          practices, games, different types of workouts, meetings, etc.
        </p>
      </section>

      <section className="py-8 space-y-6">
        <h2 className="text-3xl font-semibold">For Teams</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          Our private group chats, and calenders are a key featuere for you and
          your team. Coaches, trainers, or anyone can create a new team, invite
          their players, and add events private to that team for everyone to
          see. mod priveledges are also customizable. Every calender will also
          accordingly get a private group chat, and new events will be shown as
          messages.
          <br /> <br />
          Our calender is also encouraged to be utilized by workout partners to
          track any upcoming workouts.
        </p>
        <br />
      </section>

      <section className="py-8 space-y-3"></section>
    </main>
  );
};

export default page;
