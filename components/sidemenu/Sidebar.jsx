"use client"
import React from "react"
import NewUser from "./NewUser"
import { ChevronRight } from "lucide-react"
import {
  Sidebar as SidebarComponent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarFooter,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { MdScoreboard } from "react-icons/md"

import { usePathname } from "next/navigation"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Image from "next/image"

import {
  FaHome,
  FaSignOutAlt,
  FaCog,
  FaTable,
  FaTrophy,
  FaUsers,
  FaUser,
  FaChartBar,
} from "react-icons/fa"
const data = {
  projects: [
    { name: "Dashboard", url: "/dashboard", icon: FaHome },
    { name: "Live Score", url: "/live", icon: MdScoreboard },
  ],
  main: [
    {
      title: "Leagues",
      url: "/leagues",
      icon: FaTable,
      isActive: true,
      items: [
        { title: "All Leagues", url: "/leagues/all-leagues" },
        { title: "League Standings", url: "/leagues/standings" },
        { title: "League Fixtures", url: "/leagues/fixtures" },
        { title: "League Statistics", url: "/leagues/statistics" },
      ],
    },
    {
      title: "Tournaments",
      url: "#",
      icon: FaTrophy,
      items: [
        { title: "Tournament Standings", url: "/tournaments/tournament" },
      ],
    },
    {
      title: "Teams",
      url: "#",
      icon: FaUsers,
      items: [
        { title: "All Teams", url: "/teams/all-teams" },
        { title: "Team Statistics", url: "/teams/statistics" },
        { title: "Team Squad", url: "/teams/squad" },
      ],
    },
    {
      title: "Players",
      url: "#",
      icon: FaUser, // React icon added here
      items: [
        { title: "General", url: "/players/general" },
        { title: "Top Scorers", url: "/players/scores" },
        { title: "Top Assists", url: "/players/assists" },
        { title: "Player Profiles", url: "/players/profile" },
      ],
    },
    {
      title: "Stats & Analytics",
      url: "#",
      icon: FaChartBar, // React icon added here
      items: [
        { title: "Match Statistics", url: "/statistics/match" },
        { title: "Top Scorers", url: "/statistics/scorers" },
        { title: "Team Performance", url: "/statistics/team" },
        { title: "Player Performance", url: "/statistics/player" },
      ],
    },
  ],

  others: [
    { name: "Settings", url: "/settings", icon: FaCog },
    { name: "Logout", url: "/logout", icon: FaSignOutAlt },
  ],
}
function Sidebar({ user, ...props }) {
  const pathname = usePathname()
  return (
    <SidebarComponent
      collapsible="icon"
      {...props}
      className="flex flex-col h-screen"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-20 items-center justify-center">
                  <Image
                    src="/images/Asset.png"
                    width={40}
                    height={40}
                    alt="Logo"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-lg">Match Point</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
        <SidebarMenu>
          {data.projects.map((project, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                asChild
                className={`${
                  pathname === project.url
                    ? "bg-[#605dff] text-white"
                    : "hover:bg-gray-300 text-black"
                } transition duration-200 rounded-xs`}
              >
                <a href={project.url} className="flex items-center p-2">
                  {project.icon && <project.icon className="mr-2 h-4 w-4" />}
                  <span>{project.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>More Infomation</SidebarGroupLabel>
        <SidebarMenu>
          {data.main.map((item, index) => (
            <Collapsible key={index}>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    {item.icon && <item.icon className="mr-2 h-2 w-2" />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto h-2 w-2" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem, subIndex) => (
                      <SidebarMenuSubItem key={subIndex}>
                        <SidebarMenuSubButton
                          asChild
                          className={`${
                            pathname === subItem.url
                              ? "bg-[#605dff] text-white"
                              : "hover:bg-gray-300 text-black"
                          } transition duration-200 rounded-xs`}
                        >
                          <a
                            href={subItem.url}
                            className="flex items-center p-2"
                          >
                            {subItem.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Others</SidebarGroupLabel>
        <SidebarMenu>
          {data.others.map((other, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                asChild
                className={`${
                  pathname === other.url
                    ? "bg-[#605dff] text-white"
                    : "hover:bg-gray-300 text-black"
                } transition duration-200 rounded-xs`}
              >
                <a href={other.url}>
                  {other.icon && <other.icon className="mr-2 h-4 w-4" />}
                  <span>{other.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarFooter className="fixed bottom-0 w-full border-t bg-background">
        <NewUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </SidebarComponent>
  )
}

export default Sidebar
