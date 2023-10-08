"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavBarItemCarousel from "./NavBarItemCarousel";
import {
  navWorkSpaceFeatures,
  workOutLogFeatures,
} from "@/app/libs/NavWorkSpaceFeatures";
import Image from "next/image";
import monthly from "../../../assets/Synced/monthly.png";
import weekly from "../../../assets/Synced/weekly.png";
import daily from "../../../assets/Synced/daily.png";
import { useRouter } from "next/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";

export function NavBarItem() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const router = useRouter();

  return (
    <NavigationMenu className="hidden md:flex ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="bg-inherit"
            onMouseLeave={handleClose}
            onMouseEnter={handleOpen}
            onClick={(e) => e.preventDefault()}
          >
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent className="  md:w-[100vw]">
            <ul className="grid gap-3 p-6 max-w-[800px] lg:grid-cols-[.75fr_1fr] mx-auto">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted pb-8 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div>
                      <NavBarItemCarousel />
                    </div>
                    <div className="pl-4">
                      <div className="text-lg font-medium">Synced</div>

                      <div>
                        <p className="text-sm">
                          Are you using google calendar to track your events,
                          whats app to schedule your games? Fitnotes to track
                          your workouts? Why not do all of that in one place?
                        </p>
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                className="hover:bg-slate-200"
                href="/tracking"
                title="Start Logging"
              >
                Utilize our workout log to track your exercise on a daily,
                weekly, monthly basis, with endless visual charts/analytics
                tracking everything.
              </ListItem>
              <ListItem
                className="hover:bg-slate-200"
                href="/workspaces"
                title="Communicate"
              >
                Leverage our messaging system for private group chats, schedule
                everything with your team.
              </ListItem>
              <ListItem
                className="hover:bg-slate-200"
                href="/workspaces"
                title="Calendars and Workspaces"
              >
                Use our calendars to track everything related to your sport,
                with a monthly, weekly, daily view. You are your team have
                nothing stopping you from reaching your goals.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger
            className="bg-inherit"
            onMouseLeave={handleClose}
            onMouseEnter={handleOpen}
            onClick={(e) => e.preventDefault()}
          >
            Workspaces
          </NavigationMenuTrigger>
          <NavigationMenuContent className=" md:w-[100vw]">
            <div className="max-w-[1400px] mx-auto pb-7 flex flex-row">
              <div>
                <div className="px-6 pt-8 pb-8 text-[21px] mx-auto">
                  <p>
                    Not another workspace with hundreds of complicated features
                    to confuse you, we just have everything you need.
                  </p>
                </div>
                <ul className="grid gap-3 px-4 mx-auto md:grid-cols-2 ">
                  {navWorkSpaceFeatures.map((component) => (
                    <ListItem
                      className="hover:bg-slate-200"
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                  <button
                    onClick={() => {
                      router.push("/auth");
                    }}
                    className="bg-blue-100 rounded-xl transition ease-in-out hover:bg-slate-200  duration-300 px-0 py-0 text-lg"
                  >
                    Start Collaborating
                  </button>
                </ul>
              </div>
              <div className="h-[440px] mt-3 w-[1px] mr-10 shadow-black bg-slate-300 shadow-lg text-black hidden xl:block" />
              <div className="gap-1 flex-col text-[12px] text-center mx-auto pt-4 hidden xl:flex">
                <Image
                  alt="monthly calendar"
                  src={monthly}
                  width={340}
                  height={340}
                />
                <p>Monthly</p>
                <Image
                  alt="monthly calendar"
                  src={weekly}
                  width={340}
                  height={340}
                />
                <p>Weekly</p>
                <Image
                  alt="daily calendar"
                  src={daily}
                  width={340}
                  height={340}
                />
                <p>Daily</p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger
            className="bg-inherit"
            onMouseLeave={handleClose}
            onMouseEnter={handleOpen}
            onClick={(e) => e.preventDefault()}
          >
            Tracking
          </NavigationMenuTrigger>
          <NavigationMenuContent className=" md:w-[100vw]">
            <div className="max-w-[1400px] mx-auto pb-3 flex flex-row">
              <div>
                <div className="px-6 pt-8 pb-8 text-[22px] mx-auto">
                  <p>Start working towards your goals today.</p>
                </div>
                <ul className="grid gap-3 px-4 mx-auto md:grid-cols-2 pb-10 max-w-[900px]">
                  {workOutLogFeatures.map((component) => (
                    <ListItem
                      className="hover:bg-slate-200"
                      key={component.title}
                      title={component.title}
                      href="/tracking"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                  <button
                    onClick={() => router.push("/auth")}
                    className="bg-blue-100 rounded-xl transition ease-in-out hover:bg-slate-200  duration-300 px-0 py-0 text-lg"
                  >
                    Lets go
                  </button>
                </ul>
              </div>
              <div className="h-[440px] mt-3 w-[1px] shadow-black bg-slate-300 shadow-lg text-black ml-10" />
              <div className="flex flex-col text-[12px] text-center mx-auto mt-[100px] h-fit gap-2 rounded-md">
                <Image
                  alt="monthly calendar"
                  src={monthly}
                  width={340}
                  height={340}
                  className="bg-slate-300 p-2 rounded-md"
                />
                <button
                  onClick={() => router.push("/guide")}
                  className="p-3 text-md w-fit mx-auto bg-slate-200 text-black hover:bg-blue-100 transition ease-in-out duration-300 rounded-sm flex items-center"
                >
                  Read how to start utilizing Synced now
                  <span className="">
                    <AiOutlineArrowRight size={20} />
                  </span>
                </button>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className=" bg-inherit"
            onMouseLeave={handleClose}
            onMouseEnter={handleOpen}
            onClick={(e) => e.preventDefault()}
          >
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent className="  md:w-[100vw]">
            <ul className="grid gap-3 p-6 max-w-[800px] lg:grid-cols-[.75fr_1fr] mx-auto">
              <ListItem
                className="hover:bg-slate-200"
                href="/guide"
                title="Guide"
              >
                If your an athlete, trainer, or coach, this is a great guide on
                how to start utilizing Synced now.
              </ListItem>
              <ListItem
                className="hover:bg-slate-200"
                href="/techstack"
                title="Tech Stack"
              >
                See the process we took technically when building Synced, the
                front end, backend, design process, and more.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className=" text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
