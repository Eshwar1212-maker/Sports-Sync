import Modal from "@/app/components/Modal";
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface ProModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProModal: FC<ProModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-3 pb-10 h-[400px]">
        <div className="flex flex-col space-y-0 gap-1 pb-3">
            <h2 className="text-2xl font-semibold">Upgrade to Pro For Full Access!</h2>
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
              private calendar.
            </dd>
          </dl>
          <dl>
            <dt className="font-semibold text-md">Ai Assistance</dt>
            <dd className="text-sm">
              Get unlimited AI assistance for plans regarding improving on your
              workouts, and optimizing your calendar.
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
