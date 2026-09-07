import type { FAQItem } from '../types';

export const FAQS: FAQItem[] = [
  {
    question: 'Who can join XeTech Club?',
    answer: 'Any student enrolled at the university with an interest in technology, cloud infrastructure, DevOps, automation, or AI can join. We welcome beginners as well as experienced coders across all branches and academic years.',
    category: 'Membership',
  },
  {
    question: 'Do I need prior experience in Cloud or DevOps to join?',
    answer: 'No! XeTech is built on peer mentorship. We start from foundational topics (Linux, Git, command line) in Stage 01 of our learning roadmap before advancing to containers, Kubernetes, and AI agents.',
    category: 'Learning',
  },
  {
    question: 'Are club events, workshops, and cloud sandboxes free for students?',
    answer: 'Yes, 100% of our regular workshops, hackathons, and learning resources are free for students. Cloud lab credits are provided via our educational partner grants and university allocations.',
    category: 'Membership',
  },
  {
    question: 'How do I register for the featured CloudForge workshop?',
    answer: 'Click the "Register" button on the CloudForge card or navigation bar. Seats are allocated on a first-come, first-served basis with priority given to students committed to completing all hands-on modules.',
    category: 'Events',
  },
  {
    question: 'How does XeTech bridge classroom curriculum to industry needs?',
    answer: 'University curricula often focus on theoretical algorithms. XeTech bridges the gap by immersing students in modern production tools: Docker, Kubernetes, Terraform, CI/CD pipelines, and Agentic AI workflows used daily by leading tech companies.',
    category: 'Curriculum',
  },
  {
    question: 'Can I propose a project or lead a technical study group?',
    answer: 'Absolutely! Our project incubator welcomes student-led initiatives. Pitch your architecture or idea to the domain leads or apply to become a Core Squad Contributor.',
    category: 'Projects',
  },
];
