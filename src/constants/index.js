import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  movie,
  codex,
  movieSnap,
  minPortfolioSnap,
  makeupSnap,
  codexSnap,
  threejs,
  jquery,
  bb,
  makeup,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Movie Library",
    company_name: " ",
    icon: movie,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Objective: Developed an interactive movie website to showcase CRUD operations and advanced frontend technologies",
      "React Router for navigation. Context for state management. CRUD operations with Mock API. Material UI for modern design.",
      "Features: Browse movies, add new movies, update details, and delete movies.",
      "Tech: React, React Router, Context, CRUD, Material UI",
    ],
  },
  {
    title: "OpenAI Codex Application",
    company_name: "",
    icon: codex,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Purpose: interact with OpenAI’s Codex API in real-time",
      "Functionality: input natural language queries and receive code suggestions and completions",
      "Integrated third-party APIs and libraries into applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed with: JavaScript, HTML, CSS and vite tool",
    ],
  },
  {
    title: "Minimal Portfolio Website",
    company_name: "",
    icon: bb,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Minimal Portfolio Website with React is an educational project aimed at gaining proficiency in using SCSS (Sass). ",
      "Learning Focus: The primary goal of this project is to gain hands-on experience in using SCSS (Sass) for styling web applications, while simultaneously developing a functional portfolio website",
      "Implement a responsive layout to ensure the portfolio website looks appealing and functions seamlessly across a variety of devices and screen sizes.",
      `Technologies Used:
      React: Utilize React to build the portfolio website, focusing on implementing components and managing state.
      SCSS (Sass): Learn and practice SCSS techniques for styling, including variables, nesting, mixins, and more, throughout the entire project.`,
    ],
  },
  {
    title: "MakeUp Catalog",
    company_name: "",
    icon: makeup,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Create a user-friendly web-based application that allows users to easily search for and explore cosmetic products. Implement asynchronous operations using Async/Await and the Fetch API to enhance performance and responsiveness. The app also integrates third-party APIs and libraries to enrich the user experience.",
      "User-Friendly Interface: Created an intuitive user interface that facilitates easy navigation and discovery of cosmetic products. Users can explore product categories, apply filters, and search for specific items.",
      "Search Functionality: Implemented a robust search feature that allows users to search for cosmetic products by name, brand, or keywords. The search results are displayed dynamically as users type, providing instant feedback.",
      "Integrated third-party APIs and libraries into applications",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Library",
    description:
      "The Interactive Movie Library is a dynamic web application designed to showcase advanced frontend technologies through the implementation of CRUD operations. This project aims to demonstrate proficiency in React, React Router, Context API, and Material UI while providing users with an engaging movie browsing experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React Router",
        color: "green-text-gradient",
      },
      {
        name: "Context API",
        color: "pink-text-gradient",
      },
    ],
    image: movieSnap,
    source_code_link: "https://github.com/zensei76/my_movie",
    website_link: "https://moooovie.netlify.app/",
  },
  {
    name: "Codex Application",
    description:
      "The OpenAI Codex Application is a dynamic and innovative project that focuses on harnessing the capabilities of OpenAI's Codex API to facilitate real-time interactions between natural language queries and code suggestions/completions. Developed using a range of modern web technologies, this application aims to provide a seamless and efficient coding experience for users.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: " Vite tool",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: codexSnap,
    source_code_link: "hhttps://github.com/zensei76/codex_chat",
    website_link: "https://codex-chat-hazel.vercel.app/",
  },
  {
    name: "Minimal Porfolio",
    description:
      "The Minimal Portfolio Website developed using React and SCSS is a showcase projects, provide detailed descriptions, highlight skills, and offer an 'About Me' section for a clean design with optimized performance.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: minPortfolioSnap,
    source_code_link: "https://github.com/zensei76/react-portfolio",
    website_link: "https://bhargavburgul.netlify.app/",
  },
  {
    name: "MakeUp Catalog",
    description:
      "The Makeup Catalog Web App is a hands-on project undertaken to learn API integration while building a user-friendly platform for browsing and exploring cosmetic products. By combining HTML, CSS, Bootstrap, and JavaScript, a responsive and visually appealing app was developed, offering a range of features for users interested in cosmetic products.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: makeupSnap,
    source_code_link: "https://github.com/zensei76/makeUp-api",
    website_link: "hhttps://peaceful-semifreddo-9a5edf.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
