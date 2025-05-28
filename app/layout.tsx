import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from '@/providers/react-query/provider';
import AppThemeProvider from "@/providers/theme/provider";


export const metadata: Metadata = {
  title: {default:"Flyweis Task",template:`%s - Flyweis Task`},
  description: "Created by Tamilarasan Elumalai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>
          <QueryProvider>
            {children}
            
          </QueryProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
