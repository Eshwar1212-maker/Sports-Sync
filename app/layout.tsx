
import Providers from './components/Providers'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'
import ThemeProviders from './context/ThemeProviders'
 

export const metadata = {
  title: 'Synced',
  description: 'Workout/productvity app for athletes and teams',
  icons: {
    shortcut: "../app/icon.jpeg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
        <ThemeProviders>
          <Providers>
            {children}
          </Providers>
          </ThemeProviders>
          <ToasterContext />
        </AuthContext>
      </body>
    </html>
  )
}
