import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300'], 
  variable: '--font-serif',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'M',
  description: 'By referral only.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} bg-stone-950 text-stone-100 antialiased`}>
      <body className="overflow-hidden">{children}</body>
    </html>
  )
}
