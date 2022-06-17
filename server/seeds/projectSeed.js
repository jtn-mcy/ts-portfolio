const { Project } = require('../models')

const projectData = [
  {
    name: 'TAMAGACHA',
    description: "Final project from UC Berkeley coding bootcamp. Collect all five Tamas -- they each have different stories! Feed, play, and take them out.  See what they're saying when they're hungry, sad, or happy.  Make sure to keep up and check on them to see their happiness level or else they will die.",
    gitHub: 'https://github.com/NguyenJohnnyT/Tamagacha',
    deploy: 'https://tamagacha.herokuapp.com',
    pictures: ['https://i.imgur.com/0W4Icb9.png', "https://i.imgur.com/kRM1aan.png", "https://i.imgur.com/CHZXs7j.png"],
    date: new Date(2021, 8),
    custom_order: 8,
    user_id: 1
  },
  {
    name: 'Pokebattler',
    gitHub: 'https://github.com/NguyenJohnnyT/pokebattler',
    deploy: 'https://pokebattlerproject.herokuapp.com/',
    description: "Gotta Catch 'Em All! Enjoy a turn-based game called Pokebattler.  Create an account and pick your starter Pokemon: Bulbasaur, Squirtle, or Charmander.  Defeat a random number of Darkrai to beat the game. Current work is on hold for TAMAGACHA.",
    pictures: ['https://i.imgur.com/wrLD2bb.png, https://i.imgur.com/MGlAiXG.png', 'https://i.imgur.com/Fd0X28C.png', 'https://i.imgur.com/O7HRSR3.png'],
    date: new Date(2021, 7),
    custom_order: 4,
    user_id: 1
  },
  {
    name: "React Portfolio",
    gitHub: "https://github.com/NguyenJohnnyT/portfolio-react",
    deploy: "#",
    description: "A React portfolio which features administrator login, a backend database filled with my completed projects or works in progress.  Will feature POST and PUT routes for new projects",
    pictures: ['https://i.imgur.com/rhQKUef.jpg', 'https://i.imgur.com/L4nfNzw.png', 'https://imgur.com/BqPGFLB'],
    custom_order: 3,
    date: new Date(2021, 8),
    user_id: 1
  },
  {
    name: "Code Quiz Challenge",
    gitHub: "https://github.com/NguyenJohnnyT/CodeQuizChallenge",
    deploy: "https://nguyenjohnnyt.github.io/CodeQuizChallenge/",
    description: "One of the first projects from UCBerkeley Boot Camp that I built from scratch.  A coding quiz that utilizes local storage to store high scores and scores how quickly players answer correctly.",
    pictures: ["https://i.imgur.com/nWI9uxS.png"],
    custom_order: 1,
    date: new Date(2021, 5),
    user_id: 1
  },
  {
    name: "Tech Blog",
    gitHub: "https://github.com/NguyenJohnnyT/tech-blog-application",
    deploy: "https://jtn-tech-blog.herokuapp.com/",
    description: "Interact with a tech blog, create an account safely with a username and salted and hashed password, view and comment on posts, or make your own blog post that other users can interact with!",
    pictures: ["https://i.imgur.com/CskMFqF.png", 'https://imgur.com/5VqjtuQ', 'https://i.imgur.com/eHe1KJP.png', 'https://i.imgur.com/tMCQ0Xw.png'],
    custom_order: 2,
    date: new Date(2021, 6),
    user_id: 1
  },
  {
    name: "AWS Thoughts",
    gitHub: "https://github.com/NguyenJohnnyT/aws-thought",
    deploy: "http://3.22.175.224/",
    description: "Practicing with Amazon Web Services. Post images and thoughts in a twitter-like web application through AWS services S3 & DynamoDB. Deployed onto an EC2 Virtual Server in the Cloud.",
    pictures: ["https://i.imgur.com/Cp4KFz3.png"],
    custom_order: 7,
    date: new Date(2021, 10),
    user_id: 1
  },
  {
    name: "Python NewsFeed",
    gitHub: "https://github.com/NguyenJohnnyT/python-newsfeed",
    deploy: "https://jtn-python-newsfeed.herokuapp.com/",
    description: "Practicing with Amazon Web Services. Post images and thoughts in a twitter-like web application through AWS services S3 & DynamoDB. Deployed onto an EC2 Virtual Server in the Cloud.",
    pictures: ["https://i.imgur.com/GAL88IT.png"],
    custom_order: 6,
    date: new Date(2021, 10),
    user_id: 1
  },
  {
    name: "react-phys-color",
    gitHub: "https://github.com/dmartin4820/react-phys-color",
    deploy: "https://www.npmjs.com/package/react-phys-color",
    description: "A React hook that changes a color of an HTML element in a physical way, similar to react-spring. The developer gives the hook various options and the resulting element's color is changes using a sine or exponential algorithm.",
    pictures: [],
    custom_order: 5,
    date: new Date(2021, 11),
    user_id: 1
  },
  {
    name: "MCY-liquidpedia-bot",
    gitHub: "https://github.com/NguyenJohnnyT/MCY-LiquidHacks-Discord-Bot",
    deploy: "https://devpost.com/software/mcy-liquipedia-bot",
    description: "A python application that takes advantage of the Discord Application API and Liquipedia API to allow users to query the bot on their Discord server and find information about professional esports players including Dota2, League of Legends, and many others.",
    pictures: ["https://i.imgur.com/5AA49dy.png", "https://i.imgur.com/IRJh87k.png"],
    custom_order: 9,
    date: new Date(2021, 10),
    user_id: 1
  },
  {
    name: "Ts-portfolio",
    gitHub: "https://github.com/NguyenJohnnyT/ts-portfolio",
    deploy: "https://jtn-portfolio-ts.herokuapp.com",
    description: "Revamped portfolio built with TypeScript and React using Ant Design as the styling framework and React Query for api calls, with SCSS as the main css component. I utilized what I learned from my time at Kernel to improve upon the original portfolio from coding bootcamp.",
    pictures: ['https://i.imgur.com/PPQkwoN.png', 'https://i.imgur.com/2u6wX49.png', 'https://i.imgur.com/QzMFWQS.png', 'https://i.imgur.com/W0c7Iay.png'],
    custom_order: 10,
    date: new Date(2022, 5),
    user_id: 1
  }
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject