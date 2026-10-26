import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingContactWidget from "@/components/shared/FloatingContactWidget";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingContactWidget />
    </div>
  );
}
