import { getTeamById } from "@/app/actions/getTeamById";
import EmptyState from "@/app/components/EmptyState";
import TeamCalender from "./components/TeamCalender";
import Header from "./components/TeamCalenderHeader";
import { FullTeamEventType } from "@/app/types";
import { Team } from "@prisma/client";
import TeamCalenderHeader from "./components/TeamCalenderHeader";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface TeamIdPageProps {
  params: {
    teamCalender: string;
  };
}
const TeamId = async ({ params }: TeamIdPageProps) => {



  const team: any = await getTeamById(params.teamCalender);
  const currentUser = await getCurrentUser()

  if (!team) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className=" px-10 lg:ml-8 xl:px-0 xl:pr-20 text-[12px]">
      <div className="h-full flex flex-col">
        <TeamCalenderHeader currentUser={currentUser!} team={team} />
      </div>
      <div className="py-4">
        <TeamCalender currentUser={currentUser!} team={team}/>
      </div>
    </div>
  );
};

export default TeamId;
