"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { Button } from "./ui/button";

export function NavbarDemo(props: { isAuthed: boolean; isAdmin: boolean }) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Navbar
        className="top-2"
        isAuthed={props.isAuthed}
        isAdmin={props.isAdmin}
      />
    </div>
  );
}

function Navbar({
  className,
  isAuthed,
  isAdmin,
}: {
  className?: string;
  isAuthed: boolean;
  isAdmin: boolean;
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
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
        <HoveredLink href="/meetings/logs" className="text-sm">
          Meeting Logs
        </HoveredLink>
        <HoveredLink href="/calendar" className="text-sm">
          Calendar
        </HoveredLink>

        {isAdmin && (
          <HoveredLink href="/admin" className="text-sm">
            Dashboard
          </HoveredLink>
        )}
        {!isAuthed ? (
          <Button variant={"outline"} asChild>
            <HoveredLink href="/api/auth/signin" className="text-sm">
              Sign In
            </HoveredLink>
          </Button>
        ) : (
          <Button variant={"outline"} asChild>
            <HoveredLink href="/api/auth/signout" className="text-sm">
              Sign Out
            </HoveredLink>
          </Button>
        )}
      </Menu>
    </div>
  );
}
