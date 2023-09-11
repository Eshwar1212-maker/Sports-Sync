import { FC } from "react";
import Landing from "./components/Landing";
import getUsers from "../actions/getUsers";
import axios from "axios";
import { getUsersTeams } from "../actions/getUsersTeams";

const Home = async () => {

  const users = await getUsers()
  const userTeams = await getUsersTeams()
  console.log(userTeams);
  

  return (
    <div className="h-full">
      <Landing userTeams={userTeams} users={users}/>
    </div>
  );
};

export default Home;
