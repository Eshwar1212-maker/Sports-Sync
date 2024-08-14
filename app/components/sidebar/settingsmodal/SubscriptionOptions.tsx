import { Button } from "@/components/ui/button";
import { FC } from "react";
interface SubscriptionOptionsProps {}
const SubscriptionOptions: FC<SubscriptionOptionsProps> = ({}) => {
  return (
    <div className="space-y-4">
      <div className="border-s border-white border-[1px] rounded-md pt-2 px-3 m-2 h-[115px]">
        <h3 className="font-bold">Free</h3>
        <ul className="list-disc pl-5 text-[12px] pt-4">
          <li>Access to all features</li>
          <li>Limited Data storage for all features</li>
        </ul>
      </div>

      <div className="border-s border-white border-[1px] rounded-md pt-2 px-3 m-2 h-[115px]">
        <div className="flex justify-between">
          <h3 className="font-bold">Plus</h3>
          <Button className="bg-blue-500 rounded-md hover:bg-blue-600 text-[12px] px-4">
            Upgrade
          </Button>
        </div>
        <ul className="list-disc pl-5 text-[12px]">
          <li>Access to all features</li>
          <li>Unlimited data storage for calendar events and workout logs</li>
          <li>Increased storage for messaging(100 messages per week)</li>
        </ul>
      </div>

      <div className="border-s border-white border-[1px] rounded-md pt-2 px-3 m-2 h-[115px]">
        <div className="flex justify-between">
          <h3 className="font-bold">Enterprise</h3>
          <Button className="bg-slate-600 text-white rounded-md hover:bg-slate-700 text-[12px] px-4">
            Upgrade
          </Button>
        </div>
        <ul className="list-disc pl-5 text-[12px]">
          <li>Access to all features</li>
          <li>Unlimited data storage for calendar events and workout logs</li>
          <li>Unlimited messaging storage</li>
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionOptions;
