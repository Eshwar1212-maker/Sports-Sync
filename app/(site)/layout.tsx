import Navbar from "./components/navbar/Navbar";
import Footer from "./components/landing/Footer";

export default function LandingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
