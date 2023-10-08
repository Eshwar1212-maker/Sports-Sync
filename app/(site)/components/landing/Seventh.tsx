"use client";

import { FC } from "react";
import { useRef } from "react";
import one from "../../../assets/testimonialone.jpg";
import two from "../../../assets/testimonialtwo.jpg.jpg";
import three from "../../../assets/testimonialthree.jpg";
import four from "../../../assets/testimonialfour.jpg";
import five from "../../../assets/testimonialfive.jpg";
import six from "../../../assets/testimonialsix.jpg";
import Image from "next/image";
interface SeventhProps {}
const Seventh: FC<SeventhProps> = ({}) => {
  const ref = useRef(null);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="mx-auto flex justify-center bg-white py-10"
    >
      <ul
        ref={ref}
        className="always-show-scrollbar overflow-x-scroll overflow-y-hidden w-full md:h-[680px] md:w-[1100px] flex rounded-lg px-1 py-3 pb-5 mx-auto"
      >
        <li className="flex flex-col gap-2">
          <Image alt="Testimonial" src={one} width={340} height={340} />
          <p className="text-[13px] w-[380px] px-6">
            Me and my friends used Synced throughout the whole summer to train
            for the upcoming track season. It helped us schedule our routine in
            a shared calendar, track our progressions, stay in touch, and more.
          </p>
          <p className="font-bold text-md text-center">Arana Myles</p>
        </li>

        <li className="flex flex-col gap-2">
          <Image alt="Testimonial" src={three} width={340} height={340} />
          <p className="text-[13px] w-[380px] px-6">
            As a coach I was really looking for a platform where I can stay in
            contact with my swim team, plan our workouts, and have them share me
            their progressions.
          </p>
          <p className="font-bold text-md text-center py-[21px]">
            Thomas Fletcher
          </p>
        </li>

        <li className="flex flex-col gap-2">
          <Image alt="Testimonial" src={two} width={340} height={340} />
          <p className="text-[13px] w-[380px] px-6">
            There werent that many apps I found that had a calendar along with a
            workout log tracking all of my exercises. Synced keeps me as
            disciplined as possible.
          </p>
          <p className="font-bold text-md text-center py-[4px]">Adrian Brown</p>
        </li>
        <li className="flex flex-col gap-2">
          <Image alt="Testimonial" src={four} width={340} height={340} />
          <p className="text-[13px] w-[380px] px-6">
            I really loved how Synced immediately notified me every time I hit a
            PR. There isnt a better app out there for me to use to balance my
            heavy work schedule, along with my sports and fitness hobbies.
          </p>
          <p className="font-bold text-md text-center">Michael Lown</p>
        </li>
        <li className="flex flex-col gap-2">
          <Image alt="Testimonial" src={five} width={340} height={340} />
          <p className="text-[13px] w-[380px] px-6">
            Synced gave me no excuses to go to the court and practice. Me and my
            league share a private calendar and group chat to schedule our
            games, workouts, and more.
          </p>
          <p className="font-bold text-md text-center">Orion Philips</p>
        </li>
        <li className="flex flex-col gap-2">
          <Image alt="Testimonial" src={six} width={340} height={340} />
          <p className="text-[13px] w-[380px] px-6">
            Recovering from my acl tear was one of the hardest things I ever had
            to go through. Synced not only helped me plan my rehab, and future
            goals, but visualize them, and help me come back stronger.
          </p>
          <p className="font-bold text-md text-center">Kylie Philips</p>
        </li>
      </ul>
    </div>
  );
};

export default Seventh;
