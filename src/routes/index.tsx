import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { LearningPath } from "@/components/landing/LearningPath";
import { ProductMaterials } from "@/components/landing/ProductMaterials";
import { Benefits } from "@/components/landing/Benefits";
import { Audience } from "@/components/landing/Audience";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Bonuses } from "@/components/landing/Bonuses";
import { Offer } from "@/components/landing/Offer";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";

const title = "Bê a Bá da Leitura | Tio Beto Educa";
const description =
  "Trilha de atividades em PDF para professores alfabetizadores desenvolverem a leitura das crianças passo a passo. Pronta para imprimir e aplicar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* Espaço reservado: Pixel da Meta / Google Analytics / eventos de conversão */}
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <LearningPath />
      <ProductMaterials />
      <Benefits />
      <Audience />
      <HowItWorks />
      {/* Espaço reservado: vídeo de apresentação e depoimentos reais */}
      <Bonuses />
      <Offer />
      <Guarantee />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
