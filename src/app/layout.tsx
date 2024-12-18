import type { Metadata } from "next";
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme/theme-provider'
import "./globals.css";
import { ReactQueryProvider } from "@/lib/queryProvider";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from 'sonner';
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "FinBrief",
  description: "FinBrief is a financial news platform that aggregates and summarizes the latest financial news and trends you want to know.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en" suppressHydrationWarning={true}>
        <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
          )}
          suppressHydrationWarning={true}
        >
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ReactQueryProvider>
          <Toaster richColors={true} duration={2000} />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
