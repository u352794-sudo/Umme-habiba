export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  tools: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  duration: string;
  image: string;
  overview: string;
  challenge: string;
  strategy: string[];
  results: { label: string; value: string }[];
  deliverables: string[];
  toolsUsed: string[];
  quote?: string;
}

export interface ExperienceItem {
  institution: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  skillsGained: string[];
}
