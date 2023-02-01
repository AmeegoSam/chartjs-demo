"use client"
import { DesignLibraryProvider, mainTheme } from "humi-design";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <DesignLibraryProvider theme={mainTheme}>
          {children}
        </DesignLibraryProvider>
      </body>
    </html>
  );
}
