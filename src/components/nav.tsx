"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "./ui/navbar-menu";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Landing</HoveredLink>
            <HoveredLink href="/#what">What do we do</HoveredLink>
            <HoveredLink href="/#initiatives"> Initiatives</HoveredLink>
            <HoveredLink href="/#apply">Apply</HoveredLink>
          </div>
          </MenuItem>
        <HoveredLink href="/calender" className="text-sm">
          Calender
        </HoveredLink>
      </Menu>
    </div>
  );
}