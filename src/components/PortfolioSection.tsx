"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"


const portfolioData = {
  web: {
    saas: [
      {
        title: "PickTime",
        description: "Platform SaaS untuk manajemen waktu dan penjadwalan meeting",
        image: "/portfolio/web/saas.jpg",
        tech: ["Next.js", "Tailwind", "Supabase"],
        link: "#"
      },
      {
        title: "TaskTugas",
        description: "SaaS untuk kolaborasi dan manajemen tugas",
        image: "/portfolio/web/saas-tugas.jpg",
        tech: ["React", "Firebase"],
        link: "#"
      }
    ],
    ecommerce: [
      {
        title: "TradeWave",
        description: "Marketplace e-commerce modern",
        image: "/portfolio/web/marketplace-modern.jpg",
        tech: ["Next.js", "Stripe", "Tailwind"],
        link: "#"
      }
    ],
    blockchain: [
      {
        title: "Neo Armory",
        description: "Platform NFT berbasis blockchain",
        image: "/portfolio/web/nft-marketplace.jpg",
        tech: ["Web3.js", "Solidity", "Next.js"],
        link: "#"
      }
    ],
    landing: [
      {
        title: "Ravatech Landing",
        description: "Company profile website",
        image: "/portfolio/web/portfolio-company.png",
        tech: ["Next.js", "Tailwind"],
        link: "#"
      }
    ]
  },
  mobile: {
    ecommerce: [
      {
        title: "QuickBuy Mobile",
        description: "Aplikasi e-commerce dengan UI modern",
        image: "/portfolio/mobile/QuickBuyMobile.jpg",
        tech: ["React Native", "Redux", "Firebase"],
        link: "#"
      }
    ],
    web3: [
      {
        title: "ORIX",
        description: "Dompet NFT dengan fitur secure wallet dan gallery",
        image: "/portfolio/mobile/orix.jpg",
        tech: ["Flutter", "Web3Dart"],
        link: "#"
      }
    ],
    internal: [
      {
        title: "FieldOps",
        description: "Aplikasi internal untuk field reporting dan checklist",
        image: "/portfolio/mobile/FieldOps.jpg",
        tech: ["React Native", "Realm DB"],
        link: "#"
      }
    ]
  }
}

interface PortfolioItem {
  title: string;
  description: string;
  image: any;
  tech: string[];
  link: string;
}

export const PortfolioGrid = ({ items }: { items: PortfolioItem[] }) => {
  return (
    <motion.div
      key={JSON.stringify(items)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default function PortfolioSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="mb-0"></div>
          <h2 className="text-4xl mb-4 text-gray-800 text-center">Our Work</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="saas" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-3 mb-8 p-2 bg-white rounded-2xl shadow-sm">
            <TabsTrigger className="px-4 py-2 rounded-xl transition-all hover:bg-blue-50" value="saas">SaaS</TabsTrigger>
            <TabsTrigger className="px-4 py-2 rounded-xl transition-all hover:bg-blue-50" value="ecommerce">Web E-Commerce</TabsTrigger>
            <TabsTrigger className="px-4 py-2 rounded-xl transition-all hover:bg-blue-50" value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger className="px-4 py-2 rounded-xl transition-all hover:bg-blue-50" value="landing">Landing Page</TabsTrigger>
            <TabsTrigger className="px-4 py-2 rounded-xl transition-all hover:bg-blue-50" value="mobile-ecommerce">Mobile E-Commerce</TabsTrigger>
            <TabsTrigger className="px-4 py-2 rounded-xl transition-all hover:bg-blue-50" value="mobile-web3">Mobile Web3</TabsTrigger>
            <TabsTrigger className="px-4 py-2 rounded-xl transition-all hover:bg-blue-50" value="mobile-internal">Internal Apps</TabsTrigger>
          </TabsList>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <AnimatePresence mode="wait">
              <TabsContent value="saas">
                <PortfolioGrid items={portfolioData.web.saas} />
              </TabsContent>
              <TabsContent value="ecommerce">
                <PortfolioGrid items={portfolioData.web.ecommerce} />
              </TabsContent>
              <TabsContent value="blockchain">
                <PortfolioGrid items={portfolioData.web.blockchain} />
              </TabsContent>
              <TabsContent value="landing">
                <PortfolioGrid items={portfolioData.web.landing} />
              </TabsContent>
              <TabsContent value="mobile-ecommerce">
                <PortfolioGrid items={portfolioData.mobile.ecommerce} />
              </TabsContent>
              <TabsContent value="mobile-web3">
                <PortfolioGrid items={portfolioData.mobile.web3} />
              </TabsContent>
              <TabsContent value="mobile-internal">
                <PortfolioGrid items={portfolioData.mobile.internal} />
              </TabsContent>
            </AnimatePresence>
          </div>
        </Tabs>
    </section>
  );
}
