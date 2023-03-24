# Kuky films (12os-fe-challenge)
 
Kuky films (12os-fe-challenge) is a mini movie application that shows a small set of movies while allowing the users to search for their movie, serie or animation preference.
 
[![Netlify Status](https://api.netlify.com/api/v1/badges/bb81b21c-18cf-4131-943b-ef15fb35eb8f/deploy-status)](https://app.netlify.com/sites/12os-fe-challenge/deploys)
 
#### Hosted link at
 
[www.kukyfilms.com](https://12os-fe-challenge.netlify.app/)
 
### Introduction
 
This is a simple two-page web application that allows users to search for movies, series or animation by title and view a movies details. The application uses the [OMDb API](http://www.omdbapi.com/) to fetch movie data.

![](mainCord.gif)

### Getting Started

Aquire the project by cloning it to your computer either by downloading the zip or using git.
To use git, run the code below:
```
    git clone https://github.com/kdaglas/12os-fe-challenge.git
```

Run the Node package manager (npm) command to install the necessary packages since the application is dependant on them:
```
    npm install
```

Start the project by running the following command:
```
    npm start
```
to run tests, simply run any of the following commands below:
```
    npm run test
    npm run test:coverage
    npm run test:watch 
```

### Prerequisites

- Use a web browser preferrably Chrome.
- You need to have Python3 installed on your computer. To install it go to:
  Python [https://www.python.org/]

### Features
 
- A user can view a small set of movies with their year of production.
- A user can search any movie of their choice by movie title.
- A user can view the details of a single movie.
- A user can view the application on all kinds of devices and browsers.
- A user can switch from light to dark mode and from dark to light mode



![](cord.gif)


### Tasks accomplished
 
- When the application is loaded, a set of movies of page 1 are displayed.
- Use of ReactJS to build the application, and use of React Hooks to manage state.
- Creation of axios API endpoint to fetch the movies from the OMDb API.
- Implementation of two pages: a search page and a movie details page.
- Implemention of search functionality that allows users to search for movies by title.
- Display of search results as a list of movie titles, years, and poster images.
- Implementation of a movie details page that displays additional information about a movie when a user clicks on a search
result.
- The application is responsive and works well on both desktop and mobile devices.
- Use of CSS to style the application.
- Use of Git for version control and the project is hosted here on GitHub.
- Use of modern JavaScript syntax and following of best practices for React development.
- Design Movie item card to hold single movie item.
- Design the not found movie image, logo and no data found for the movie section.
- Design and load results instantly as the user types or as keywords are typed into the search bar.
- Add a count of all movies at the top.
- Add all the responsive CSS for the app to run smoothly on mobile devices.
 
### Added features | Tasks accomplished

- Implementation of the application using Typescript instead of JavaScript.
- Writing of clean, readable, and maintainable code.
- Implementation of pagination on the home page.
- Use of TailwindCSS framework to style the application.
- Writing of unit tests using Jest.
- Add a no internet connection image to tell user when there is no internet to improve user experience
- Add an error message during search so that a user doesn't forget to add a keyword.
- Add a loader for incase of slow internet for a user not to lose hope.
- Design and add the favicon to cater for future SEO purposes.
- Error handling in the axios functionality to cater for any errors
- Host the app on netlify for easy accessibility
- Added gif to read me.
 
### Technologies used


| Badge                | URL                  |
| -------------------- | -------------------- |
| <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/> | [NPM](https://www.npmjs.com/) - package manager for Node.js |
| <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> | [HTML5](https://html.com/) - Markup language |
| <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> | [CSS3](https://css-tricks.com/) - Style sheet language |
| <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/> | [TailwindCSS](https://tailwindcss.com/) - Popular library that is used to style web applications. |
| <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/> | [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript |
| <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> | [React](https://reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces |


| <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/> | [Jest](https://jestjs.io/), a javascript testing library |


### Author

[kdaglas](https://github.com/kdaglas)
