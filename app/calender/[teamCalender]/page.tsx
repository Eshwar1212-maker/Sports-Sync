import { getTeamById } from "@/app/actions/getTeamById";
import EmptyState from "@/app/components/EmptyState";
import TeamCalender from "./components/TeamCalender";
import Header from "./components/Header";

interface TeamIdPageProps {
  params: {
    teamCalender: string;
  };
}
const TeamId = async ({ params }: TeamIdPageProps) => {

  const team = await getTeamById(params.teamCalender);

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
    <div className="py-8 px-10 lg:ml-8 xl:px-0 xl:pr-20 text-[12px]">
      <div className="h-full flex flex-col">
        <Header team={team} />
      </div>
      <div className="py-4">
        <TeamCalender />
      </div>
    </div>
  );
};

export default TeamId;
