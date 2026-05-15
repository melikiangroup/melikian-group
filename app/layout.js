import './globals.css'

export const metadata = {
  title: 'M',
  description: 'By referral only.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-stone-950 text-stone-100 antialiased selection:bg-stone-100 selection:text-stone-950">
      <body className="overflow-hidden">{children}</body>
    </html>
  )
}