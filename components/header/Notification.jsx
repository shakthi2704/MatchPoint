import React from "react"
import { Button } from "@/components/ui/button"
import NotificationCard from "./NotificationCard"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Bell } from "lucide-react"
const Notification = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Bell />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" p-0" align="end" forceMount>
        <NotificationCard />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Notification
