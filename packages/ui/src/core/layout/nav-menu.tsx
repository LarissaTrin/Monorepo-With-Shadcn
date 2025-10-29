"use client";

// 1. IMPORTE OS ÍCONES REAIS AQUI
import {
  type LucideIcon,
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/sidebar";

export interface NavMenuItem {
  title: string;
  url: string;
  icon: string;
  isActive?: boolean;
}

const iconMap: Record<string, LucideIcon | undefined> = {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
};

export function NavMenu({ items }: { items: NavMenuItem[] }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const IconComponent = iconMap[item.icon];

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                tooltip={item.title}
              >
                <a href={item.url}>
                  {IconComponent ? <IconComponent /> : null}
                  <span className="sidebar-expanded:block sidebar-collapsed:hidden">
                    {item.title}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
