export interface Profile {
  name: string;
  nickname: string;
  role: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  introduction: string; // Old About Me
  overview: string; // New PDF Overview
  expertise: string[]; // General Professional Expertise
  techStack: string[]; // Programming languages, frameworks, tools
  languages: string[]; // Human languages (e.g., English, Indonesian)
  linkedin: string;
  github: string;
}