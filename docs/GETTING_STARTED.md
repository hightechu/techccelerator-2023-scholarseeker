# Getting Started

This guide will help you get started with your React app.

> _HighTechU Students:_ Please remember that we are available to help at every step of the process if you need it!

> _Mentors:_ Please ensure that you have correctly set up the repository and branch protection before your team starts development: [`MENTORS_INFO.md`](MENTORS_INFO.md)

## Table of Contents


1. [🔨 Install development tools](#1)

2. [🚀 Setup project in a development environment](#2)

3. [⚙️ Development environment configuration](#3)

4. [💡 Deployment](#4)

<h2 id="1">🔨 Development Tools</h2>

Your development environment must have Git, Node.js, npm, and Firebase CLI (for deployment) installed. To download Git, visit [Git](https://git-scm.com). Node.js installations come with npm. To download these, visit [Node.js, and npm](https://nodejs.org/en/). Use npm to [install the Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli).

You will need a text editor. Any text editor is fine, but we will be using VS Code. For more information about VS Code, visit [Visual Studio](https://code.visualstudio.com).

Lastly, you will need access to a terminal or command prompt. VS Code provides an integrated terminal for development. For more information about the Integrated Terminal, visit [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

_Note:_ If you are using an online text editor / integrated development environment (Codespaces, Repl.it) you will most likely not need to download Git, Node.js, or npm.

<h2 id="2">🚀 Setup the Project in A Development Environment</h2>

You will need a GitHub account and read/write access to the repository.

_Note:_ HighTechU Students working in a team will have read/write access to your team's project repository.

> You will also need admin access to manage deployment. For HightTechU students, your team's SCRUM master will be in charge of this.

Notes:

* You may want to fork the repository first if you do not have read/write access to the repository. For more information, visit "[Fork a repo](https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo)".
* You may want to create a new repository using the HighTechU repository as a template. For more information, visit "[About Repository Templates](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template#about-repository-templates)".

### Step 1: Open the terminal or command prompt and navigate to your development directory.

```bash
  # Example: Navigate to Your-Development-Folder
  # "cd" means Change Directory
  cd your-development-folder
```

> _Note:_ We recommend working from a general development folder, `development` or from the `desktop`

### Step 2: Clone the project locally. For more information, visit "[Cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository#cloning-a-repository)".

```bash
  # URL: Check which repository you are trying to clone. It may not be the one in the example below.
  git clone https://github.com/hightechu/techccelerator-2022.git
```

### Step 3: Navigate to the project directory.

```bash
  # Project Directory: Check the name of your repository. It may not be the one in the example below.
  cd techccelerator-2023
```

### Step 4: Switch to a new branch from `main`.

_Note:_ It is important that developers do not work directly in the `main` branch. The `main` branch should remain stable.

```bash
  # Replace <branch_name> with the name of your new branch.
  # Example: git checkout -b my-branch-name
  git checkout -b branch_name
```

> We recommend calling your branch `your-name`

### Step 5: Install the npm dependencies.

```bash
  npm install
```

### Step 6: Open the project in your preferred code editor.

```bash
  # Example: Open VS Code
  code .
```

<h2 id="3">⚙️ Setup Configuration</h2>

After cloning the repository, we should set up a local copy of the database to be able to test on before pushing to main. Create a file in the root folder called `.env`. Copy the contents of `.env.example`. Do not change anything that is already there!

### Step 1 
*Only the SCRUM Master* will create an account and app on [Firebase](https://firebase.google.com/). Keep Google Analytics enabled.<br>

### Step 2
The SCRUM Master will:
- Go to Cloud Firestore and create a database. Under rules, make sure it says `allow: read, write`
- Go to authentication and enable eamil/password as a sign in method
- Click on "add a web app" and create a new web app

### Step 3
Each team member (each local copy of the repo) will copy/paste the secrets into your `.env` file. *These are unique to your project and should not be shared with anyone:*<br>
```
const firebaseConfig = {
  apiKey: "SECRET",
  authDomain: "SECRET",
  projectId: "SECRET",
  storageBucket: "SECRET",
  messagingSenderId: "SECRET",
  appId: "SECRET",
  measurementId: "SECRET"
};
```
Only copy what's inside the quotation marks. You'll add it to your `.env` file with no spaces between the variable name and its value, like this:
```
REACT_APP_apiKey=SECRET
```

> Everyone in the team must have a `.env` file. However, the contents of each file will be the same - you'll all use the one app created by the SCRUM Master.


<h2 id="4">💡 Deployment</h2>

This is the information on how to set up your local environment and run the project locally.

### Test your app locally

To test your app, run `npm start` in the root folder of your project directory. Once the app has built in development mode, it will automatically open in http://localhost:3000/

> Please be aware that you are working with the same database as the live project. In other words, anything you add to or delete from the database while developing will stay added or deleted when you deploy the app!

Always test your app locally before deployment.

### Set up Firebase hosting

> For HighTechU students, only thr SCRUM Master will need to do this.

First, make sure you've installed Firebase tools:
```
npm install -g firebase-tools
```

Then, create a build of your app:
```
npm run build
```

You'll need to login to Firebase. Run `firebase login` to get a login prompt.

Initialize Firebase by running `firebase init`. You'll be prompted to do a few things: 
- Select `hosting` and press ENTER
- Select `Use an existing project` and press ENTER. Select the name of the project you just created.
- Type `build` and press ENTER
- Enter y (configure as a single-page app)
- Enter N (do *not* overwrite index.html)

Deploy the app by running `firebase deploy`. This may take a few minutes. Then, open up your app with the hosting URL it provides.

### Set up automatic deployment

> For HighTechU students, only the SCRUM Master should do this.

Run `firebase login:ci` and copy the token it generates. 

> You may get another login prompt first.

On your Github repo, go to *Settings > Secrets and Variables > Actions*

Create a new repository secret called `FIREBASE_TOKEN`. This is cAse sEnSiTiVe! For the value, paste in the token you just copied.

That's it! Now, whenever you merge into the main branch, Github will automatically build and deploy your project. This will take 3-5 minutes.

> Always test code locally before pushing to your branch and making a pull request. Only HTU staff can merge your request into main.

### Template functions

The Techccelerator React app template comes with the following functions implemented:

- Register user (/signup)
- Login user (/login)
- Add to database (/adddatasample)

The following pages also exist:

- About page (/about)
- User homepage (/home) that is only visible when a user is logged in. This is also where the user can logout

> _Hint:_ These functions and pages also give you a basic outline of how to write a function and interact with the database.

### Problems?

Do not worry if your application doesn't respond. Ask for help, and we can troubleshoot together to solve the problem.

## 🌟 Conclusion

You can now start developing. If you have any questions, feel free to ask. We want you to succeed!