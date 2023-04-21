//Projects
import CryptoPic from "../assets/projects/CryptoShot.png";
import OnlineShopPic from "../assets/projects/EcommerceShot.png";
import DorminacoPic from "../assets/projects/Dormincao.png";
import MobileAppsPic from "../assets/projects/MobileApp.jpg";
import Petemoon_Pic from '../assets/projects/PetemoonShot.png';
import ArianaTask_Pic from '../assets/projects/ArianaTaskShot.jpg';
import Customizify_Pic from '../assets/projects/CustomizifyPic.png';

//Skills
import HTML_Logo from '../assets/skills/HtmlIcon.svg';
import CSS_Logo from '../assets/skills/CssIcon.svg';
import Sass_Logo from '../assets/skills/SassIcon.svg';
import React_Logo from '../assets/skills/ReactIcon.svg';
import Redux_Logo from '../assets/skills/reduxIcon.svg';
import TS_Logo from '../assets/skills/typescriptIcon.svg';
import JS_Logo from '../assets/skills/JSicon.svg';
import MaterialUI_Logo from '../assets/skills/material-uiIcon.svg';
import Git_Logo from '../assets/skills/GitIcon.svg';
import WordPress_Logo from '../assets/skills/wordpressIcon.svg';
import NextJS_Logo from '../assets/skills/nextjs.svg';
import ReactNative_Logo from '../assets/skills/reactnative.svg';
import RestfulAPI_Logo from '../assets/skills/restfulapi.svg';
import NPM_Logo from '../assets/skills/npm.svg';
import Babel_Logo from '../assets/skills/babel.svg';
import Webpack_Logo from '../assets/skills/webpack.svg';
import TailwindCSS_Logo from '../assets/skills/webpack.svg';
import GraphQL_Logo from '../assets/skills/graphql.svg';
import Agile_Logo from '../assets/skills/agile.svg';
import PWA_Logo from '../assets/skills/pwa.svg';
import Responsive_Logo from '../assets/skills/responsive.svg';

//Education
import UT_Logo from '../assets/ex/UT_Logo.png'
import HighSchool_Logo from '../assets/ex/HighSchool_Logo.svg'

import Digid_Logo from '../assets/ex/Digid_Logo.png'
import Tecvico_Logo from '../assets/ex/TecvicoLogo.png';
import Rizo_Logo from '../assets/ex/RizoLogo.png';
import Dorminaco_Logo from '../assets/ex/Dorminaco_Logo.png';
import NeginAndroid_Logo from '../assets/ex/NeginAndroid_Logo.jpg';

//why hire me
import bagIcon from '../assets/other/bag-icon.svg';
import contactIcon from '../assets/other/contact-icon.svg';
import likeIcon from '../assets/other/Like-icon.svg';
import perfectIcon from '../assets/other/perfect-icon.svg';

//offers
import Develope_Logo from '../assets/other/Develope_Logo.svg';
import Design_Logo from '../assets/other/Design_Logo.svg';
import DigitalMarketing_Logo from '../assets/other/DigitalMarketing_Logo.svg'

const SkillsData = [
                    {name:"ReactJS", image:React_Logo},
                    {name:"NextJS", image:NextJS_Logo},
                    {name:"Redux", image:Redux_Logo},
                    {name:"GraphQL", image:GraphQL_Logo},
                    {name:"Restful API", image:RestfulAPI_Logo},
                    {name:"Babel", image:Babel_Logo},
                    {name:"NPM", image:NPM_Logo},
                    {name:"Webpack", image:Webpack_Logo},
                    {name:"JavaScript", image:JS_Logo},
                    {name:"TypeScript", image:TS_Logo},
                    {name:"HTML", image:HTML_Logo},
                    {name:"CSS", image:CSS_Logo},
                    {name:"Sass", image:Sass_Logo},
                    {name:"TailwindCSS", image:TailwindCSS_Logo},
                    {name:"Material UI", image:MaterialUI_Logo},
                    {name:"PWA", image:PWA_Logo},
                    {name:"Responsive Design", image:Responsive_Logo},
                    {name:"Git", image:Git_Logo},
                    {name:"WordPress", image:WordPress_Logo},
                    {name:"Agile(Scrum)", image:Agile_Logo},
                    {name:"ReactNative", image:ReactNative_Logo},
]
const WorkExData = [
                    {
                        position:"Front-End Developer", 
                        kind:"contract", 
                        date:"Dec 2022 - Present", 
                        company:"Rizo Studio", 
                        companyLogo:Rizo_Logo, 
                        companyLink:"https://rizostudio.com/", 
                        description:"Participate in product releases and code reviews with 2 senior developers and team leads. Assisted in building 100% reusable code and libraries for future use"
                    },
                    {
                        position:"Front-End Developer", 
                        kind:"contract", 
                        date:"Jan 2023 - March 2023", 
                        company:"Tecvico", 
                        companyLogo:Tecvico_Logo, 
                        companyLink:"https://tecvico.com/", 
                        description:"Created one efficient and reusable front-end systems to drive web applications to the marketplace."
                    },
                    {
                        position:"Front-End Developer", 
                        kind:"freelance", 
                        date:"July 2022 - Nov 2022", 
                        company:"Digid", 
                        companyLogo:Digid_Logo, 
                        companyLink:"https://Digid.ca", 
                        description:"Worked in an Agile, collaborative environment to receive design requirements, and peer program. Utilized HTML, CSS, JS, and ReactJS to create +50 responsive landing pages for Canadian companies"
                    },
                    {
                        position:"Founder & Front-End Developer", 
                        kind:"SelfEmployed", 
                        date:"Dec 2020 - April 2022", 
                        company:"Dorminaco", 
                        companyLogo:Dorminaco_Logo, 
                        companyLink:"https://Dorminaco.ir", 
                        description:"Developed interactive JavaScript applications.Wrote HTML code to structure pages.Developed custom web component.Wrote code to fetch data from remote API."
                    },
                    {
                        position:"Founder & Android Developer", 
                        kind:"SelfEmployed", 
                        date:"Feb 2016 - Aug 2018", 
                        company:"NeginAndroid", 
                        companyLogo:NeginAndroid_Logo, 
                        companyLink:"https://cafebazaar.ir/developer/mehdi-253", 
                        description:"Production and development of educational application."
                    }
]

const EducationData = [
  { 
    institution:"University of Tehran", 
    logo:UT_Logo , 
    date:"2019-2023", 
    degree:"Bachelor of Engineering", 
    field:"Polymer Engineering"
  },
  {
    institution:"Emam High School", 
    logo:HighSchool_Logo, 
    date:"2016-2019", 
    degree:"High School Diploma", 
    field:"Mathematical Physics"
  },
]

const ProjectsData = [
    {
      name: "Customizify",
      link: "https://project3.mehdirezakhani.ir/",
      image: Customizify_Pic,
      description:
        "Create an exclusive shirt with a new 3D customization tool. This app is a PWA and very responsive. ThreeJS, NextJS, TailwindCSS, and TypeScript are used in this app.",
      source: "https://github.com/MehdiiRezakhani/Customizify",
    },
    {
      name: "Crypto-View",
      link: "https://project1.mehdirezakhani.ir/",
      image: CryptoPic,
      description:
        "This project shows the current price, 24 hours change, market cap and … of crypto. API from https://www.coingecko.com  is used by Axios. I used ReactJs, React-Router-Dom and CSS in this project.",
      source: "https://github.com/MehdiiRezakhani/crypto-view",
    },
    {
      name: "Online-Shop",
      link: "https://project2.mehdirezakhani.ir/",
      image: OnlineShopPic,
      description:
        "This project is A Single-Page-Application. API from https://fakestoreapi.com/ is used by Axios. I used ReactJS, React-Router-Dom, and CSS in this project.",
      source: "https://github.com/MehdiiRezakhani/Online-shop",
    },
    {
      name: "Dorminaco.ir",
      link: "https://Dorminaco.ir",
      image: DorminacoPic,
      description:
        "Developed interactive JavaScript applications. Wrote HTML code to structure pages. Developed custom web component. Wrote code to fetch data from remote API.",
    },
    {
      name: "Mobile Apps",
      link: "https://cafebazaar.ir/developer/mehdi-253",
      image: MobileAppsPic,
      description:
        "Production and development of educational application. Application development is my favorite job and I have some experience in Android  programming. I have published several Android apps in Cafe Bazaar.",
    },
    {
        name: "Ariana Task",
        link: "https://github.com/MehdiiRezakhani/Ariana-Task",
        image: ArianaTask_Pic,
        description:
          "You can enter your name, age, and skills in a form and see the result on the charts. react, react-router-dom, redux, react-chartjs, chart.js, uuid have been used in this project. By redux, the data set and get in localStorage.",
        source: "https://github.com/MehdiiRezakhani/Ariana-Task",
      },
    {
      name: "Petemoon",
      link: "https://petemoon.com/",
      image: Petemoon_Pic,
      description:
        "Participate in product releases and code reviews with 2 senior developers and team leads. Assisted in building 100% reusable code and libraries for future use. From Rizo Sudio",
    },
];

const HireData = [
  {reason:"Workaholic", description:"I’m a kind of person who can’t just stand around and doing nothing. I have a tendency to do something productive.", image:bagIcon},
  {reason:"Communicative", description:"I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver.", image:contactIcon},
  {reason:"Cooperative", description:"Behind the successful project, there’s a great team. I can build a good cooperation and remain consistent with the goal.", image:likeIcon},
  {reason:"Perfectionist", description:"I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result.", image:perfectIcon}
];

const OffersData = [ 
  {name:"Design", image:Design_Logo},
  {name:"Develope", image:Develope_Logo},
  {name:"Digital-Marketing", image:DigitalMarketing_Logo}
];

export {SkillsData, WorkExData, EducationData, ProjectsData, HireData, OffersData}