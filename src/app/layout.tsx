'use client';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-context';
import TailwindIndicator from '@/components/theme/tailwind-indicator';
import MainNavigation from '@/components/navigation/main-navigation';
import Template from './template';

import './globals.css';

const inter = Poppins({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
});

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <MainNavigation />
          <main>
            <Template>{children}</Template>
          </main>
        </ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}
