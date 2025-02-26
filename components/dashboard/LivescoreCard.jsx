import { useState, useEffect } from "react"
import { matches } from "@/lib/data"

const LiveScoreCard = () => {
  // Set to show the first 5 matches and keep them static
  const displayCount = 3
  const displayedMatches = matches.slice(0, displayCount)

  return (
    <div className="w-full max-w-md  rounded-md p-4">
      <div className="flex justify-between items-center mb-4 border-b-2 border-[#605dff]">
        <h2 className="font-semibold text-gray-700">Live Scores</h2>
        <button className="text-xs text-blue-500 hover:text-blue-700">
          View All
        </button>
      </div>
      <div className="space-y-3 ">
        {displayedMatches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
    </div>
  )
}

const getAbbreviation = (teamName) => {
  return teamName.slice(0, 3).toUpperCase()
}

const MatchCard = ({ match }) => (
  <div className="flex items-end justify-between  bg-gray-200 p-2 rounded-b-sm mb-2 border-1 border-gray-200">
    <div className="text-sm">
      <p className="text-gray-500 text-xs">{match.league}</p>
      <p className="font-semibold ">
        {getAbbreviation(match.homeTeam.name)} vs{" "}
        {getAbbreviation(match.awayTeam.name)}
      </p>
    </div>
    <div className="flex items-center space-x-3 ">
      <img src={match.homeTeam.logo} alt="Home Team" className="w-6 h-6" />
      <p className="font-bold">{match.score}</p>
      <img src={match.awayTeam.logo} alt="Away Team" className="w-6 h-6" />
    </div>
    <span
      className={`px-2 py-1 text-xs font-semibold rounded ${
        match.status === "Live"
          ? "bg-red-500 text-white"
          : match.status === "FT"
          ? "bg-gray-500 text-white"
          : "bg-blue-500 text-white"
      }`}
    >
      {match.status === "Live" ? match.time : match.status}
    </span>
  </div>
)

export default LiveScoreCard
