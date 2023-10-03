import Providers from "./components/Providers";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import ThemeProviders from "./context/ThemeProviders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synced",
  description: "Workout/productvity app for athletes and teams",
  icons: {
    icon: "/logotwo.jpeg" 
   }

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ThemeProviders>
            <Providers>{children}</Providers>
          </ThemeProviders>
          <ToasterContext />
        </AuthContext>
      </body>
    </html>
  );
}