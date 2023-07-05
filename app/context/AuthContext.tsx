"use client"
import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'

interface AuthContextProps {
  children: React.ReactNode
}
const AuthContext: FC<AuthContextProps> = ({
    children
}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AuthContext