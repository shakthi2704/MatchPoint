import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LiveScoreCard = () => {
  const matches = [
    {
      league: "Premier League",
      homeTeam: {
        name: "Chelsea",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
      },
      awayTeam: {
        name: "Arsenal",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      },
      score: "2 - 1",
      status: "Live",
      time: "75'",
    },
    {
      league: "La Liga",
      homeTeam: {
        name: "Real Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      },
      awayTeam: {
        name: "Barcelona",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
      },
      score: "0 - 0",
      status: "Upcoming",
      time: "19:00",
    },
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % matches.length)
    }, 3000) // Adjust this value to control the scroll speed

    return () => clearInterval(interval)
  }, [matches.length])

  return (
    <div className="w-full max-w-md bg-white  rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Live Scores</h2>
        <button className="text-sm text-blue-500 hover:text-blue-700">
          View All
        </button>
      </div>
      <div className="relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: "100%" }} // Start from the bottom
            animate={{ y: 0 }} // Move upwards
            exit={{ y: "-100%" }} // Exit upwards
            transition={{ duration: 0.8 }} // Duration of the scroll animation
          >
            <MatchCard match={matches[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

const getAbbreviation = (teamName) => {
  return teamName.slice(0, 3).toUpperCase()
}

const MatchCard = ({ match }) => (
  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
    <div className="text-sm">
      <p className="text-gray-500 text-xs">{match.league}</p>
      <p className="font-semibold">
        {getAbbreviation(match.homeTeam.name)} vs{" "}
        {getAbbreviation(match.awayTeam.name)}
      </p>
    </div>
    <div className="flex items-center space-x-3">
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
