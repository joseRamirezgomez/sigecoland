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
      bio: "Desarrolladora web Stack MERN(MongoDB, Express, React y Node.js), cofundador de SIGECOIN donde se desempeñó como Front-end.",
      git: "https://github.com/Dannyg01",
    },
    {
      name: "Diomedez Diaz",
      image: "https://avatars.githubusercontent.com/u/124898882?v=4",
      bio: "Desarrollador web Stack MERN(MongoDB, Express, React y Node.js), cofundador de SIGECOIN donde se desempeñó como Back-end.",
      git: "https://github.com/DIOME09",
    },
    {
      name: "Marcos Montealegre",
      image: "https://avatars.githubusercontent.com/u/124897751?v=4",
      bio: "Desarrollador web Stack MERN(MongoDB, Express, React y Node.js), cofundador de SIGECOIN donde se desempeñó como Back-end.",
      git: "https://github.com/m4rquitos",
    },
    {
      name: "Luis Rogelio Marin",
      image: "https://avatars.githubusercontent.com/u/125270061?v=4",
      bio: "Desarrollador web Stack MERN(MongoDB, Express, React y Node.js), cofundador de SIGECOIN donde se desempeñó como Front-end.",
      git: "https://github.com/marinhtml",
    },
    {
      name: "Hector Toledo",
      image: "https://avatars.githubusercontent.com/u/17147509?v=4",
      bio: "FullStack web developer con más de 5 años de experiencia, especializándose en la creación de aplicaciones web dinámicas y atractivas. Supervisor de desarrollo de SIGECOIN.",
      git: "https://github.com/hdtoledo",
    },
  ];