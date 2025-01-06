'use client';
import localFont from "next/font/local";
import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider } from '@/context/theme/ThemeContext';
import AuthProvider from '@/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StyledComponentsRegistry>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <AuthProvider>
                {children}
              </AuthProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
