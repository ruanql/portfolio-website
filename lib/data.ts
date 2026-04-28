import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { time } from "console";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "Luizalabs, São Paulo, SP",
    description:
      "Focus on system scalability and performance, optimizing code and choosing appropriate tools and architectures to support growing demand. Develop and implement monitoring and diagnostic systems to anticipate and resolve issues, including real-time monitoring, metrics, and logging tools. Lead incident response, identifying root causes and developing solutions to prevent recurrence. Collaborate closely with software development, operations, and security teams to ensure system reliability, security, and scalability.",
    icon: React.createElement(FaReact),
    date: "mai 2024 - Atual",
  },
  {
    title: "Senior Software Engineer",
    location: "Datum, Porto Alegre, RS",
    description:
      "Desenvolvimento Full Stack de aplicações web para o cliente Getnet pagonext. Implementação de features avançadas usando Node, Typescript, React, MaterialUI, BFF, TDD, Microservices, Jenkins e Git Flow.",
    icon: React.createElement(CgWorkAlt),
    date: "mai 2023 - abr 2024",
  },
  {
    title: "Software Developer",
    location: "Amdocs, São Carlos, SP",
    description:
      "Desenvolvimento de produtos digitais e aplicações web de alta qualidade usando React, Redux, Vue.js, SASS, Node.js, Typescript, integração de APIs, automação de testes (Cypress), CI/CD e metodologias ágeis.",
    icon: React.createElement(FaReact),
    date: "jun 2021 - mai 2023",
  },
  {
    title: "Frontend Developer",
    location: "Agência Poussée, São Paulo, SP",
    description:
      "Desenvolvimento de produtos digitais com HTML, CSS, JavaScript, React, Vue, PHP e Wordpress. Trabalho em equipe com designers e PMs, acessibilidade, SEO, Google Analytics e versionamento com Git.",
    icon: React.createElement(CgWorkAlt),
    date: "mai 2019 - mai 2021",
  },
  {
    title: "Full Stack Developer (Freelancer)",
    location: "São Paulo, SP",
    description:
      "Criação de landing pages, páginas web, chatbots, email marketing, manutenção de SEO, desenvolvimento de interfaces e uso de plataformas cloud (AWS, Azure, Google Cloud).",
    icon: React.createElement(FaReact),
    date: "mai 2018 - abr 2019",
  },
  {
    title: "Intern",
    location: "Agência João de Barro, Brotas, SP",
    description:
      "Estágio em desenvolvimento frontend, criação de landing pages, formulários, chatbots e email marketing. Aprimoramento de habilidades em programação e novas tecnologias.",
    icon: React.createElement(LuGraduationCap),
    date: "ago 2017 - jan 2018",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
