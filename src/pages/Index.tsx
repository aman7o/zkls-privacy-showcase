import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Partners } from "@/components/home/Partners";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <main className="container mx-auto">
        <Hero />
        <Features />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;