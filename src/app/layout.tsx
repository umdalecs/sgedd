import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGEDD",
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es" className="size-full">
      <body className='antialiased size-full'>
        {children}
      </body>
    </html>
  );
}
