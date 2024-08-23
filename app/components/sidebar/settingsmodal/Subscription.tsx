
import { FC } from "react";
import SubscriptionOptions from "./SubscriptionOptions";
import { Button } from "@/components/ui/button";
interface SubscriptionProps {}
const Subscription: FC<SubscriptionProps> = ({}) => {

  return (
    <div className="max-w-[100%]">
      <h3>Current Plan</h3>
      <div className=" bg-zinc-800 py-6 px-4 rounded-2xl max-w-[98%]">
        <p className="">Free</p>
        <p className="text-[10px]">Great for athletes that want to manage their routine, but limited in data storage.</p>
      </div>
      <h3>All Plans</h3>
      <SubscriptionOptions />
    </div>
  );
};

export default Subscription;
