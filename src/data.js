import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kevin Lobos | Sotware Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kevin Lobos',
  subtitle: "I'm a Software Engineer",
  cta: 'Find out more!',
};
//'Firebase.png','Redux.png',
// ABOUT DATA
export const aboutData = {
  skills:['React.png','Vue.png', 'Svelte.png','Node.png','Firebase.png','Python.png','JavaScript.png','Java.png','Webpack.png', 'SQL.png'],
  resume: 'Kevin-Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'movie-app.png',
    title: 'Binge Movies',
    info: "Netflix clone created with React and Redux, with authentication from Firebase. Checkout from Stripe.js. Data pulled in from the TMDB API database.",
    techUsed:["React.png",'Firebase.png','JavaScript.png'],
    url: 'https://movie-app-44184.web.app/',
    repo: 'https://github.com/kevinlobos42/react-movie-site', 
  },
  {
    id: nanoid(),
    img: 'React Path Finder.png',
    title: 'Pathfinder',
    info: "React web application that used Dijkstra's algorithm and A* algorithm to determine the shortest path from 1 point to another on a graph. Styled with CSS3 and Material UI.",
    techUsed:["React.png",'JavaScript.png'],
    url: 'http://find-path.netlify.app',
    repo: 'https://github.com/kevinlobos42/path-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'React Sorting Visualizer.png',
    title: 'Sorting Algorithm Visualizer',
    info: 'React web application that animates how sorting algorithms sort an array from smallest to largest. Algorithms used include: BubbleSort, QuickSort, and MergeSort. Styled with CSS3 and Material UI.',
    techUsed:['React.png','JavaScript.png'],
    url: 'https://seesort.netlify.app/',
    repo: 'https://github.com/kevinlobos42/sortingVisualizer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Svelte Sorting Visualizer.png',
    title: 'Svelte Sorting Visualizer',
    info: 'Application using Sveltekit that animates sorting algorithms and provides explanations for how they work. Styled with TailwindCSS',
    techUsed:['Svelte.png','JavaScript.png'],
    url: 'https://lobos-sorting.vercel.app/',
    repo: 'https://github.com/kevinlobos42/svelte-sorting-visualizer', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's Talk!",
  btn: "Let's Talk!",
  email: 'kevinlobos42@gmail.com',
};


export const linkedin = 'https://www.linkedin.com/in/kevin-lobos/'

export const github = 'https://github.com/kevinlobos42'
