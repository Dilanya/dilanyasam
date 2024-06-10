import { ai, logo } from "../assets";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    bootstrap,
    tailwind,
    nodejs,
    mongodb,
    git,
    postmanLogo,
    AI,
    PR,
    PS,
    firebase,
    XD,
    postman,
    Hackerrank,
    dl,
    opencv,
    comptia,
    chess,
    hotel,
    game,
    leo,
    portfolio,
    healthcare,
    ucsc,
    erp,
    ems
    
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "AI/ML Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    
    {
      name: "Postman",
      icon: postmanLogo,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AdobeXD",
      icon: XD,
    },
    
    
    
    
  ];
  
  const experience = [
    {
      title: "Backend Developer - Intern",
      description:
        "Rooster Commerce",
      date: "2023 Sep - Present",
      
    }];
  

  const education = [
    {
      title: "University of Sri Jayewardenepura, Sri Lanka",
      description:
        "Bachelor of Science in Information and Com.Technology",
      gpa : "GPA - 3.45/4.0" ,
      clz: "Graduated with a Second Class Upper Division",
      date: "2020 - 2024",
      
    },
    {
      title: "University of Colombo School of Computing",
      description:
        "MERN Stack Training Program - 60 hrs",
      date: "2024",
      
    },
    {
      title: "Esoft Metro Campus",
      description:
        "Diploma in English",
      date: "2019 -  2020",
      
    },
    {
      title: "Sanghabodhi College, Nittambuwa",
      description:
        "Upto GCE A/L - 2018", 
        
    },
    
  ];

  const certificates = [
    {
      name: "MERN Stack Training Course",
      image: ucsc,
      link: "https://www.linkedin.com/posts/dilanya-samarakoon_mernstack-webdevelopment-continuouslearning-activity-7178832598247378944-WkI1?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "Postman Student Expert",
      image: postman,
      link: "https://badgr.com/public/assertions/6yZ2-tgAR3-cyCNo-83otA",
    },
    {
      name: "AI/ML Engineer",
      image: ai,
      link: "https://code.sliit.org/certificates/jmdv3fpmuv",
    },
    {
      name: "Python(Basic) Certificate",
      image: Hackerrank,
      link: "https://www.hackerrank.com/certificates/9ccd3bf01800",
    },
    {
      name: "Introduction to TensorFlow ",
      image: dl,
      link: "https://coursera.org/share/194788f686cfe02a6b61a5ca9e56d28c",
    },
    {
      name: "Introduction to Deep Learning",
      image: opencv,
      link: "https://www.linkedin.com/learning/certificates/718f12b753a89cbbedea41876a4c0ca8b88c1d5420f05da2bc7bc2a3764e621e",
    },
    {
      name: "Mobile Networking         ",
      image:comptia,
      link: "https://www.linkedin.com/learning/certificates/e46aabab5fe1836bb9fff370b909299d121a34214e3a80f000dd32c2df904f59",
    },
    
    

  ]
  
  const projects = [
    {
      name: "Chess Pieces Detection",
      description:
        "This is an object detection model that built for Chess Pieces Detection. for this project I captured 150 images and then annotated them using Roboflow.",
      tags: [
        {
          name: "object-detection",
          color: "blue-text-gradient",
        },
        {
          name: "YoloV8",
          color: "green-text-gradient",
        },
        
        {
          name: "ML",
          color: "pink-text-gradient",
        },
        {
          name: "Roboflow",
          color: "blue-text-gradient",
        },
        
      ],
      image: chess,
      source_code_link: "https://github.com/Dilanya/Chess-Pieces-Detection",
    },
    {
      name: "Leo MD306 Official Website",
      description:
        "This website showcases the work and achievements of Leos in Sri Lanka and Maldives. I was responsible for developing this website as the web developer.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        
        
      ],
      image: leo,
      source_code_link: "https://leomd306.org/",
    },
    {
      name: "Portfolio Website",
      description:
        "created this project using modern web technologies such as React, Tailwind, Vite and Framer Motion. It is a fast, responsive and interactive website that demonstrates my abilities as a web developer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Dilanya/MyPortfolio",
    },
    {
      name: "Employee Management Web System",
      description:
        "Web-based simple Employee management system to handle employee details, and accounts, Java- Springboot used for the backend, React JS for the frontend and MySQL for Database used for the development",
      tags: [
        {
          name: "Java-Springboot",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: ems,
      source_code_link: "https://github.com/Dilanya/EmployeeWebAPP",
    },
    {
      name: "ERP System",
      description:
        "Web-based simple ERP system to handle customer details, Item Details and reports, PHP and MySQL used for the development",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: erp,
      source_code_link: "https://github.com/Dilanya/ERP-system",
    },
    {
      name: "Hotel Website",
      description:
        "Web-based platform that allows users to search, book, and manage reservations in the hotel, MERN stack used for the development",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: hotel,
      source_code_link: "https://github.com/Dilanya/HotelWeb",
    },
    {
      name: "Healthcare Mobile App",
      description:
        "Mobile application that enables users to make appointments with their preferred health care providers, and contact them anytime through secure messaging. ",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: healthcare,
      source_code_link: "https://github.com/Dilanya/healthcare-mobile-app",
    },
    {
      name: "Ball Rolling Game",
      description:
        "The game created using Unity. The game consists of rolling a ball on a board using the arrow keys.The game uses collision detection to determine when the player wins.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Game",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/Dilanya/ball-rolling-game",
    },
  ];
  
  export { services, technologies,  projects, education, certificates , experience};