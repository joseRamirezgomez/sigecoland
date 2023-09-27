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
      bio: "Mario is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple.",
      git: "https://github.com/joseRamirezgomez",
    },
    {
      name: "Daniela Guzman",
      image: "https://avatars.githubusercontent.com/u/124900219?v=4",
      bio: "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
      git: "https://github.com/Dannyg01",
    },
    {
      name: "Erika Oliver",
      image: "./src/assets/authors/erika.webp",
      bio: "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
      git: "https://github.com/joseRamirezgomez",
    },
    {
      name: "marcos",
      image: "https://avatars.githubusercontent.com/u/124897751?v=4",
      bio: "marcos is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
      git: "https://github.com/m4rquitos",
    },
    {
      name: "marin",
      image: "https://avatars.githubusercontent.com/u/124897751?v=4",
      bio: "marcos is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
      git: "https://github.com/m4rquitos",
    },
  ];