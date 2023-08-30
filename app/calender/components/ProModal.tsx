import Modal from "@/app/components/Modal";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { IoClose } from "react-icons/io5";

interface ProModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProModal: FC<ProModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-3 pb-10 h-[400px]">
        <div className="flex flex-col space-y-0 gap-1 pb-3">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Upgrade to Pro!</h2>
            <button
              type="button"
              className="rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:hidden"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <IoClose className="h-6 w-6" aria-hidden="true" />
            </button>{" "}
          </div>
          <div>
            <p className="text-[14px] font-semibold">
              Unlock endless features with pro.
            </p>
          </div>
        </div>
        <section className="space-y-6 pb-10 py-4">
          <dl>
            <dt className="text-md font-semibold">Unlimted workspaces</dt>
            <dd className="text-sm">
              Get unlimited workspaces, where you and your team can access your
              private calender.
            </dd>
          </dl>
          <dl>
            <dt className="font-semibold text-md">Ai Assistance</dt>
            <dd className="text-sm">
              Get unlimited AI assistance for plans regarding improving on your
              workouts, and optimizing your calender.
            </dd>
          </dl>
        </section>
        <p className="text-[10px] fixed bottom-6">Pro coming soon</p>
        <Button className="fixed right-4 bottom-4">Upgrade</Button>
      </div>
    </Modal>
  );
};

export default ProModal;
