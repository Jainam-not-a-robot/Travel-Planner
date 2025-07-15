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
    <SidebarContent className="bg-[#1e293b]">
      <SidebarGroup>
        <SidebarGroupLabel className="text-white h-12 text-2xl mx-auto ">Navigate</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="flex flex-col items-center justify-center gap-2 py-4 w-full ">
            {menuItems.map((item) => {
              const active = isActive(item.url);
              return (
                <SidebarMenuItem
                  key={item.title}
                  className={`
                    ${active ? 'bg-[#EAEAEA] text-black' : 'text-white hover:text-black hover:bg-[#EAEAEA] hover:opacity-80'}
                    transition-colors duration-150 h-8 w-full px-4 rounded-lg
                  `}
                >
                  <SidebarMenuButton asChild className='hover:bg-#FFFFFFCC'>
                    <Link href={item.url}>
                      <div className="flex items-center gap-2 w-full">
                        <img
                          src={item.png}
                          alt={item.icon}
                          className="w-6 h-6 object-contain opacity-80 rounded-full"
                        />
                        <span className="transition-colors duration-150 hover:text-black">{item.title}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
)
}
