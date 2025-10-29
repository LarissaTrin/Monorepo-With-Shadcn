"use client";

import * as React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/sidebar";
import { Separator } from "../../components/separator";
import { AppSidebar, type AppSidebarProps } from "./app-sidebar";

// 1. Defina as props para o seu novo "Shell"
export interface AppShellProps {
  items: AppSidebarProps["items"];
  children: React.ReactNode;
}

export function AppShell({ items, children }: AppShellProps) {
  const [open, setOpen] = React.useState(false);

  return (
    // 3. O Provider controla o estado
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <AppSidebar items={items} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            aaaaaaaaaaaaa
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
