import Image from "next/image";
import React from "react";

const AboutTwo = () => {

    return (
        <div className="w-full py-10 px-4">
            <div
                className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4"
            >
                <div>
                    <Image
                        alt="Basketball Practice"
                        width={458}
                        height={498}
                        src="https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/2775/react-chartjs.jpg"
                    />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <header>
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                            Let us track your workouts
                        </h1>
                    </header>
                    <p className="md:w-full sm:text-base text-sm">
                        Let us make it easier for you when it comes to tracking. Use our calender for both skill workouts, and weight lifting
                        workouts, where you can track your progress over months to see if you are improving in your
                        games and practices, and then navigate to your profile page to see what months you workout the most,
                        so you can see whether your program needs to be adjusted based off of your perfomance on the court or in the gym.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutTwo;
