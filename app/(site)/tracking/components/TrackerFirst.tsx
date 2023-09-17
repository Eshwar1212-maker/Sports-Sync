"use client";

import { FC } from "react";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import TrackingCarousel from "./TrackingCarousel";
import TrackingCarouselTwo, { TrackingCarouselThree } from "./TrackingCarouselTwo";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface TrackerFirstProps {}
const TrackerFirst: FC<TrackerFirstProps> = ({}) => {
  const router = useRouter()
  return (
    <div id="first" className="bg-white sm:hidden lg:block 2xl:max-w-[74%] mx-auto">
      <Grid
        numItems={1}
        numItemsSm={2}
        numItemsLg={3}
        className="gap-2  mx-auto py-10"
      >
        <Col numColSpan={1} numColSpanLg={2}>
          <Card className="bg-white max-h-[500px]">
            <TrackingCarousel />
          </Card>
        </Col>
        <Card className="bg-slate-100">
          <Metric className="font-thin py-8 text-xl md:text-2xl xl:my-20">Synced wants to help you accomplish every goal, reach new milestones, and 
            share that fullfillment from your hard work with your friends. 
          </Metric>
        </Card>
        <Col> 
        <Card className="2xl:max-h-[400px]">
            <TrackingCarouselTwo />
          </Card>
        </Col>
        <Card className=" bg-slate-100">
          <Metric className="font-thin py-8 text-xl md:text-2xl xl:my-10 max-h-[146px] xl:max-h-auto">
            Athletes who dont lift, train, and get stronger are simply behind,
            were here to help you get started, and never stop.
          </Metric>
        </Card>
        <Col>
        <Card className="2xl:max-h-[400px]">
            <TrackingCarouselThree />
          </Card>
        </Col>
      </Grid>

    </div>
  );
};

export default TrackerFirst;
