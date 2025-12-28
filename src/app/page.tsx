import { HeroSection } from '@/components/sections/HeroSection'
import { ProofSection } from '@/components/sections/ProofSection'
import { ProductsOverview } from '@/components/sections/ProductsOverview'
import { CredibilitySection } from '@/components/sections/CredibilitySection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { FounderSection } from '@/components/sections/FounderSection'
import { CTASection } from '@/components/sections/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ravatech — Digital Products That Actually Get Used',
  description: 'Building real-world digital systems. From internal tools to public platforms, designed and built with real users in mind.',
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProofSection />
      <ProductsOverview />
      <CredibilitySection />
      <ProcessSection />
      <FounderSection />
      <CTASection />
    </main>
  );
}
