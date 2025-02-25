"use client"
import Sidebar from "@/components/sidemenu/Sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import SearchInput from "./SearchInput"
import ProfileDropdown from "./ProfileDropdown"
import Notification from "./Notification"

function Header() {
  return (
    <header className="shadow-md border-b-2 border-[#605dff] flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
      </div>

      <div className="ml-auto flex items-center gap-2 pr-4">
        <SearchInput />
        <Notification />
        <ProfileDropdown />
      </div>
    </header>
  )
}

export default Header
