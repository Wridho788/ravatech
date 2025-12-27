export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  status: 'Live' | 'In Use' | 'Coming Later';
  context: string;
  problem: string;
  solution: string;
  techStack: string[];
  role: string;
  impact: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'lapakbenz',
    title: 'LapakBenz',
    subtitle: 'Online Automotive Marketplace Platform',
    status: 'Live',
    context: 'LapakBenz is an automotive marketplace connecting sellers and buyers in the vehicle market. The platform needed a reliable system to handle listings, user interactions, and transaction coordination.',
    problem: 'Manual listing processes, lack of organized vehicle database, and difficulty in buyer-seller communication were creating friction in the marketplace.',
    solution: 'Built a full-stack web platform with vehicle listing management, search and filtering system, user authentication, and integrated communication tools. The system handles both frontend user experience and backend data management.',
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    role: 'End-to-end development: system architecture, frontend implementation, backend API, database design, and deployment.',
    impact: 'Platform is live and actively used for vehicle listings and marketplace operations.',
    link: 'https://lapakbenz.com'
  },
  {
    id: 'lpj-ulu-tarukim',
    title: 'LPJ Ulu Tarukim Siantar',
    subtitle: 'Government Organization Management System',
    status: 'In Use',
    context: 'LPJ Ulu Tarukim Siantar is a government organization that required a digital system for internal administrative processes and community coordination.',
    problem: 'Paper-based workflows, inconsistent data management, and lack of centralized information system were slowing down organizational operations.',
    solution: 'Developed a custom admin panel and community management system. The platform includes member registration, document management, activity tracking, and reporting features tailored to organizational needs.',
    techStack: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Material UI'],
    role: 'Full system development: requirement analysis, system design, implementation, user training, and ongoing maintenance.',
    impact: 'System actively used by organization staff for daily administrative operations and community management.',
  }
];
