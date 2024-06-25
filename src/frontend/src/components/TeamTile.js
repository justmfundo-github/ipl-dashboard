import { React } from "react";
import { Link } from "react-router-dom";
import "./TeamTile.scss";

export const TeamTile = ({ teamName, teamWins, gamesPlayed }) => {
  let winPercentage = (teamWins / gamesPlayed) * 100;
  let winLossRecord = "";

  if (winPercentage > 50) {
    winLossRecord = "TeamTileWinner";
  } else {
    winLossRecord = "TeamTileLoser";
  }
  return (
    <div className={`TeamTile ${winLossRecord}`}>
      <h1>
        <Link to={`./teams/${teamName}`}>{teamName}</Link>
      </h1>
      <h2>Win Percentage: {winPercentage.toFixed(2)}%</h2>
    </div>
  );
};
