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
  tomato,
  connectSphere,
  MCP,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack ",
    icon: backend,
  },
  {
    title: "Clean UI Crafter",
    icon: mobile,
  },
  {
    title: "Real-Time App Builder",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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


const projects = 
[
  {
    name: "Foody",
    description: "A full-stack food ordering web app with real-time menu updates, user authentication, cart functionality, and an admin dashboard for managing food items and orders.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" }
    ],
    image: tomato,
    source_code_link: "https://github.com/Abhay030/Foody"
  },

  {
    name: "ConnectSphere",
    description: "A social media platform enabling users to connect, share posts, and engage with a community through a user-friendly interface.",
    tags: [
      { name: "ejs", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" }
    ],
    image: connectSphere,
    source_code_link: "https://github.com/Abhay030/social-media"
  },

  {
    name: "MCP Partner Pickup",
    description: "A web application facilitating partner pickups with efficient scheduling and management features.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" }
    ],
    image: MCP,
    source_code_link: "https://github.com/Abhay030/MCP-Partner-Pickup"
  },

  // {
  //   "name": "To-Do App",
  //   "description": "A simple and intuitive to-do list application allowing users to add, manage, and track tasks efficiently.",
  //   "tags": [
  //     { "name": "javascript", "color": "blue-text-gradient" },
  //     { "name": "html", "color": "green-text-gradient" },
  //     { "name": "css", "color": "pink-text-gradient" }
  //   ],
  //   "image": "todo_app",
  //   "source_code_link": "https://github.com/Abhay030/To-Do"
  // }
]


export { services, technologies, projects };
