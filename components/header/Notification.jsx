import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import NotificationCard from "./NotificationCard"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
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
      <DropdownMenuContent className="w-96 p-0" align="end" forceMount>
        <NotificationCard />
        {/* Render NotificationCard instead of dropdown items */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Notification
