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
const Dashboard = ({ userName = "User" }) => {
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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mx-2 my-4 ">
          <div className="grid auto-rows-min gap-4 md:grid-cols-[70%_30%]">
            <div className="aspect-video rounded-xl bg-muted/50">
              <div className="trezo-card bg-primary-500 mb-[25px] p-[20px] md:p-[25px] rounded-md lg:col-span-2 bg-[#605dff]">
                <div className="trezo-card-content relative md:pr-[230px]">
                  <div className="md:pt-[5px] md:pb-[5px]">
                    <h5 className="mb-[5px] md:mb-[2px] font-semibold text-white text-2xl">
                      {getGreeting()},{" "}
                      <span className="text-[#ffcea9]">{userName}!</span>
                    </h5>
                    <p className="text-[#d5d9e2]">
                      {formatDate(currentTime)},{" "}
                      {currentTime.toLocaleTimeString()}
                    </p>
                    <div className="border-t border-primary-400 mt-[15px] mb-[15px] md:mt-[30px] md:mb-[33px]"></div>
                    <div className="sm:flex items-center">
                      <div className="flex items-center ltr:sm:mr-[20px] ltr:2xl:mr-[40px] rtl:sm:ml-[20px] rtl:2xl:ml-[40px]">
                        <div className="w-[42px] h-[42px] rtl:ml-[12px] ltr:mr-[12px] bg-primary-50 text-primary-500 rounded-md flex items-center justify-center">
                          <FaFutbol />
                        </div>
                        <div>
                          <span className="text-[15px] md:text-md text-white block font-semibold mb-[1px] md:mb-0">
                            {matchesToday} Matches
                          </span>
                          <span className="block text-gray-200">
                            Happening today
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center mt-[15px] sm:mt-0">
                        <div className="w-[42px] h-[42px] rtl:ml-[12px] ltr:mr-[12px] bg-primary-50 text-primary-500 rounded-md flex items-center justify-center">
                          <FaTrophy />
                        </div>
                        <div>
                          <span className="text-[15px] md:text-md text-white block font-semibold mb-[1px] md:mb-0">
                            {tournamentsToday} Tournaments
                          </span>
                          <span className="block text-gray-200">
                            Happening today
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:absolute ltr:right-0 rtl:left-0 md:max-w-[208.04px] md:top-1/2 md:-translate-y-1/2 mt-[20px] md:mt-0">
                    <img
                      src="images/trophy.png"
                      className="inline-block"
                      alt="welcome-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 px-2 py-4 shadow-lg">
              <LiveScoreCard />
            </div>
          </div>

          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Dashboard
