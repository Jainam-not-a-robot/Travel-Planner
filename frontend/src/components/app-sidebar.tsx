'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const menuItems = [
  {
    title: 'Home',
    url: '/',
    icon: 'Home',
    png: '/home_icon.jpg',
  },
  {
    title: 'Train Options',
    url: '/train',
    icon: 'Train',
    png: '/train-icon.jpg',
  },
  {
    title: 'Flight Options',
    url: '/flight',
    icon: 'Flight',
    png: '/flight_icon.jpg',
  },
  {
    title: 'Places',
    url: '/places',
    icon: 'Places',
    png: '/places_icon.jpeg',
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (url: string) => pathname === url;

  return (
    <Sidebar>
      <SidebarContent className="bg-[#507DBC]">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={isActive(item.url) ? 'bg-[#EAEAEA] opacity-90' : ''}
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <div className="flex items-center gap-2">
                        <img
                          src={item.png}
                          alt={item.icon}
                          className="w-6 h-6 object-contain opacity-80 rounded-full"
                        />
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
