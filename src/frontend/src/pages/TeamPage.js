import "./TeamPage.scss";
import { React, useEffect, useState } from "react";
import { useParams, userParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";
import Header from "./Header";

export const TeamPage = () => {
  // declaring a state called team and a function called setTeam to populate that state
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    //useEffect cannot be asynchronous so we create another function within the useEffect function that is asynchronous
    const fetchMatches = async () => {
      // fetchMatches is our asynchronous function
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`); // fetch returns a promise
      const data = await response.json(); // await is used to retrieve information from the fetch promise
      console.log(data);

      setTeam(data); //setting the returned/fetched data to team by using setTeam
    };
    fetchMatches();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not found!</h1>;
  }

  let winPercentage = (team.totalWins / team.totalMatches) * 100;
  console.log(winPercentage);
  return (
    <div>
      <Header />
      <div className="TeamPage">
        <div className="team-name-section">
          <h1 className="team-name">{team.teamName}</h1>
          <h3>
            <span className="summary-text">Total Games Played:</span> {team.totalMatches}
          </h3>
          <h3>
            <span className="summary-text">Total Wins:</span> {team.totalWins}
          </h3>
          <h3>
            <span className="summary-text">Total Losses:</span> {team.totalMatches - team.totalWins}
          </h3>
        </div>
        <div className="win-loss-section">
          <h4>Wins / Losses</h4>
          <PieChart
            data={[
              { title: "Losses", value: team.totalMatches - team.totalWins, color: "#d22b2b" },
              { title: "Wins", value: team.totalWins, color: "#3f8f29" },
            ]}
          />
          <h4 className="summary-text">Win Percentage:</h4>
          <h3>{winPercentage.toFixed(2)} %</h3>
        </div>
        <div className="match-detail-section">
          <h3>Latest Matches</h3>
          <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
        </div>

        {team.matches.slice(1).map((match) => (
          <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
        ))}

        <div className="more-link team-name-link">
          <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More {">"}</Link>
        </div>
      </div>
    </div>
  );
};
