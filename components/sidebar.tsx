"use client";

import { cn } from "@/lib/utils";
import {
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Bot,
  FileText,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

//  메뉴 목록 선언
const routes = [
  {
    label: "대시보드",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "대화 생성기",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Chat Stream",
    icon: Bot,
    color: "text-pink-700",
    href: "/chat",
  },
  {
    label: "Chat PDF  ",
    icon: FileText,
    color: "text-pink-700",
    href: "/pdf",
  },
  {
    label: "이미지 생성기",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "설정",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gradient-to-b from-gray-900 to-gray-600 text-white">
      <div className="px-3 py-3 flex-1">
        <Link href="/dashboard" className="flex items-center pl-6 mb-16">
          <div className="relative h-8 w-8 mr-4">
            <Image sizes="none" fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            AI assist
          </h1>
        </Link>
        {/* //  Menu Link 들의 목록 나열 */}
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                // 현재 선택되어진 Menu Link 구분 CSS
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-7 w-5 mr-5", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
