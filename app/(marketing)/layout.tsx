import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2.5 focus:bg-zinc-950 focus:text-white focus:rounded-xl focus:text-xs focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
