import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  image: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'App' | 'Marketing' | 'Design';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  company: string;
}
