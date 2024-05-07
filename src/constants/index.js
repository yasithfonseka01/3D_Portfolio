import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    docker,
    angular,
    aws,
    laravel,
    java,
    csharp,
    springboot,
    jenkins
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Server Management",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Server Management",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: jenkins,
        name: "Jenkins",
        type: "Release Management",
    },
];


export const experiences = [
    {
        title: "Associate System Engineer",
        company_name: "Codegen International",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Jan 2020 - July 2021",
        points: [
            "Maintaining servers related to Disneyland project",
            "Collaborating with monthly release, Server management, Clients handling etc",
            "Learning areas are redhat os, jira handling, server management, oracle database setup & maintain"
        ],
    },
    {
        title: "Software Developer",
        company_name: "Excintec",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "July 2021 - Aug 2022",
        points: [
            "Developing and maintaining web applications using php, laravel, c# and other technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
    {
        title: "Software Engineer(Trainee)",
        company_name: "Speralab",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Aug 2021 - Jan 2022",
        points: [
            "Developing and maintaining web applications using node & angular and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Sri Lanka Army - DIT",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2022 - Present",
        points: [
            "Developing and maintaining web applications using php, laravel, angular, c# and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Airline Ticket Booking System',
        description: 'Developed a desktop application that enable to manage ticket booked by customers.',
        link: 'https://github.com/YasithSFonseka/Airlines_Ticket_Booking_System',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'E-Commerce Site',
        description: 'Created a full-stack web application to manage item online which enable to buy online',
        link: 'https://github.com/YasithSFonseka/E-CommerceSite',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Track Medicine App',
        description: 'Designed and built a mobile app using android for track the time which pre setup by the user to take medicine on time.',
        link: 'https://github.com/YasithSFonseka/Medicine-App',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Hosptal Management System',
        description: 'Developed in visual studio C# desktp application to maintain, track & manage patient details.',
        link: 'https://github.com/YasithSFonseka/Hospital-Management-System-Java',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Current Location Finding Application',
        description: 'Developed a mobile application in android in order to track the live location',
        link: 'https://github.com/YasithSFonseka/Current-Location-Finder',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Advanced Chatbot',
        description: 'Developed a chatbot in order to performed daily task like searching, play musics, sleeping mood on, sent message through whatsapp etc. automated tp performed task by giving command',
        link: 'https://github.com/yasithfonseka01/advanced_chatbot',
    }
];