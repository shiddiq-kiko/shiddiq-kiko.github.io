import { Profile } from './types';
import avatarImage from '../../assets/pp.jpg';

export const profileData: Profile = {
  name: "Muhammad Ash Shiddieqy Kartiko",
  nickname: "Kiko",
  role: "Software Engineer",
  birthPlace: "Jakarta",
  birthDate: "18 June 1995",
  address: "Mustika Park Place Cluster Brazia, JL Mawar Blok C18/01, Burangkeng, Kab. Bekasi",
  email: "kikokartiko@gmail.com",
  phone: "081288062534",
  linkedin: "https://www.linkedin.com/in/muhammad-ash-shiddieqy-kartiko-a960b41a5/",
  github: "https://github.com/shiddiq-kiko",
  avatarUrl: avatarImage,
  introduction: "Hello, my name is Muhammad Ash Shiddieqy Kartiko but my friend call me Kiko, your friendly Engineer",
  overview: "Graduated as a Mechanical Engineer from Muhammadiyah University of Surakarta, Kartiko's passion has always been in technology, which led him to change his career path to become a Software Developer and take a Fullstack Developer course at Hacktiv8. After finishing the bootcamp, he joined one of Indonesia's leading education CMS pioneers to hone his development skills. A year later, his desire to gain greater experience led him to join SALT as a Backend Engineer. At SALT Indonesia, he made significant contributions to both the team and the company.",
  expertise: [
    "Technology",
    "SDLC",
    "Agile Scrum",
    "Vibe Coding",
    "AI Prompting",
    "Education",
    "Telecommunication",
    "Financial Services",
    "Technical Consultant",
    "Technical Architecture",
    "Software Development",
    "CICD",
    "Innovation"
  ]
};

export class ProfileRepository {
  getProfile(): Profile {
    return profileData;
  }
}