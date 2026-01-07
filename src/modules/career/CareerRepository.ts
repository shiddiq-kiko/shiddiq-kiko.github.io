import { Experience, Education, Project } from './types';

export const experienceData: Experience[] = [
  {
    company: "SALT",
    role: "Backend Engineer",
    period: "2021 – PRESENT",
    type: "Full-time",
    description: "Help a team which consist of Backend Developer and Frontend Developer using Golang or Java to finish a project as needed from planning stage until delivering and maintaining stage."
  },
  {
    company: "SALT (TELKOMSEL)",
    role: "Backend Engineer",
    period: "2019 – PRESENT",
    type: "Contract",
    description: "Help a team which consist of Backend Developer and Frontend Developer to deliver a complex development for projects such as PEGASUS, and Univiz Back End."
  },
  {
    company: "edConnect",
    role: "Software Engineer",
    period: "2020 – 2021",
    type: "Full-time",
    description: "Develop, enhance, and maintain web-based School Management System portal for PT. edConnect Indonesia"
  },
  {
    company: "PT Rifan Financindo Berjangka",
    role: "Internship",
    period: "Mar-May 2019",
    type: "Internship",
    link: "https://www.rf-berjangka.com/"
  },
   {
    company: "PT Dok Perkapalan Surabaya",
    role: "Internship",
    period: "Oct-Nov 2016",
    type: "Internship",
    link: "https://dok-sby.id/"
  }
];

export const educationData: Education[] = [
  {
    institution: "Muhammadiyah University of Surakarta",
    degree: "Mechanical Engineering",
    period: "2013-2018",
    link: "https://www.ums.ac.id/"
  },
  {
    institution: "Hacktiv8",
    degree: "Full Stack Programming",
    period: "2019",
    link: "https://hacktiv8.com/"
  }
];

export const projectData: Project[] = [
  {
    name: "entertain-me",
    period: "03/2020 – 03/2020",
    description: "Movie & Tv series mobile app build with React-native",
    techStack: ["React Native"],
    links: [
      { label: "Github", url: "https://github.com/shiddiq-kiko/entertain-me" }
    ]
  },
  {
    name: "NimeList",
    period: "03/2020 – 03/2020",
    description: "Japanese sub-culture web application build with React.js.",
    techStack: ["React.js", "Firebase"],
    links: [
      { label: "Website", url: "https://nimelist.firebaseapp.com" },
      { label: "Github (Client)", url: "https://github.com/shiddiq-kiko/react-challenge" },
      { label: "Github (Server)", url: "https://github.com/shiddiq-kiko/react-challenge-server" }
    ]
  }
];

export class CareerRepository {
  getExperience(): Experience[] {
    return experienceData;
  }
  getEducation(): Education[] {
    return educationData;
  }
  getProjects(): Project[] {
    return projectData;
  }
}