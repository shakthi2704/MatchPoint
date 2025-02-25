"use client"
import LiveScoreCard from "@/components/dashboard/LivescoreCard"
import Header from "@/components/header/Header"
import Sidebar from "@/components/sidemenu/Sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const Page = () => {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-[70%_30%]">
            <div className="aspect-video rounded-xl bg-muted/50" />
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

export default Page
