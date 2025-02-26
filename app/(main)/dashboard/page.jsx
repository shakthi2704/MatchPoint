"use client"
import LiveScoreCard from "@/components/dashboard/LivescoreCard"
import Header from "@/components/header/Header"
import Sidebar from "@/components/sidemenu/Sidebar"
import React, { useState, useEffect } from "react"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  FaShoppingBag,
  FaExclamationTriangle,
  FaFutbol,
  FaTrophy,
} from "react-icons/fa"

const getGreeting = () => {
  const hours = new Date().getHours()
  if (hours < 12) {
    return "Good Morning"
  } else if (hours < 18) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

const formatDate = (date) => {
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
const AllLeages = ({ userName = "User" }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [matchesToday, setMatchesToday] = useState(0) // Placeholder for matches
  const [tournamentsToday, setTournamentsToday] = useState(0) // Placeholder for tournaments
  const [isClient, setIsClient] = useState(false) // Track whether it's client-side

  // Use useEffect to ensure client-side behavior after hydration
  useEffect(() => {
    setIsClient(true) // Mark as client-side after the first render
    const timer = setInterval(() => {
      setCurrentTime(new Date()) // Update the time every second
    }, 1000)

    return () => clearInterval(timer) // Cleanup on component unmount
  }, [])

  // Prevent rendering dynamic content until after the first render
  if (!isClient) {
    return null
  }

  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mx-2 my-4 overflow-x-hidden">
          <div className="grid auto-rows-min gap-4 md:grid-cols-[60%_40%]">
            <div className="aspect-video rounded-xl bg-muted/50"></div>
            <div className="aspect-video rounded-xl bg-muted/50 px-2 py-4 shadow-xl flex justify-center">
              {/* <LiveScoreCard /> */}
            </div>
          </div>

          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AllLeages
