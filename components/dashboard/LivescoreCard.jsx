import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { matches } from "@/lib/data"

const LiveScoreCard = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % matches.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [matches.length])

  return (
    <div className="w-full max-w-md bg-amber-50  rounded-md p-4">
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
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8 }}
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
