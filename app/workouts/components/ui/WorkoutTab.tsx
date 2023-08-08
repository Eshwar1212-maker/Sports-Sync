import { useState } from "react";
import { Tab } from "@headlessui/react";
import Button from "@/app/components/Button";
import { initialCategories } from "@/app/libs/categories";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function WorkoutTab({onClose}: {onClose: () => {}}) {
  let [categories] = useState(initialCategories);
  const [category, setCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");
  const [selectedReps, setSelectedReps] = useState(0);
  const [selectedSets, setSelectedSets] = useState(0);

  console.log("CATEGORY:  ", category);
  console.log("REPS:  ", selectedReps);
  console.log("SETS:  ", selectedSets);

  return (
    <div className="w-full max-w-md px-2 py-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              onClick={() => {
                console.log(category);
                setCategory(category);
              }}
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
                {(category == "Sets" || category === "Reps") &&
                category == "Sets" ? (
                  <input
                    className=" border-s border-[1px] border-black rounded-md px-3 py-2 my-40 focus:outline-none focus:border-blue-500 mx-auto flex"
                    onChange={(e) => setSelectedSets(e.target.valueAsNumber)}
                    type="number"
                  />
                ) : (
                  <input
                    className=" border-s border-[1px] border-black rounded-md px-3 py-2 my-40 focus:outline-none focus:border-blue-500 mx-auto flex"
                    onChange={(e) => setSelectedReps(e.target.valueAsNumber)}
                    type="number"
                  />
                )}
                {posts.map((post) => (
                  <li
                    onClick={() => {
                      console.log(post);
                      if (post.type == "bodypart") {
                        setSelectedType(post.type);
                      }
                      if (post.type == "exercise") {
                        setSelectedExercise(post.type);
                      }
                    }}
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
        <Button
        type="submit"
        >
          Add Workout
        </Button>
      </div>
    </div>
  );
}
