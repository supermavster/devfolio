# Developer Folio

![Build and Deploy](https://github.com/supermavster/devfolio/workflows/Build%20and%20Deploy/badge.svg?branch=main)

## Docker Commands

1. BUILD IMAGE : `docker build -t devfolio:latest .`
2. RUN IMAGE: `docker run -t -p 3000:3000 devfolio:latest`

## How To Use Devfolio

From your command line, clone and run devfolio:

```bash
# Clone this repository
$ git clone https://github.com/supermavster/devfolio.git

# Go into the repository
$ cd devfolio

# Install dependencies
$ npm install

#Start's development server
$ npm start
```

## Linking Portfolio to Github

Generate a Github personal access token following these [instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) (make sure you don't select any scope just generate a simple token).

1. Create a file called .env in the root directory of your project, check the base file

Note: Instead of creating a .env file, you can just run this command "cp env.example .env" inside the root directory

```bash
- devfolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - env.example  <-- this is the base file
  - .gitignore
  - package-lock.json
  - package.json
```

2. Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your github token like this.

```javascript
 // .env
  REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
```

Set `showGithubProfile` to true or false to show Contact Profile using Github, defaults to false.

Note: Open Source Projects section only show pinned items of your Github.
If you are seeing something as shown below, follow these [instructions](https://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile).

## Change and customize every section according to your need.

#### Personalize page content in `/src/portfolio.js` & modify it as per your need.

```javascript
/* Change this file to get your Personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Supermavster",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀"),
  resumeLink: "https://drive.google.com/file/d/1EZ6t0OOWfBfo5-csMoN7ulC94oYKG4oZ/view"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/supermavster",
  linkedin: "https://www.linkedin.com/in/supermavster/",
  gmail: "ingeniero.miguelvargas@gmail.com",
  gitlab: "https://gitlab.com/supermavster",
  facebook: "https://www.facebook.com/....."
};


const skillsSection = { .... }

const techStack = { .... }

const workExperience = { .... }

const openSource = { .... }

const bigProjects = { .... }

const achievementSection = { .... }

const blogSection = { .... }

const contactInfo = { .... }

const twitterDetails = { ... }

```

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

#### Adding Twitter Time line to your Page
Insert your Twitter username in `portfolio.js` to show your recent activity on your page.

```javascript
const twitterDetails = {
  userName : "Your Twitter Username"
};
```
Note: Don't use `@` symbol when adding username.
