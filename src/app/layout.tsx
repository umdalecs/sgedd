import type { Metadata } from "next";
// NOTE: TS marks this as not found fsr
import "./globals.css";

export const metadata: Metadata = {
  title: "SGEDD",
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es">
      <body className='antialiased'>
        <article className=""> 
          {children}
        </article>
      </body>
    </html>
  );
}
