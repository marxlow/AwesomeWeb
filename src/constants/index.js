const LANGUAGES = [
  { name: 'Java', image: 'logos/java_logo.png', experience: '2 years' },
  { name: 'Javascript', image: 'logos/javascript_logo.png', experience: '2 years' },
  { name: 'C', image: 'logos/c_logo.png', experience: '1 year' },
  { name: 'C#', image: 'logos/c_sharp_logo.png', experience: '1 year' },
  { name: 'Python', image: 'logos/python_logo.png', experience: '2 months' },
  { name: 'Ruby', image: 'logos/ruby_logo.jpg', experience: '2 months' },
];

const FRONTEND = [
  { name: 'HTML', image: 'logos/html_logo.png', experience: '1 year' },
  { name: 'CSS', image: 'logos/css_logo.png', experience: '1 year' },
  { name: 'ReactJS', image: 'logos/reactjs_logo.png', experience: '6 months' },
  { name: 'Redux', image: 'logos/redux_logo.png', experience: '6 months' },
];

const BACKEND = [
  { name: 'Node.Js', image: 'logos/nodejs_logo.png', experience: '6 months' },
  { name: 'Express', image: 'logos/express_logo.png', experience: '6 months' },
  { name: 'React Router', image: 'logos/react_router_logo.png', experience: '6 months' },
];

const DATABASE = [
  { name: 'MongoDB', image: 'logos/mongodb_logo.png', experience: '6 months' },
  { name: 'SQL', image: 'logos/sql_logo.png', experience: '3 months' },
]

const DEPLOYMENT = [
  { name: 'Docker', image: 'logos/docker_logo.png', experience: '3 months' },
  { name: 'Heroku', image: 'logos/heroku_logo.png', experience: '3 months' },
  { name: 'Kubernetes', image: 'logos/kubernetes_logo.png', experience: '3 months' },
  { name: 'Circleci', image: 'logos/circleci_logo.png', experience: '3 months' },
]

export const DOMAINS = [
  {
    title: 'Languages',
    backgroundImg: 'hello_world.jpg',
    skills: LANGUAGES,
  },
  {
    title: 'Frontend',
    backgroundImg: 'frontend_logo.jpg',
    skills: FRONTEND,
  },
  {
    title: 'Backend',
    backgroundImg: 'backend_logo.png',
    skills: BACKEND,
  },
  {
    title: 'Database',
    backgroundImg: 'backend_logo.png',
    skills: DATABASE,
  },
  {
    title: 'Deployment',
    backgroundImg: 'deployment_logo.png',
    skills: DEPLOYMENT,
  }
];

