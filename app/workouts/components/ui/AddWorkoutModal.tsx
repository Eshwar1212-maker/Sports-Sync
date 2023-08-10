import Modal from "@/app/components/Modal";
import { FC, useState } from "react";
import { Tab } from "@headlessui/react";
import { initialCategories } from "@/app/libs/categories";
import { IoArrowForwardOutline } from "react-icons/io5";
import Button from "@/app/components/Button";

interface AddWorkoutModalProps {
  isOpen?: boolean;
  onClose: () => void;
  addWorkout: any
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const AddWorkoutModal: FC<AddWorkoutModalProps> = ({ isOpen, onClose, addWorkout }) => {

  console.log(isOpen);
  let [categories] = useState(initialCategories);
  const [category, setCategory] = useState("Type");
  const [selectedType, setSelectedType] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");
  const [selectedReps, setSelectedReps] = useState(0);
  const [selectedSets, setSelectedSets] = useState(0);

  console.log(selectedExercise, selectedSets, selectedReps, selectedType);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="h-[600px]">
        <h1 className="text-center text-xl">Add Workout</h1>
        <div>
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
                      {category === "Sets" && (
                        <input
                          className="border-s border-[1px] border-black rounded-md px-3 py-2 my-40 focus:outline-none focus:border-blue-500 mx-auto flex"
                          onChange={(e) =>
                            setSelectedSets(e.target.valueAsNumber)
                          }
                          type="number"
                          placeholder="Enter sets..."
                        />
                      )}

                      {category === "Reps" && (
                        <div className="flex flex-row mx-auto justify-center">
                          <div className="">
                            <input
                              className="border-s border-[1px] border-black rounded-md px-3 py-2 my-40 focus:outline-none focus:border-blue-500 mx-auto flex"
                              onChange={(e) =>
                                setSelectedReps(e.target.valueAsNumber)
                              }
                              type="number"
                              placeholder="Enter reps..."
                            />
                          </div>
                          <button
                            onClick={() => setCategory("Sets")}
                            className="text-blue-400"
                          >
                            <IoArrowForwardOutline color="" size={37} />
                          </button>
                        </div>
                      )}
                      {(category == "Type" || category == "Exercise") &&
                        posts.map((post) => (
                          <li
                            onClick={() => {
                              if (post.type == "bodypart") {
                                setSelectedType(post.title);
                              }
                              if (post.type == "exercise") {
                                setSelectedExercise(post.title);
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
                onClick={() => {
                  addWorkout({
                    type: selectedType,
                    exercise: selectedExercise,
                    reps: selectedReps,
                    sets: selectedSets,
                  });
                  onClose(); // One is enough
                }}
              >
                Add Workout
              </Button>
            </div>
          </div>{" "}
        </div>
      </div>
    </Modal>
  );
};

export default AddWorkoutModal;
