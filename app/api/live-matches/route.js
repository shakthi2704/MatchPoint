import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      {
        method: "GET",
        headers: {
          "x-apisports-key": process.env.RAPIDAPI_NEXT_FOOTBALL_API_KEY, // Ensure this env variable is set
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
      }
    )

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    console.log("Fetched Live Matches:", data)

    return NextResponse.json(data.response, { status: 200 })
  } catch (error) {
    console.error("Error fetching live matches:", error.message)
    return NextResponse.json(
      { error: "Failed to fetch live matches" },
      { status: 500 }
    )
  }
}
