import type { Metadata } from 'next'
import './styles.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Getting Started with GenAI - 4th Edition',
  description: 'The 4th edition of "Getting Started with Generative AI in Research" is coming soon. Support the course and be the first to get access',
  authors: [{ name: 'Ivan Smirnov' }],
  openGraph: {
    title: 'Getting Started with GenAI',
    description: 'The 4th edition of "Getting Started with Generative AI in Research" is coming soon. Support the course and be the first to get access',
    type: 'website',
    images: ['/preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ibsmirnov',
    images: ['/preview.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QD905QDZ3J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QD905QDZ3J');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
