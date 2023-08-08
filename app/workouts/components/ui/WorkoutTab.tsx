import { useState } from "react";
import { Tab } from "@headlessui/react";
import Button from "@/app/components/Button";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function WorkoutTab() {
  let [categories] = useState({
    Type: [
      {
        id: 1,
        title: "Chest",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Legs",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Back",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Shoulders",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Biceps",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Triceps",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 1,
        title: "Cardio",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      }
    ],
    Exercise: [
      {
        id: 1,
        title: "Bench Press",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 1,
        title: "Dumbell Bench Press",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 1,
        title: "Incline Dumbbell Bench Press",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 1,
        title: "Chest Flies",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 1,
        title: "Machine Chest Press",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 1,
        title: "Dumbbell Flies",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 1,
        title: "Cable Flies",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
    ],
    Reps: [],
    Sets: [],
  });

  return (
    <div className="w-full max-w-md px-2 py-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 overflow-y-auto h-[420px] border-b-black border-b-[]">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul className="space-y-3">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-xl font-medium leading-5">
                      {post.title}
                    </h3>
                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div className="bottom-5 fixed flex justify-end flex-row gap-1">
        <Button secondary>New Exercise +</Button>
        <Button>Add Workout</Button>
      </div>
    </div>
  );
}
