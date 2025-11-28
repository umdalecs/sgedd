"use client";

import { Key, LogOut, Settings, UserRound } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { logout } from "@/lib/actions/auth";
import Link from "next/link";

export default function UserMenu() {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <UserRound className="text-primary-foreground size-fit" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 bg-sidebar-border space-y-2"
      >
        <DropdownMenuLabel className="text-lg font-bold">
          Perfil
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-accent-foreground" />

        <Link href="">
          <DropdownMenuItem className="bg-primary-foreground rounded-lg border-t-1/2 border-l-1/2 border-b-3 border-primary hover:bg-accent">
            <Settings className="text-primary size-fit" />
            Cambiar datos del perfil
          </DropdownMenuItem>
        </Link>
        <Link href="/dashboard/change-password">
          <DropdownMenuItem className="bg-primary-foreground rounded-lg border-t-1/2 border-l-1/2 border-b-3 border-primary hover:bg-accent">
            <Key className="text-primary size-fit" />
            Cambiar contraseña
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="bg-primary-foreground rounded-lg border-t-1/2 border-l-1/2 border-b-3 border-primary hover:bg-accent"
          onClick={handleLogout}
        >
          <LogOut className="text-primary size-fit" />
          Cerrar Sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}