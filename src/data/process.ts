export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  number: number;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'problem-understanding',
    number: 1,
    title: 'Problem Understanding',
    description: 'We start by deeply understanding your actual problem, not just surface-level requirements. This includes workflow analysis and user needs assessment.'
  },
  {
    id: 'system-design',
    number: 2,
    title: 'System Design',
    description: 'Based on the problem, we design a practical system architecture. Technology choices are driven by requirements, not trends.'
  },
  {
    id: 'build-iterate',
    number: 3,
    title: 'Build & Iterate',
    description: 'We build incrementally with regular check-ins. Changes are expected and incorporated as understanding deepens during development.'
  },
  {
    id: 'launch-maintain',
    number: 4,
    title: 'Launch & Maintain',
    description: 'After deployment, we ensure stability and provide ongoing support. Systems are built to be maintainable and scalable as needs evolve.'
  }
];
