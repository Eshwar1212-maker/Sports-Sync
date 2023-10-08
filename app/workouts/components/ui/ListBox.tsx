import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CgSelect } from 'react-icons/cg'
import { AiOutlineCheck } from 'react-icons/ai'
import clsx from 'clsx'
import { useTheme } from 'next-themes'

const people = [
  { name: 'Select Workout Name(edit name later in calendar)' },
  { name: 'Chest Workout' },
  { name: 'Back Workout' },
  { name: 'Leg Workout' },
  { name: 'Arm Workout' },
  { name: 'Cardio' },
  { name: 'Upper Body Workout'},
  { name: 'Explosive Workout'},
  { name: 'Plyometric Workout'},

]

export default function ListBox({onSelectedChange}: any) {
  const [selected, setSelected] = useState(people[0])
  const handleOnChange = (value: any) => {
    setSelected(value);
    onSelectedChange(value);
  };

  const {theme} = useTheme()

  return (
    <div className="fixed top-13 w-[93%] border-gray-900 border-[1px]">
      <Listbox value={selected} onChange={handleOnChange}>
        <div className="relative mt-1">
          <Listbox.Button
           className={clsx("relative w-full cursor-default rounded-sm py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-200 sm:text-sm",
            theme === "dark" ? "bg-slate-900 text-white border-slate-300 border-[1px]" : "")}
            >
            <span className="block truncate text-lg">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
       
              <CgSelect
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
             className={clsx("absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                  theme === "light" ? "bg-white" : "bg-slate-300"
                                  )}>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-5 pr-4 ${
                      active ? 'bg-slate-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-[15px] ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center">
                          <AiOutlineCheck
                          className="h-5 w-5" aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
