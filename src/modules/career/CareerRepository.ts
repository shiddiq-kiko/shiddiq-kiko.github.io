import { Experience, Education, Project } from './types';

export const experienceData: Experience[] = [
  {
    company: "SALT",
    role: "Backend Engineer",
    period: "2021 – PRESENT",
    type: "Full-time",
    link: "https://salt.id/id-en",
    description: "Help a team which consist of Backend Developer and Frontend Developer using Golang or Java to finish a project as needed from planning stage until delivering and maintaining multiple complex Telkomsel projects such as Telkomsel Mobile Loan, Tsurvey, Maxstream, Telkomsel Smart Pay, and multiple Telkomsel internal dashboard."
  },
  {
    company: "edConnect",
    role: "Software Engineer",
    period: "2020 – 2021",
    type: "Full-time",
    link: "https://edconnect.co.id/",
    description: "Develop, enhance, and maintain web-based School Management System portal based on client requirements using Java and Vue.js."
  },
  {
    company: "PT Rifan Financindo Berjangka",
    role: "Internship",
    period: "Mar-May 2019",
    type: "Internship",
    link: "https://www.rf-berjangka.com/",
    description: "Educate, assist, and support client to investing in financial product such as forex, commodities, indices, and precious metals."
  },
  {
    company: "PT Dok Perkapalan Surabaya",
    role: "Internship",
    period: "Oct-Nov 2016",
    type: "Internship",
    link: "https://www.doksurabaya.id/",
    description: "Assist the engineer in charge to monitor and maintain the ship's engine performance and condition."
  }
];

export const educationData: Education[] = [
  {
    institution: "Hacktiv8",
    degree: "Full Stack Programming",
    period: "2019",
    link: "https://hacktiv8.com/"
  },
  {
    institution: "Muhammadiyah University of Surakarta",
    degree: "Mechanical Engineering",
    period: "2013-2018",
    link: "https://www.ums.ac.id/"
  }
];

export const projectData: Project[] = [
  {
    name: "entertain-me",
    period: "03/2020 – 03/2020",
    description: "Movie & Tv series mobile app build with React-native",
    techStack: ["React Native"],
    show: false,
    links: [
      { label: "Github", url: "https://github.com/shiddiq-kiko/entertain-me" }
    ]
  },
  {
    name: "remind-me",
    period: "01/2026 – Now",
    description: "Lightweight command-line reminder application build with Cobol, PowerShell, BatchFile, and ShellScript.",
    techStack: ["Cobol", "PowerShell", "BatchFile", "ShellScript"],
    show: true,
    isDownloadable: true,
    paths: [
      {
        label: "Download Windows Version",
        path: "/download/remind-me/remind-me-win.zip",
        icon: "/assets/windows_icon-icons.com_62712.svg"
      }
    ],
    links: [
      { label: "Github", url: "https://github.com/shiddiq-kiko/remind-me" }
    ]
  },
  {
    name: "NimeList",
    period: "03/2020 – Now",
    description: "Japanese sub-culture web application build with React.js.",
    techStack: ["React.js", "Firebase", "Typescript"],
    show: true,
    links: [
      { label: "Website", url: "https://nimelist.firebaseapp.com" },
      { label: "Github (Client)", url: "https://github.com/shiddiq-kiko/react-challenge" }
      // { label: "Github (Server)", url: "https://github.com/shiddiq-kiko/react-challenge-server" }
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