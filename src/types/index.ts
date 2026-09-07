export interface Domain {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  technologies: string[];
  gradient: string;
  topics: string[];
  sampleProject: string;
}

export interface ClubEvent {
  id: string;
  title: string;
  type: 'Workshop' | 'Hackathon' | 'Bootcamp' | 'Tech Talk' | 'Masterclass';
  date: string;
  time: string;
  venue: string;
  status: 'Upcoming' | 'Registration Open' | 'Featured' | 'Completed';
  description: string;
  pipeline?: string[];
  tags: string[];
  featured?: boolean;
  registrationOpen: boolean;
  speaker?: {
    role: string;
    organization: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: 'Cloud' | 'DevOps' | 'AI' | 'Automation' | 'Platform';
  tagline: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  metrics: string;
  featured?: boolean;
}

export interface RoadmapStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  milestones: string[];
  tools: string[];
  outcomes: string;
}

export interface TeamMember {
  id: string;
  role: string;
  title: string;
  category: 'Faculty' | 'Lead' | 'Core' | 'Mentor';
  department: string;
  bio: string;
  focus: string[];
  placeholderLabel: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Learning' | 'Workshop' | 'Cloud Labs' | 'Docs' | 'GitHub' | 'Tools' | 'Guides';
  description: string;
  format: 'PDF' | 'Repository' | 'Interactive Lab' | 'Guide' | 'Cheatsheet';
  tags: string[];
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
