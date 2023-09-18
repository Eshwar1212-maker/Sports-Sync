"use client";

import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/navigation";


const plans = [
  {
    name: "My Calender",
    description:
      "Track your own practices, workouts, and weekly training routine, with a monthly, weekly, and daily view.",
    href: "userCalender",
  },
]
export default function CalenderOptions(userTeams: any) {
  const [calenders, setCalenders] = useState<any[]>([]);
  useEffect(() => {
    const teams = userTeams?.userTeams?.map((team: any) => {
      return team;
    });
    setCalenders(teams);
  }, []);


  const [selected, setSelected] = useState();
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="w-full px-4 mx-auto items-center flex flex-row justify-center lg:block space-y-3">
      {/* <ProModal isOpen={isProModalOpen} onClose={() => setIsProModalOpen(false)} /> */}
      <RadioGroup className="max-w-[447px]" value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan: any) => (
              <RadioGroup.Option
                onClick={() => {
                  if (plan.name === "My Calender") {
                    router.push(`/calender/${plan.href}`);
                  }else{
                    setIsProModalOpen(true)
                  }
                }}
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between space-y-5 mx-auto">
                      <div className="flex items-center">
                        <div className="text-[15px]">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium min-w-[200px]  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>

                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-50" : "text-gray-500"
                            }`}
                          >
                            <span className="hidden md:block">
                              {plan.description}
                            </span>{" "}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-sky-50">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      <div className=" w-full max-w-md">
      
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Calenders</RadioGroup.Label>
          <div className="space-y-2">
            {calenders?.map((calender: any) => (
              <RadioGroup.Option
                onClick={() => {
                  router.push(`/calender/${calender?.id}`);
                }}
                key={calender?.name}
                value={calender}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between space-y-5 mx-auto">
                      <div className="flex items-center">
                        <div className="text-[15px]">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Launch {calender?.title}
                          </RadioGroup.Label>

                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-50" : "text-gray-500"
                            }`}
                          >
                            <span className="">
                              {calender?.title} has {calender?.users?.length}{" "}
                              members:{" "}
                              {calender?.users
                                ?.map((user: any) => user.name)
                                .join(", ")}
                            </span>{" "}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-sky-50">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
