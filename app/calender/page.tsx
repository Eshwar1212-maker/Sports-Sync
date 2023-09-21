import { FC } from "react";
import Landing from "./components/Landing";
import getUsers from "../actions/getUsers";
import axios from "axios";
import { getUsersTeams } from "../actions/getUsersTeams";
import getCurrentUser from "../actions/getCurrentUser";

const Home = async () => {

  const users = await getUsers()
  const userTeams = await getUsersTeams()
  const currentUser = await getCurrentUser()
  

  return (
    <div className="h-full">
      <Landing currentUser={currentUser} userTeams={userTeams} users={users}/>
    </div>
  );
};

export default Home;
