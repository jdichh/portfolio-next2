// projects
import soulless from "../../public/project/soulless.png";
import asteroids from "../../public/project/asteroids.png"
import vintora from "../../public/project/vintora.png";
import showroom from "../../public/project/showroom.png";
import synthwave from "../../public/project/synthwave.png";
import vespa from "../../public/project/vespa.png";
import ssu from "../../public/project/ssu.png";
import pwgen from "../../public/project/pwgen.png"

// icons
import htmlImg from "../../public/tools/html.svg";
import cssImg from "../../public/tools/css.svg";
import scssImg from "../../public/tools/scss.svg";
import jsImg from "../../public/tools/js.svg";
import reactImg from "../../public/tools/react.svg";
import nextImg from "../../public/tools/next.svg";
import vueImg from "../../public/tools/vue.svg";
import threeImg from "../../public/tools/three.svg";
import r3fImg from "../../public/tools/r3f.svg";
import bootstrapImg from "../../public/tools/bootstrap.svg";
import tailwindImg from "../../public/tools/tailwind.svg";
import gsapImg from "../../public/tools/gsap.svg";
import framerMotionImg from "../../public/tools/framermotion.svg";
import firebaseImg from "../../public/tools/firebase.svg";
import waveToolImg from "../../public/tools/wavetool.svg";
import lighthouseImg from "../../public/tools/lighthouse.svg";
import pcImg from "../../public/tools/pc.svg";
import pcRequiredImg from "../../public/tools/pcrequired.svg";

export const links = [
  // {
  //   name: "Tools",
  //   hash: "#tools",
  // },
  {
    name: "Works",
    hash: "#works",
  },
  {
    name: "Blogs",
    hash: "/blogs",
  },
];

export const tools = [
  {
    name: "HTML",
    imageUrl: htmlImg,
    alt: "HTML5 logo",
  },
  {
    name: "CSS",
    imageUrl: cssImg,
    alt: "CSS3 logo",
  },
  {
    name: "JavaScript",
    imageUrl: jsImg,
    alt: "JavaScript logo",
  },
  {
    name: "React.js",
    imageUrl: reactImg,
    alt: "React.js logo",
  },
  {
    name: "Next.js",
    imageUrl: nextImg,
    alt: "Next.js logo",
  },
  {
    name: "Three.js",
    imageUrl: threeImg,
    alt: "Three.js logo",
  },
  {
    name: "React-Three-Fiber",
    imageUrl: r3fImg,
    alt: "React-Three-Fiber logo",
  },
  {
    name: "SCSS",
    imageUrl: scssImg,
    alt: "SCSS logo",
  },
  {
    name: "Tailwind",
    imageUrl: tailwindImg,
    alt: "Tailwind CSS logo",
  },
  {
    name: "GSAP",
    imageUrl: gsapImg,
    alt: "GSAP logo",
  },
  // {
  //   name: "Framer Motion",
  //   imageUrl: framerMotionImg,
  //   alt: "Framer motion logo",
  // },
];

export const projects = [
  {
    name: "Vespa 125 Promotional Website",
    description:
      "A promotional website for the Vespa 125 in 3D. NOT affiliated with Piaggio and/or Vespa.",
    tools: [
      "PC Recommended",
      "React.js",
      "React-Three-Fiber",
      "GSAP",
      "Tailwind",
    ],
    toolIcons: [pcImg, reactImg, r3fImg, gsapImg, tailwindImg],
    imageUrl: vespa,
    liveLink: "https://jdvespa.netlify.app/",
    githubLink: "https://github.com/jdichh/vespa-r3f",
  },
  {
    name: "Virtual Car Showroom",
    description:
      "A 3D virtual car showroom mainly inspired by Gran Turismo Sport. I also replicated some parts of the UI from the actual game.",
    tools: ["PC Required", "React.js", "React-Three-Fiber", "SCSS"],
    toolIcons: [pcImg, reactImg, r3fImg, scssImg],
    imageUrl: showroom,
    liveLink: "https://gtshowroom.netlify.app/",
    videoLink: "https://youtu.be/PhjlgLxL-Zg",
    blogLink: "/blogs/gran-turismo-showroom",
    githubLink: "https://github.com/jdichh/car-showroom-r3f/",
  },
  {
    name: "Khronomechanica Vintora",
    description:
      "A website for a fictional steampunk watch. I wanted to try out embedding a 3D model in a product website.",
    tools: ["PC Recommended", "Three.js", "GSAP", "HTML", "SCSS"],
    imageUrl: vintora,
    toolIcons: [pcImg, threeImg, gsapImg, htmlImg, scssImg],
    liveLink: "https://steampunkwatch.netlify.app/",
    githubLink: "https://github.com/jdichh/steampunk-watch",
  },
  {
    name: "Security Unit Web Portal",
    description:
      "This was part of our capstone project back when I was in college, which involved a mobile application, and this web application. The whole system serves as a patrol system for the security unit at our school.",
    tools: ["PC Required", "Vue.js", "Bootstrap", "Firebase"],
    imageUrl: ssu,
    toolIcons: [pcImg, vueImg, bootstrapImg, firebaseImg],
    liveLink: "https://ssuwebsystem.netlify.app",
    videoLink: "https://youtu.be/vkYClk75SS0",
    githubLink: "https://github.com/jdichh/websystem_ssu2",
  },
  {
    name: "Synthwave Scene",
    description:
      "A synthwave scene in 3D. Made with React.js and Three.js because I wanted to know how different the syntax & conventions are compared to React-Three-Fiber.",
    tools: ["PC Recommended", "React.js", "Three.js", "SCSS"],
    imageUrl: synthwave,
    toolIcons: [pcImg, reactImg, threeImg, scssImg],
    liveLink: "https://jdsynthwave.netlify.app/",
    videoLink: "https://youtu.be/S7RprZc3dEs",
    blogLink: "/blogs/my-first-shenanigans-in-3d/",
    githubLink: "https://github.com/jdichh/synthwave-scene-REACT",
  },
  {
    name: "Random Password Generator Extension",
    description:
      "A random password generator extension with options for digits, special characters, lower/uppercase letters and a slider for the length of the password.",
    tools: ["HTML", "SCSS", "JavaScript"],
    imageUrl: pwgen,
    toolIcons: [htmlImg, scssImg, jsImg],
    videoLink: "https://youtu.be/pq-EsJa1plw",
    githubLink: "https://github.com/jdichh/password-generator"
  },
  {
    name: "Asteroids",
    description:
      "The Asteroids game from Atari, but with my modifications. I made this to expand upon my JavaScript knowledge, and to have a bit of fun as well.",
    tools: ["PC Required", "JavaScript"],
    imageUrl: asteroids,
    toolIcons: [pcImg, jsImg],
    liveLink: "https://jdasteroids.netlify.app/",
    videoLink: "https://www.youtube.com/watch?v=6LwWaI4WKdg",
    githubLink: "https://github.com/jdichh/asteroids"
  },
];

export const blogs = [
  {
    name: "Creating a Gran Turismo-esque showroom with Three.js",
    description:
      "I originally wanted to create a 3D promotional website for a car manufacturer, but I ended up recreating Gran Turismo (well, almost).",
    date: "September 29, 2023",
    link: "/blogs/gran-turismo-showroom",
  },
  {
    name: "My first shenanigans in 3D",
    description:
      "The story of how I came by 3D so early on in my self-learning journey.",
    date: "September 27, 2023 | Updated 3 days later",
    link: "/blogs/my-first-shenanigans-in-3d",
  },
];
