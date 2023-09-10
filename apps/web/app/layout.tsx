
import React from "react";
import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import I18nProvider from './context'
import {HeaderMain} from './components/Header'
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
     <I18nProvider>
      <HeaderMain text="Web" />
        {children}
      </I18nProvider>
        </body>
    </html>
  );
}


