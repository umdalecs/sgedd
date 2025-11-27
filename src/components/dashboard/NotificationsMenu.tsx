import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NotificationsMenu({
  notificaciones,
}: {
  notificaciones: { id: number; tipo: string; texto: string }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Bell className="text-primary-foreground size-fit" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 bg-sidebar-border space-y-2"
      >
        <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-accent-foreground" />

        {notificaciones.length > 0 ? (
          notificaciones.map((n) => (
            <DropdownMenuItem
              className="bg-primary-foreground rounded-2xl border-b-3 border-b-primary data-highlighted:bg-primary data-highlighted:text-primary-foreground"
              key={n.id}
            >
              {n.texto}
            </DropdownMenuItem>
          ))
        ) : (
          <div className="text-sm text-gray-500 p-2">No hay notificaciones</div>
        )}

        <DropdownMenuSeparator />
        <Link href="/dashboard/notificaciones">
          <DropdownMenuItem className="bg-primary rounded-lg justify-center data-highlighted:bg-secondary data-highlighted:text-primary-foreground">
            <p className="text-sidebar-primary-foreground font-bold">
              Ver todas
            </p>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
