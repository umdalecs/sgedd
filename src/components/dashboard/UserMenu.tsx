import { UserRound } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";

export default function UserMenu() {
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
        <DropdownMenuLabel>Perfil</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-accent-foreground" />
        <DropdownMenuItem className="bg-primary-foreground rounded-2xl border-b-3 border-b-primary data-highlighted:bg-primary data-highlighted:text-primary-foreground">
          Cambiar datos del perfil
        </DropdownMenuItem>
        <Link href="/dashboard/change-password">
          <DropdownMenuItem className="bg-primary-foreground rounded-2xl border-b-3 border-b-primary data-highlighted:bg-primary data-highlighted:text-primary-foreground">
            Cambiar contraseña
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
