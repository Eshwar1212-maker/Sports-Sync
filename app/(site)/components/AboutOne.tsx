import Image from "next/image";
import React from "react";

const AboutOne = () => {

  return (
    <div className="w-full py-10 px-4 bg-black text-neutral-50">
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4"
      >
        <div>
          <Image 
            alt="Basketball Practice" 
            width={448} 
            height={348} 
            src="https://blog.drdishbasketball.com/hubfs/basketball%20practice.jpg"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <header>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold m-0">
              Community that will keep each other going
            </h1>
          </header>
          <p className="md:w-full sm:text-base text-sm">
            Create private group chats with either your team so you can stay in
            contact with each other throughout your games and practices, or just
            your friends that you play pickup with! Join our forums, so you can
            talk with other hoopers about whatever is on your mind about basketball, whether
            you're struggling through a slump, or want to share an accomplishment, there's always
            someone who will listen!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
