import Providers from "./components/Providers";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import ThemeProviders from "./context/ThemeProviders";

export const metadata = {
  title: "Synced",
  description: "Workout/productvity app for athletes and teams",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpeg" type="image/jpeg" sizes="any" />
      </head>
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
