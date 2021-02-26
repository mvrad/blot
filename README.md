<p align="center">
  <a href="https://blotapp.herokuapp.com">
    <img alt="Gatsby" src="public/images/blot.svg" width="84" />
  </a>
</p>
<div align="center">
  <h1>Blot</h1>
</div>
  <h3>Blot is a to-do app featuring user authentication created in the MERN framework with TypeScript and styled using Material-UI.</h3>
<p align="center">
  <a href="https://github.com/mvrad/blot/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="TravelStar is released under the MIT license.">
  </a>
  <a href="https://circleci.com/gh/mvrad/blot">
    <img src="https://circleci.com/gh/mvrad/blot.svg?style=shield" alt="Current CircleCI build status.">
  </a>
</p>

# Table of Contents

- [Introduction](#introduction)
  - [About Blot](#about-blot)
    - [App Preview](#app-preview)
  - [Under The Hood](#under-the-hood)
  - [To Set Up Locally](#to-set-up-locally)
    - [Requirements](#requirements)
  - [License](#license)
- [Building The App](#building-the-app)
  - [Design](#design)
    - [Home Page](#home-page)
    - [About, Sign Up, and Log In Pages](#about-sign-up-and-log-in-pages)
    - [Creating A New Note](#creating-a-new-note)
    - [Creating A New List](#creating-a-new-list)

# Introduction

## About Blot

Blot is a note-taking app that allows you to create and save notes and lists.

### App Preview

<div align="center">
  <img alt="Blot App Preview" src="public/images/Web 1920 – 1.jpg" width="auto" height="auto">
</div>

## Under The Hood

This project was bootstrapped with Create React App with TypeScript, and uses npm, Material-UI, Node.js, Express, and MongoDB Atlas.

## To Set Up Locally

### Requirements

* [Git](http://git-scm.com/)
* [Create React App](https://create-react-app.dev/)
* [Material-UI](https://material-ui.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

To copy the repository's files from here onto your computer and to view and serve those files locally, at your computer's command line type:
```
git clone https://github.com/mvrad/blot.git
```
Open the files in a text editor such as [Visual Studio Code](https://code.visualstudio.com/) and in the terminal type:
```bash
npm install
```
In the project directory, you can run:
``` bash
npm start
```
To run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## License

Blot is licensed under the [MIT license](https://github.com/mvrad/blot/blob/master/LICENSE).

# Building The App

## Design

Designs were created in Adobe XD.

### Home Page

I wanted a simple design for the home page. The logo is an illustration I licensed from Adobe Stock. I wanted to use Material-UI components for the "Log In" and "Try It" buttons.

<p align="center">
  <img  alt="Home Page" src="public/images/Web 1920 – 1.jpg"  width="auto" height="auto" />
</p>

### About, Sign Up, and Log In Pages

The app will feature user authentication.

<p align="center">
  <img  alt="Home Page" src="public/images/Web 1920 – 2.jpg" width="auto" height="auto" />
  <img  alt="Home Page" src="public/images/Web 1920 – 3.jpg" width="auto" height="auto" />
  <img  alt="Home Page" src="public/images/Web 1920 – 4.jpg" width="auto" height="auto" />
</p>

### Creating A New Note
Having the pen icon highlighted and then clicking where the placeholder text says "Write a note" opens the not-taking prompt.

<p align="center">
  <img  alt="Home Page" src="public/images/Web 1920 – 6.jpg" width="auto" height="auto" />
<p>
Clicking the save icon saves the note to the bottom of the screen.
<p align="center">
  <img  alt="Home Page" src="public/images/Web 1920 – 10.jpg" width="auto" height="auto" />
  <img  alt="Home Page" src="public/images/Web 1920 – 12.jpg" width="auto" height="auto" />
</p>

### Creating A New List
Creating a new list works similary to creating a new note.
<p align="center">
  <img  alt="Home Page" src="public/images/Web 1920 – 7.jpg" width="auto" height="auto" />
  <img  alt="Home Page" src="public/images/Web 1920 – 16.jpg" width="auto" height="auto" />
  <img  alt="Home Page" src="public/images/Web 1920 – 9.jpg" width="auto" height="auto" />
</p>