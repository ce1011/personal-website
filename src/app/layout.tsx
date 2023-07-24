import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paco Au-Yeung',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" className="snap-mandatory snap-y">
      <body className="bg-base-300 text-base-content">
          {children}
      </body>
    </html>
  )
}
