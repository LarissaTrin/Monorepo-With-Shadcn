"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../../components/sidebar";
import { NavMenu, type NavMenuItem } from "./nav-menu";

export interface AppSidebarProps {
  items: NavMenuItem[];
}

export function AppSidebar({ items }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <div className="flex items-center justify-center w-full">
          {/* <AppLogo /> */}
          LOGO
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMenu items={items} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between px-0">
          <span className="text-xs text-muted-foreground sidebar-expanded:block sidebar-collapsed:hidden">
            v0.0.1
          </span>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
