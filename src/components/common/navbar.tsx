"use client"

import React from "react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ChevronDownIcon,
  BellIcon,
  MessageCircleIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export type NavbarProps = {
  header:
    | string
    | {
        extra?: React.ReactNode;
        children?: React.ReactNode;
      };
  message: number;
  notification: number;
  login: boolean;
  cart: number;
};

export function Navbar(props: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const { header, message, notification, login, cart } = props;
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full bg-white transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-none"} `}
    >
      <div className="grid grid-cols-3 gap-4 min-h-[80] px-2 lg:px-16">
        <div className="content-evenly">
          <img src="/avatars/logo.svg" alt=""  className="w-50"/>
        </div>
        <div className="relative w-full content-evenly items-center">
          <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            type="Search"
            id="form-rhf-demo-title"
            placeholder="search"
            autoComplete="on"
            className="rounded-[16] pl-10"
          />
        </div>
        {login ? (
          <div className="flex flex-1 items-center justify-end text-right">
            <div className="relative ml-1">
              <Button
                variant="ghost"
                size="icon-lg"
                className="rounded-[25px] pr-0 pl-0"
              >
                <ShoppingCartIcon />
              </Button>
              <Badge className="absolute -top-0 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF0000] p-0 text-[10px]">
                {cart}
              </Badge>
            </div>
            <div className="relative ml-1">
              <Button
                variant="ghost"
                size="icon-lg"
                className="rounded-[25px] pr-0 pl-0"
              >
                <MessageCircleIcon />
              </Button>
              <Badge className="absolute -top-0 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF0000] p-0 text-[10px]">
                {message}
              </Badge>
            </div>
            <div className="relative mr-4 ml-1">
              <Button
                variant="ghost"
                size="icon-lg"
                className="rounded-[25px] pr-0 pl-0"
              >
                <BellIcon />
              </Button>
              <Badge className="absolute -top-0 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF0000] p-0 text-[10px]">
                {notification}
              </Badge>
            </div>
            <Avatar className="size-[40px] mr-1">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 mr-8 w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Keyboard shortcuts
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    New Team
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Button className="min-w-[80px] border-[#639F44] bg-[#639F44] text-[#ffffff] transition-colors duration-200 hover:border-[#4E7F35] hover:bg-[#4E7F35]">
            <Link href="/dashboard/patienForms">Sign in</Link>
          </Button>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}
