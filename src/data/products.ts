export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'available' | 'coming-later';
}

export const products: Product[] = [
  {
    id: 'web-platforms',
    title: 'Web Platforms',
    description: 'Full-featured web applications built for specific business needs, from marketplaces to community systems.',
    icon: 'Globe',
    category: 'available'
  },
  {
    id: 'admin-panels',
    title: 'Admin Panels',
    description: 'Custom internal dashboards for managing operations, data, and workflows efficiently.',
    icon: 'LayoutDashboard',
    category: 'available'
  },
  {
    id: 'community-systems',
    title: 'Community Systems',
    description: 'Digital platforms for organizations to manage members, activities, and internal communications.',
    icon: 'Users',
    category: 'available'
  },
  {
    id: 'landing-systems',
    title: 'Landing Page Systems',
    description: 'High-converting landing pages with CMS capabilities for marketing campaigns.',
    icon: 'Layout',
    category: 'coming-later'
  }
];

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  forWho: string;
  output: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'internal-systems',
    title: 'Internal Systems',
    description: 'Custom-built systems for internal operations, workflows, and data management.',
    forWho: 'Organizations and businesses needing tailored operational tools',
    output: 'Fully functional web-based system with admin access and user management'
  },
  {
    id: 'admin-dashboards',
    title: 'Admin Dashboards',
    description: 'Centralized control panels for managing applications, users, and business data.',
    forWho: 'Companies requiring efficient data oversight and control',
    output: 'Dashboard with analytics, user management, and content control features'
  },
  {
    id: 'pwa',
    title: 'Progressive Web Apps',
    description: 'Mobile-friendly web applications that work offline and can be installed on devices.',
    forWho: 'Businesses wanting mobile app experience without app store deployment',
    output: 'Installable web app with offline capabilities and native-like performance'
  },
  {
    id: 'saas-mvp',
    title: 'SaaS MVP',
    description: 'Minimum viable products for software-as-a-service ideas to test market fit.',
    forWho: 'Startups and entrepreneurs validating product concepts',
    output: 'Functional SaaS product with core features, authentication, and payment integration'
  }
];
