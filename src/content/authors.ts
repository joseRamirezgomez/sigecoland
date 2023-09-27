export interface Props {
    name: string;
    
    image: string;
    bio: string;
    git: string;
  }
  
  export type Author = Props;
  
  export const authors: Props[] = [
    {
      name: "Jose Ramirez",
      image: "https://avatars.githubusercontent.com/u/124898096?v=4",
      bio: "Desarrollador web Stack MERN(MongoDB, Express, React y Node.js), cofundador de SIGECOIN donde se desempeñó como leader dev.",
      git: "https://github.com/joseRamirezgomez",
    },
    {
      name: "Daniela Guzman",
      image: "https://avatars.githubusercontent.com/u/124900219?v=4",
      bio: "Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
      git: "https://github.com/Dannyg01",
    },
    {
      name: "Diomedez Diaz",
      image: "https://avatars.githubusercontent.com/u/124898882?v=4",
      bio: "successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
      git: "https://github.com/DIOME09",
    },
    {
      name: "Marcos Montealegre",
      image: "https://avatars.githubusercontent.com/u/124897751?v=4",
      bio: "successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
      git: "https://github.com/m4rquitos",
    },
    {
      name: "marin",
      image: "https://avatars.githubusercontent.com/u/124897751?v=4",
      bio: "successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
      git: "https://github.com/marinhtml",
    },
    {
      name: "Hector Toledo",
      image: "https://avatars.githubusercontent.com/u/17147509?v=4",
      bio: "FullStack web developer con más de 5 años de experiencia, especializándose en la creación de aplicaciones web dinámicas y atractivas. Supervisor de desarrollo de SIGECOIN.",
      git: "https://github.com/hdtoledo",
    },
  ];