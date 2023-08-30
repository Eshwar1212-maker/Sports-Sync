"use client";
import { Button } from "@/components/ui/button";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, Fragment } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineGroupAdd } from "react-icons/md";

interface OnboardModaProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  openGroupChatModal: () => void; // add this
}
const OnboardModal: FC<OnboardModaProps> = ({
  isOpen,
  onClose,
  children,
  openGroupChatModal,
}) => {
  const { theme } = useTheme();
  const router = useRouter()

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 hidden lg:flex justify-center xl:pr-[300px] 2xl:pr-[500px]"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-0"
          leave="ease-in duration-100"
          leaveFrom="opacity-0"
          leaveTo="opacity-0"
        >
          <div
            className="
            fixed 
            inset-0 
            bg-[#2f2f2f]
            bg-opacity-40
            transition-opacity
            "
          />
        </Transition.Child>

        <div className="fixed top-1 mx-auto z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={clsx(`relative transform overflow-hidden rounded-lg text-left w-full max-w-md shadow-xl transition-all`,
                  theme == "dark" ? "bg-[#1c1c1c]" : "bg-white"
                )}
              >
                <div className="bg-blue-100 p-1">
                  <div className="p-4 flex gap-2">
                    <BsArrowLeft className="cursor-pointer my-auto" size={28} />
                    <p className="text-sm">
                      Create your first group chat with your team! Schedule <br />
                      games, practices, events, etc, upload images and videos <br />
                       to, or find your friend in <span className="underline cursor-pointer" onClick={() => router.push("/users")}>users</span> and direct message them.
                    </p>
                  </div>
                  <div className="flex gap-1 justify-end pr-1 pb-2">
                    <div className="">
                      <Button
                        type="button"
                        onClick={() => {
                          openGroupChatModal(); 
                        }}
                        variant={"outline"}
                      >
                        Create group chat
                        <span>
                          <MdOutlineGroupAdd
                            size={23}
                            className="rounded-full bg-slate-100 pl-1"
                          />
                        </span>
                      </Button>
                    </div>
                    <Button 
                    type="button"
                    onClick={onClose} variant={"defaultTwo"}>
                      Got it
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default OnboardModal;
