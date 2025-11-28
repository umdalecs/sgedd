import { type NextRequest } from "next/server";
import { checkSession } from "@/lib/supabase/checkSession";

export async function proxy(request: NextRequest) {
  return await checkSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (img, pdfs, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|img|pdfs|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
