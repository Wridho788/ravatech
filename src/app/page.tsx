import { HeroSection } from '@/components/sections/HeroSection'
import { ProofSection } from '@/components/sections/ProofSection'
import { ProductsOverview } from '@/components/sections/ProductsOverview'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { FounderSection } from '@/components/sections/FounderSection'
import { CTASection } from '@/components/sections/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ravatech — Build. Scale. Evolve.',
  description: 'Digital products built from real problems, not assumptions. Custom web platforms, admin panels, and community systems.',
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProofSection />
      <ProductsOverview />
      <ProcessSection />
      <FounderSection />
      <CTASection />
    </main>
  );
}
