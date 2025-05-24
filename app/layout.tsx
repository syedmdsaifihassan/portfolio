import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'syedmdsaifihassan',
  description: 'Created with ❤️',
  generator: 'syedmdsaifihassan.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
