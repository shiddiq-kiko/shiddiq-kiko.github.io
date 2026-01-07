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
  expertise: string[]; // New PDF Field of Expertise
}