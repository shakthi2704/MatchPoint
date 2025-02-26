import React from "react"
import Header from "@/components/header/Header"
import Sidebar from "@/components/sidemenu/Sidebar"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
const Leagues = () => {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mx-2 my-4 overflow-x-hidden"></div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Leagues
