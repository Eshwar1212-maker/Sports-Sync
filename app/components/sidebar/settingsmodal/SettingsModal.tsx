"use client";

import Modal from "../../Modal";
import Profile from "./Profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Subscription from "./Subscription";

interface SettingsModal {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: any;
  isPro: Promise<boolean>
}

const SettingsModal: React.FC<SettingsModal> = ({
  isOpen,
  onClose,
  currentUser,
  isPro
}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Tabs className="h-[570px]" defaultValue="profile">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Profile currentUser={currentUser} onClose={onClose} isOpen />
        </TabsContent>
        <TabsContent value="subscription">
          <Subscription 
          currentUser={currentUser}
          />
        </TabsContent>
      </Tabs>
    </Modal>
  );
};

export default SettingsModal;
