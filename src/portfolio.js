/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Supermavster",
  title: "Hi all, I'm Miguel Ángel",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / TypeScript / Nodejs / PHP / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EZ6t0OOWfBfo5-csMoN7ulC94oYKG4oZ/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/supermavster",
  linkedin: "https://www.linkedin.com/in/miguel-angel-torres-vargas/",
  gmail: "ingeniero.miguelvargas@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "FULL STACK DEVELOPER (EMPHASIS BACKEND) WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean / Google Cloud / Heroku"
    ),
    emoji("⚡ Documented information of functions, initial steps, configurations, implementations, automatic deployments in BitBucket or Github Actions."),
    emoji(
      "⚡ Develop scalable stacks / backend templates in different languages"
    ),
    emoji("⚡ Production and maintenance of websites."),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Platzi",
      logo: require("./assets/images/platzi.png"),
      subHeader: "Platzi Master - Backend Developer & Data Science",
      duration: "February 2020 - Present",
      desc: "Platzi is the best LATAM online education platform, with subscription.",
      descBullets: [
        "I become part of the 1% of the students to complete the Master Program.",
      ],
    },
    {
      schoolName: "Universidad de Boyacá",
      logo: require("./assets/images/uniboyaca.jpg"),
      subHeader: "Systems Engineer",
      duration: "February 2015 - September 2019",
      desc:
        "Solid knowledge of the mathematical and theoretical foundations of Computing, Software Industry, through the conception and creation of environments, installations and innovative projects of computer applications.",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "PHP",
      progressPercentage: "91%",
    },
    {
      Stack: "JavaScript",
      progressPercentage: "86%",
    },
    {
      Stack: "TypeScript",
      progressPercentage: "78%",
    },
    {
      Stack: "Python",
      progressPercentage: "72%",
    },
    {
      Stack: "Backend",
      progressPercentage: "90%",
    },

    {
      Stack: "DevOps",
      progressPercentage: "70%",
    },

    {
      Stack: "Frontend",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech lead Backend - Fullstack Developer",
      company: "Kubo S.A.S.",
      companylogo: require("./assets/images/kubo.png"),
      date: "Sept 2019 – Sept 2020",
      descBullets: [
        "Communication developed between servers and third-party services in Backend API Rest.",
        "Documented information of functions, initial steps, configurations, implementations, automatic deployments in BitBucket or Github Actions.",
        "Guidance to a team of web developers to improve practices and good development environments."
      ],
    },
    {
      role: "Fullstack Developer",
      company: "AppSolution S.A.S.",
      companylogo: require("./assets/images/appsolution.png"),
      date: "Jun 2019 – Sep 2019",
      descBullets: [
        "Production and maintenance of websites.",
        "Use and implementation of web tools and knowledge (HTML5, SCSS and Javascript) to customize the CMS components and adapt them to the client's needs.",
        "Creation of REST API Services",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "Cittus - Consultoria Asociada S.A.S.",
      companylogo: require("./assets/images/cittus.png"),
      date: "Feb 2019 – Jun 2019",
      descBullets: [
        "Design and construction of different mobile transport and mobility solutions.",
        "Construction of mobile applications and REST API services.",
        "Creation of Websites and CMS for data display.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "supermavster", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/supernode.png"),
      link: "https://github.com/supermavster/Supernode",
    },
    {
      image: require("./assets/images/z-devs.png"),
      link: "https://github.com/Z-Devs-platzi/",
    },
    {
      image: require("./assets/images/recoverid.png"),
      link: "https://github.com/C3-Zally",
    },
    {
      image: require("./assets/images/transport-center.png"),
      link: "https://github.com/TransportCenter",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Leading Digital Transformation",
      subtitle:
        "Learn and improve leadership skills in the Digital Transformation through new technologies in the industry.",
      image: require("./assets/images/mit.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.credential.net/05a15924-822e-4681-99a2-b34216124614?username=miguelngeltorresvargas",
        }
      ],
    },
    {
      title: "Development Backend",
      subtitle:
        "Learn all skills in backend development, competent to deal with changes in an efficient way. high capabilities in analysis, diagnosis, evaluation, and implementation of solutions. Responsible management of technology within an administrative and humanistic framework.",
      image: require("./assets/images/platzi.png"),
      footerLink: [
        {
          name: "Backend with PHP",
          url:
            "https://www.credential.net/134432ae-c1ba-4671-b433-b8adc74d9594?username=miguelngeltorresvargas",
        },
        {
          name: "All Backend Skills",
          url:
            "https://platzi.com/@Mavsters/",
        },
      ],
    },
    {
      title: "Digital Business Discovery",
      subtitle: "ASP .net MVC Core 2.0 Solution for urban mobility, municipal and intermunicipal transport App winner of Digital Business Discovery Iteration XII, Apps.co",
      image: require("./assets/images/appsco.jpg"),
      footerLink: [
        {
          name: "Final Project",
          url: "https://github.com/TransportCenter",
        },
      ],
    },
    {
      title: "BID CITIES LAB International University Contest",
      subtitle: "Completed Certification from First and Second Phase Architectural competition in the construction of a patriotic asylum in Chile - Mata Sur",
      image: require("./assets/images/citi.jpeg"),
      footerLink: [
        {
          name: "Final Project",
          url: "https://github.com/supermavster/Conecta-Web",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://supermavster.com/",
      title: "My personal Blog site",
      description:
        "A space where I publish different tutorials on programming or software; Building in PHP Native",
    },
    {
      url: "https://supermavsters.com",
      title: "My dev personal Blog site (In Progress)",
      description:
        "A new website / blogging in Laravel with Blade where I post tutorials that mainly focus on development.",
    },
  ],
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/supermavster-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/",
//     },
//   ],
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Supermavster-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
//   ],
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+57-3103221124",
  email_address: "ingeniero.miguelvargas@gmail.com",
};

// //Twitter Section
// const twitterDetails = {
//   userName: "supermavster", //Replace "twitter" with your twitter username without @
// };
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  // talkSection, podcastSection,
  contactInfo,
  // twitterDetails,
};
