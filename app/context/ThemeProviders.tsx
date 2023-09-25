"use client"
import { ThemeProvider } from "next-themes"

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider enableSystem={false} attribute="class">
			{children}
		</ThemeProvider>
	)
}

export default ThemeProviders