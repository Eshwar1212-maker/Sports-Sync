
import Providers from './components/Providers'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'
import ThemeProviders from './context/ThemeProviders'
import ActiveStatus from './calender/components/ActiveStatus'
 

export const metadata = {
  title: 'BasketballFit',
  description: 'Workout/productvity app for athlets',
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
            <ActiveStatus />
            {children}
          </Providers>
          </ThemeProviders>
          <ToasterContext />
        </AuthContext>
      </body>
    </html>
  )
}
