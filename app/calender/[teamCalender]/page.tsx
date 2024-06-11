import { getTeamById } from "@/app/actions/getTeamById";
import EmptyState from "@/app/components/EmptyState";
import TeamCalenderHeader from "./components/TeamCalenderHeader";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getUserById from "@/app/actions/getUserById";
import TeamCalendar from "./components/TeamCalender";

interface TeamIdPageProps {
  params: {
    teamCalender: string;
  };
}
const TeamId = async ({ params }: TeamIdPageProps) => {

  const team: any = await getTeamById(params.teamCalender);
  const currentUser = await getCurrentUser()
  const teamAdmin: any = await getUserById(team?.admin!)

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
    <div className="lg:ml-8 xl:px-0 xl:pr-10 xl:pl-6 text-[12px] px-4 lg:pr-4">
      <div className="h-full flex flex-col">
        <TeamCalenderHeader teamAdmin={teamAdmin} currentUser={currentUser!} team={team} />
      </div>
      <div className="py-4">
        <TeamCalendar currentUser={currentUser!} team={team}/>
      </div>
    </div>
  );
};

export default TeamId;
