import CardBase from "@/components/common/CardBase";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getNotifications } from "@/lib/actions/notifications";
import { MessageCircleQuestionIcon } from "lucide-react";

export default async function Page() {
  const notifications = await getNotifications();

  return (
      <CardBase titulo="Notificaciones" className="bg-primary *:overflow-hidden shadow-lg">
        <CardContent className="p-0 bg-white">
          <ScrollArea className="h-[450px]">
            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => {
                return (
                  <div key={notification.id} className="flex items-start space-x-4 p-4">
                    <div className="shrink-0">
                      <div className="p-2 bg-slate-100 rounded-full">
                        <MessageCircleQuestionIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="grow min-w-0">
                      <p className="font-semibold text-sm">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                    </div>
                    <div className="shrink-0 ml-auto">
                      <p className="text-xs text-muted-foreground whitespace-nowrap">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </CardBase>
  );
}