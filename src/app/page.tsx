import { Hero } from "@/components/sections/Hero";
import { Framework } from "@/components/sections/Framework";
import { Markets } from "@/components/sections/Markets";
import { Hypothesis } from "@/components/sections/Hypothesis";
import { Solution } from "@/components/sections/Solution";
import DriverPulse from "@/components/sections/DriverPulse";
import Implementation from "@/components/sections/Implementation";
import Plan from "@/components/sections/Plan";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Framework />
      <Markets />
      <Hypothesis />
      <Solution />
      <DriverPulse />
      <Implementation />
      <Plan />
      <Footer />
    </main>
  );
}
