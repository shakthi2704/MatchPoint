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
  navMain: [
    {
      title: "Leagues",
      url: "#",
      icon: FaTable, // React icon added here
      isActive: true,
      items: [
        {
          title: "All Leagues",
          url: "#",
        },
        {
          title: "League Standings",
          url: "#",
        },
        {
          title: "League Fixtures",
          url: "#",
        },
        {
          title: "League Stats",
          url: "#",
        },
      ],
    },
    {
      title: "Tournaments",
      url: "#",
      icon: FaTrophy, // React icon added here
      items: [
        {
          title: " Tournament Standings",
          url: "#",
        },
      ],
    },
    {
      title: "Teams",
      url: "#",
      icon: FaUsers, // React icon added here
      items: [
        {
          title: "All Teams",
          url: "#",
        },
        {
          title: "Team Stats",
          url: "#",
        },
        {
          title: "Squad List",
          url: "#",
        },
      ],
    },
    {
      title: "Players",
      url: "#",
      icon: FaUser, // React icon added here
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Top Scorers",
          url: "#",
        },
        {
          title: "Top Assists",
          url: "#",
        },
        {
          title: "Player Profiles",
          url: "#",
        },
      ],
    },
    {
      title: "Stats & Analytics",
      url: "#",
      icon: FaChartBar, // React icon added here
      items: [
        {
          title: "Match Statistics",
          url: "#",
        },
        {
          title: "Top Scorers",
          url: "#",
        },
        {
          title: "Team Performance",
          url: "#",
        },
        {
          title: "Player Performance",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "#",
      icon: FaHome, // React icon added here
    },
    {
      name: "Live Score",
      url: "#",
      icon: MdScoreboard, // React icon added here
    },
  ],
  others: [
    {
      name: "Settings",
      url: "#",
      icon: FaCog, // React icon added here
    },
    {
      name: "Logout",
      url: "#",
      icon: FaSignOutAlt, // React icon added here
    },
  ],
}
function Sidebar({ user, ...props }) {
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
              <SidebarMenuButton asChild>
                <a href={project.url}>
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
          {data.navMain.map((item, index) => (
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
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>{subItem.title}</a>
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
              <SidebarMenuButton asChild>
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
