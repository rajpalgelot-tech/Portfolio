import CustomCursor from "@/components/CustomCursor";
import HexCanvas from "@/components/HexCanvas";
import ScrollProgress from "@/components/ScrollProgress";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <main>
      <HexCanvas />
      <CustomCursor />
      <ScrollProgress />
      <Hero />
      <About />
      <Tech />
    </main>
  );
}
