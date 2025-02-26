import React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import Header from "@/components/header/Header"
import Sidebar from "@/components/sidemenu/Sidebar"
const Settings = () => {
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

export default Settings
