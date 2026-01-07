export interface Experience {
  company: string;
  role: string;
  period: string;
  type?: 'Internship' | 'Full-time' | 'Contract';
  link?: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  link?: string;
}

export interface Project {
  name: string;
  period: string;
  description: string;
  techStack?: string[];
  links: {
    label: string;
    url: string;
  }[];
}