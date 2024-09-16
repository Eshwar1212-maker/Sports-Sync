"use client"
import {loadStripe} from "@stripe/stripe-js"
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

interface SubscriptionOptionsProps{
  currentUser: any
}

const SubscriptionOptions = ({currentUser}: SubscriptionOptionsProps) => {

  console.log(currentUser);
  

  const mutation = useMutation(() => axios.get('/api/stripe'), {
    onSuccess: (response) => {
      window.location.href = response.data.url
    },
    onError: (error) => {
      console.log(error);
      toast.error('Payment failed');
    },
  });

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
          <h3 className="font-bold">
            Plus
            <span className="text-[10px]"> (3.99/month)</span>
          </h3>
          <Button 
          className="bg-blue-500 rounded-md hover:bg-blue-600 text-[12px] px-4 h-8"
          onClick={() => mutation.mutate()}
          >
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
          <h3 className="font-bold">
            Plus
            <span className="text-[10px]"> (6.99/month)</span>
          </h3>{" "}
          <Button className="bg-slate-600 text-white rounded-md hover:bg-slate-700 text-[12px] px-4 h-8">
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
