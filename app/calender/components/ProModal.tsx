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
      <div className="flex flex-col gap-3 pb-10">
        <div className="flex flex-col space-y-0 gap-1 pb-3">
          <div>
            <h2 className="text-2xl font-semibold">Upgrade to Pro!</h2>
          </div>
          <div>
            <p className="text-sm font-semibold">
              Unlock a workspace calender, along with endless other features
              with pro
            </p>
          </div>
        </div>
        <section className="space-y-2">
          <dt className="text-md font-semibold">Unlimted workspaces</dt>
          <dl className="text-sm">
            Get unlimited workspaces, where you and your team can access your
            private calender.
          </dl>
          <dt className="font-semibold text-md">Ai Assistance</dt>
          <dl className="text-sm">
            Get unlimited AI assistance for plans regarding improving on your
            workouts, and optimizing your calender.
          </dl>
        </section>
        <Button className="fixed right-4 bottom-4">Upgrade</Button>
      </div>
    </Modal>
  );
};

export default ProModal;
