import { Experience, Education, Project } from './types';

export const experienceData: Experience[] = [
  {
    company: "SALT",
    role: "Backend Engineer",
    period: "2021 – PRESENT",
    type: "Full-time",
    link: "https://salt.id/id-en",
    description: "Collaborated with a cross-functional team of Backend and Frontend Developers (using Golang and Java) to deliver and maintain multiple high-impact Telkomsel projects—including Mobile Loan, TSurvey, Maxstream, Smart Pay, and internal dashboards—from planning through deployment and ongoing support.",
    listDescription: [
      "Engineered systems capable of handling 5,000+ transactions per second (TPS), scaling to process over 50 million records daily.",
      "Optimized big data pipelines and application logic to process and calculate billions of data points, ensuring reliability and accuracy under heavy load.",
      "Strengthened system resilience and scalability, enabling seamless performance across Telkomsel’s nationwide user base.",
      "Contributed to end-to-end delivery, reducing deployment cycles and improving system uptime, directly supporting Telkomsel’s digital transformation initiatives."
    ],
    techStack: ["Golang", "Java", "Spring Boot", "Microservices", "PostgreSQL", "Redis", "Kafka", "RabbitMQ", "Docker", "AWS", "CI/CD", "GIT", "OracleDB", "MySQL", "GitlabAPI", "Others"]
  },
  {
    company: "edConnect",
    role: "Software Engineer",
    period: "2020 – 2021",
    type: "Full-time",
    link: "https://edconnect.co.id/",
    description: "Developed, enhanced, and maintained a web-based School Management System portal tailored to client requirements, leveraging Java and Vue.js for scalable and user-friendly solutions.",
    listDescription: [
      "Engineered a robust platform adopted by multiple high-profile private schools in Indonesia, supporting 5,000+ students.",
      "Optimized system architecture to handle large-scale academic and administrative data, ensuring smooth performance during peak usage periods.",
      "Strengthened system reliability and usability, enhancing the experience for schools, teachers, students, and parents.",
      "Delivered measurable improvements in efficiency, reducing manual processes and enabling real-time access to academic records, attendance, and financial data."

    ],
    techStack: ["Java", "Vue.js", "Spring Framework", "MySQL"]
  },
  {
    company: "PT Rifan Financindo Berjangka",
    role: "Internship",
    period: "Mar-May 2019",
    type: "Internship",
    link: "https://www.rf-berjangka.com/",
    description: "Educate, assist, and support client to investing in financial product such as forex, commodities, indices, and precious metals.",
    techStack: ["Financial Analysis", "Customer Support"]
  },
  {
    company: "PT Dok Perkapalan Surabaya",
    role: "Internship",
    period: "Oct-Nov 2016",
    type: "Internship",
    link: "https://www.doksurabaya.id/",
    description: "Assist the engineer in charge to monitor and maintain the ship's engine performance and condition.",
    techStack: ["Ship Engineering", "Maintenance"]
  }
];

export const educationData: Education[] = [
  {
    institution: "Hacktiv8",
    degree: "Full Stack Programming",
    period: "2019",
    link: "https://hacktiv8.com/",
    description: "An intensive coding bootcamp best known for its industry-aligned curriculum, strong job-placement focus, and expertise in training beginners to become job-ready software developers through immersive, project-based learning."
  },
  {
    institution: "Muhammadiyah University of Surakarta",
    degree: "Mechanical Engineering",
    period: "2013-2018",
    link: "https://www.ums.ac.id/",
    description: "A well-established engineering program within a nationally accredited private university in Indonesia known for its strong practical focus, solid engineering fundamentals, hands-on laboratory, innovation-based learning, and technology development with an emphasis on real-world applications and Islamic values."
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
        label: "Windows",
        path: "/download/remind-me/remind-me-win.zip",
        icon: "/assets/windows_icon-icons.com_62712.svg"
      },
      {
        label: "Linux",
        path: "/download/remind-me/remind-me.zip",
        icon: "/assets/brand-linux-svgrepo-com.svg"
      },
      {
        label: "MacOS",
        path: "/download/remind-me/remind-me.zip",
        icon: "/assets/mac-svgrepo-com.svg"
      }
    ],
    links: [
      { label: "Github", url: "https://github.com/shiddiq-kiko/remind_me_cobol" }
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