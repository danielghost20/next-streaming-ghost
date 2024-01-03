import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ghost stream',
  description: 'Pasa momentos de entretenimiento dentro de la plataforma de gaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          forcedTheme='dark'
          storageKey='ghost-theme'
          >
          <Toaster position='bottom-center' theme='light'/>
        {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}
