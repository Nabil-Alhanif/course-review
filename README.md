<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">COURSE-REVIEW</h1>
</p>
<p align="center">
    <em>Efficient Data Management, Powerful User Interaction</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Nabil-Alhanif/course-review?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Nabil-Alhanif/course-review?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Nabil-Alhanif/course-review?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Nabil-Alhanif/course-review?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
    <em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=default&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=default&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=default&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=default&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Sass-CC6699.svg?style=default&logo=Sass&logoColor=white" alt="Sass">
	<br>
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=default&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=default&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style=default&logo=vuedotjs&logoColor=white" alt="Vue.js">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=default&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/Ajv-23C8D2.svg?style=default&logo=Ajv&logoColor=white" alt="Ajv">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=default&logo=JSON&logoColor=white" alt="JSON">
</p>

<br><!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary><br>

- [📍 Overview](#-overview)
- [🧩 Features](#-features)
- [🗂️ Repository Structure](#️-repository-structure)
- [📦 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#️-installation)
  - [🤖 Usage](#-usage)
  - [🧪 Tests](#-tests)
- [🛠 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🔗 Acknowledgments](#-acknowledgments)
</details>
<hr>

## 📍 Overview

This project is a dynamic course review web application for BIMatUBC (University of British Columbia). The central files include the router configuration (`src/router/index.js`), which manages navigation to different views such as Home, About, Reviews, Courses, and PageNotFound. Stores like `course.js`, `instructor.js`, `review.js`, and `user.js` facilitate data communication with APIs, handling functions like fetching, sorting, and validating course, instructor, review, and user data respectively.Key features include an About page (`AboutView.vue`), Course View (`CourseView.vue`), Homepage (`HomeView.vue`), and Page Not Found View (`PageNotFoundView.vue`). Each view enhances user experience with features like search functionality, progress bars, loading messages, error handling, dynamic grids, and customizable Page Not found messages.The applications robust infrastructure and intuitive interface make it easy for users to navigate while providing essential course insights and fostering productive engagement between students, instructors, and UBC courses.

This project uses [`Bun`](https://bun.sh) for package management. As some functions are hardcoded, I can't guarantee compatibility with other node package manager such as npm or yarn. Issue report and pull requests to support other package managers are welcomed! -- Nabil

Readme's written by [`Readme AI`](https://github.com/eli64s/readme-ai), while the contents are proofread by us, it does not eliminate the chances for error. Please notify us of any issues you found, and feel free to open a pull request to fix them :D -- Nabil

---

## 🧩 Features

---

## 🗂️ Repository Structure

```sh
└── ./
    ├── README.md
    ├── bun.lockb
    ├── gsheet
    │   ├── .claspignore
    │   ├── .eslintrc.cjs
    │   ├── appsscript.json
    │   ├── constants.js
    │   ├── courseStore.js
    │   ├── dataUtils.js
    │   ├── instructorStore.js
    │   ├── main.js
    │   ├── reviewStore.js
    │   ├── sheetUtils.js
    │   └── userStore.js
    ├── index.html
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── favicon.ico
    ├── src
    │   ├── App.vue
    │   ├── assets
    │   │   ├── logo.svg
    │   │   ├── main.css
    │   │   ├── star.svg
    │   │   └── tailwind.css
    │   ├── components
    │   │   ├── CourseCard.vue
    │   │   ├── IconRating.vue
    │   │   ├── NavBar.vue
    │   │   └── ReviewCard.vue
    │   ├── main.js
    │   ├── router
    │   │   └── index.js
    │   ├── stores
    │   │   ├── course.js
    │   │   ├── instructor.js
    │   │   ├── review.js
    │   │   └── user.js
    │   ├── utils.js
    │   └── views
    │       ├── AboutView.vue
    │       ├── CourseView.vue
    │       ├── HomeView.vue
    │       └── PageNotFoundView.vue
    ├── tailwind.config.js
    ├── utils
    │   ├── clasp-deploy.js
    │   └── gh-deploy.js
    └── vite.config.js
```

---

## 📦 Modules

<details closed><summary>.</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.html](https://github.com/Nabil-Alhanif/course-review/blob/master/index.html)                 | Index.html establishes the foundation for the Course Review application by setting up the HTML structure, including title and links to fonts, icons, and JavaScript. The primary content container, #app, is reserved for rendering app components upon loading."                                                                                                                                                     |
| [jsconfig.json](https://github.com/Nabil-Alhanif/course-review/blob/master/jsconfig.json)           | Navigation Simplifier\*\*In this project, the `jsconfig.json` file serves to map component paths, streamlining navigation within the `./src` directory of the Vue.js application. This mapping simplifies importing components in a more intuitive manner, making code organization and usage seamless.                                                                                                               |
| [package-lock.json](https://github.com/Nabil-Alhanif/course-review/blob/master/package-lock.json)   | Updates were made to Vue (3.2.0) and other related libraries. Additional modules like wcwidth (1.0.1), webidl-conversions (3.0.1), whatwg-url (5.0.0), which (2.0.2), word-wrap (1.2.5), wrap-ansi (6.2.0) were added, and their respective dependencies are managed too. The code now uses newer Node versions (>= 8).                                                                                               |
| [package.json](https://github.com/Nabil-Alhanif/course-review/blob/master/package.json)             | The package.json file sets up scripts for this open-source project called course-review. It integrates development (dev), building (build), deployment, linting, and formatting tools using Vite, ESLint, Prettier, TailwindCSS, and more. It also includes Google Apps Script dependencies via Clasp and manages dependencies with Bun. In essence, it provides a foundation for building and deploying the project. |
| [postcss.config.js](https://github.com/Nabil-Alhanif/course-review/blob/master/postcss.config.js)   | Configures tailwindcss and autoprefixer in the projects PostCSS setup, enhancing styling efficiency and ensuring cross-browser compatibility for streamlined design development.                                                                                                                                                                                                                                      |
| [tailwind.config.js](https://github.com/Nabil-Alhanif/course-review/blob/master/tailwind.config.js) | This config file tailwind.config.js defines the TailwindCSS setup for the project, including which files (HTML, Vue components, scripts) it applies its styles to. It helps style the entire application consistently, ensuring a unified visual aesthetic across the web application.                                                                                                                                |
| [vite.config.js](https://github.com/Nabil-Alhanif/course-review/blob/master/vite.config.js)         | In the presented Vite configuration file, a developer optimizes project structure for the open-source course-review application. By setting an appropriate base and alias, they streamline URL resolution across components, simplifying navigation and enhancing overall development efficiency within the codebase.                                                                                                 |

</details>

<details closed><summary>gsheet</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [.claspignore](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/.claspignore)             | Basically a .gitignore file but for clasp instead                                                                                                                                                                                                                                                                                                                                                                                       |
| [.eslintrc.cjs](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/.eslintrc.cjs)           | This configuration file sets up ESLint rules for Google AppScript within the specified repository. It includes recommended standards, skipping formatting, and integrates @vue/eslint-config-prettier, along with custom plugins tailored to GoogleAppsScript and JavaScript styleguides. It defines a series of globals, sets parser options, and enforces tab-based indentation for enhanced code consistency throughout the project. |
| [appsscript.json](gsheet/appsscript.json)                                                                  | The appsscript.json file sets up the Google Apps Script environment within the project. It defines crucial configurations like the runtime version and exception logging methods. Access is granted to everyone anonymously, enabling open interaction with the deployed web application.                                                                                                                                               |
| [constants.js](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/constants.js)             | SHEET_NAMES`. These names, USERS, COURSES, INSTRUCTOR, and REVIEWS, act as labels to efficiently navigate the repositorys sheet-based application. By defining these, the system streamlines the handling of various types of data stored in Google Sheets.                                                                                                                                                                             |
| [courseStore.js](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/courseStore.js)         | This JavaScript file, located in the `gsheet/courseStore.js` within the project, manages the structure of courses within Google Sheets. It appends new courses and fetches existing ones based on unique identifiers or codes, ensuring course data remains organized for efficient access and manipulation within the overall application architecture.                                                                                |
| [dataUtils.js](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/dataUtils.js)             | This utility module, `dataUtils.js`, in the projects Google Sheet section, generates unique identifiers using the UUID pattern, verifies empty objects, and escapes special characters for JSON serialization. These functionalities contribute to data management within the open-source projects data-handling layer.                                                                                                                 |
| [instructorStore.js](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/instructorStore.js) | This code file, located in the gsheet/instructorStore.js, manages instructors data within Google Sheets. It appends new instructors to an existing Instructors sheet, checks for instructor existence, and fetches specific instructors by their unique ID. By leveraging these functionalities, it seamlessly interfaces with a larger architecture that utilizes Google Apps Script within the context of a larger web application.   |
| [main.js](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/main.js)                       | This script serves as the backbone for processing Google Sheet requests within our apps architecture. It handles various GET requests like retrieving data from sheets related to users, courses, instructors, and reviews based on specified parameters. Furthermore, it processes form submissions by inserting new rows into appropriate sheets for Users, Courses, Instructors, and Reviews.                                        |
| [reviewStore.js](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/reviewStore.js)         | This script acts as a data manager for student course reviews in Google Sheets, facilitating appending new review data to the Reviews sheet and retrieving reviews based on specific IDs (review_id, user_id, course_id, instructor_id). It ensures the unique addition of each review by checking for duplicates before insertion.                                                                                                     |
| [sheetUtils.js](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/sheetUtils.js)           | Extracts structured data from specific Google Sheet sheets as JSON objects, seamlessly integrating Google Apps Script functionality into the repositorys architecture for data management within the project.                                                                                                                                                                                                                           |
| [userStore.js](https://github.com/Nabil-Alhanif/course-review/blob/master/gsheet/userStore.js)             | In this `userStore.js` script, users are managed in a Google Sheet named Users. New user data is appended to the sheet based on provided details, ensuring no duplicates are added. Existing users can also be retrieved by their unique id for further processing. The code uses Google Apps Script, providing an easy way to handle user data management within this project's architecture.                                          |

</details>

<details closed><summary>src</summary>

| File                                                                                | Summary                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [App.vue](https://github.com/Nabil-Alhanif/course-review/blob/master/src/App.vue)   | This Vue apps main component initializes the application by structuring content with NavBar and RouterView, ensuring seamless user navigation through defined views in the multi-page interface.                                                                                                                                 |
| [main.js](https://github.com/Nabil-Alhanif/course-review/blob/master/src/main.js)   | Integrates global styles, establishes Pinia state management, and configures routing via the createApp function from vue. The application then mounts the root component (App.vue) into an element with id app in the main index.html file of this open-source project that manages user interaction within a learning platform. |
| [utils.js](https://github.com/Nabil-Alhanif/course-review/blob/master/src/utils.js) | In this versatile application, the utility function `isObjectEmpty` serves as a validation mechanism within the JavaScript ecosystem, ensuring objects are properly constructed and void of key-value pairs in the centralized `src/utils.js`. This streamlines data processing throughout the architecture.                     |

</details>

<details closed><summary>utils</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [clasp-deploy.js](https://github.com/Nabil-Alhanif/course-review/blob/master/utils/clasp-deploy.js) | Manages deployment to Google Apps Script. Utilizes execSync for command execution and dotenv, fs, path, and child_process packages. Generates the `.clasp.json` configuration, pulls, pushes, or deploys code based on user input. Essential for synchronizing project updates within the Google Apps Script environment. |
| [gh-deploy.js](https://github.com/Nabil-Alhanif/course-review/blob/master/utils/gh-deploy.js)       | Building the project2. Initializing a new Git repository within the build output directory3. Adding files to the repository, committing changes, and pushing them to the gh-pages branch on GitHub.                                                                                                                       |

</details>

<details closed><summary>src.components</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CourseCard.vue](https://github.com/Nabil-Alhanif/course-review/blob/master/src/components/CourseCard.vue) | Displays interactive CourseCard components for the SPA (Single Page Application) in this Vue project, utilizing router navigation and prop-passing for dynamic rendering based on course data structure within `stores/course.js`. The styled Card features formatted code names and title with hover effect for improved user engagement.                                                                                                                                                                                                            |
| [IconRating.vue](https://github.com/Nabil-Alhanif/course-review/blob/master/src/components/IconRating.vue) | `Rating`, `maxRating`, and `svgPath`. Using Vue, it generates an HTML structure representing filled stars with unique gradients. Styling is applied using SCSS with dynamic colors defined in the component, ensuring visual coherence across the app.                                                                                                                                                                                                                                                                                                |
| [NavBar.vue](https://github.com/Nabil-Alhanif/course-review/blob/master/src/components/NavBar.vue)         | NavBar.vue streamlines navigation in this Vue-based application. By using the RouterLink from vue-router, it creates links for Home, About, and Reviews sections within the layout, ensuring seamless user experience across different app views.                                                                                                                                                                                                                                                                                                     |
| [ReviewCard.vue](https://github.com/Nabil-Alhanif/course-review/blob/master/src/components/ReviewCard.vue) | Engage with [Instructor Name], rated 4.6 stars. Find this course Difficulty: [Difficulty Level] and Workload: [Workload Level]. Highly recommended for learning purposes. Dive into the details about this course, tips to excel, and reviewer info provided below.About the course: Discover key insights, descriptions, and takeaways from the curriculum.Tips to excel: Gain strategic advice to optimize your learning journey.Reviewer Info: Learn about [Instructor Name]s faculty position, academic standing, and timestamps of their review. |

</details>

<details closed><summary>src.router</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.js](https://github.com/Nabil-Alhanif/course-review/blob/master/src/router/index.js) | This file serves as a router configuration in Vue.js for our project, managing URL paths to specific views (Home, About, Reviews, Courses, and PageNotFound). It ensures smooth navigation through our web application, enabling user access to different functionalities efficiently. |

</details>

<details closed><summary>src.stores</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [course.js](https://github.com/Nabil-Alhanif/course-review/blob/master/src/stores/course.js)         | In this file, `course.js` within the Vue.js project structure, an API is utilized to fetch course data from a server. The function `fetchCourses()`, amongst others, validates and stores the returned data in the applications state, ensuring a correct representation of course listings. The functions also handle errors, such as incorrect response formats or connection issues, and gracefully handle these instances. Overall, this file manages course data communication with an external API to enhance the user experience on our Vue app. |
| [instructor.js](https://github.com/Nabil-Alhanif/course-review/blob/master/src/stores/instructor.js) | Fetching all instructors or retrieving a specific instructor by ID. The interaction with this store allows for efficient rendering of instructor-related content in the applications user interface.                                                                                                                                                                                                                                                                                                                                                    |
| [review.js](https://github.com/Nabil-Alhanif/course-review/blob/master/src/stores/review.js)         | This code fetches and validates reviews data from an API, storing it in pinia state. Using sortReviewsByDate and validateMultiReview functions, the response is formatted and sorted according to timestamp for presentation purposes. FetchReviews and fetchReviewsById methods retrieve and return review lists, handling errors gracefully by updating the loading or error states. The API calls are asynchronous, enabling the user interface to respond appropriately while waiting for data.                                                     |
| [user.js](https://github.com/Nabil-Alhanif/course-review/blob/master/src/stores/user.js)             | Manages user data interactions by communicating with an API and validating responses for format integrity using AJV, ensuring only correctly formatted user data is processed within the applications state. The `src/stores/user.js` file streamlines access to individual users and all users, fetching and validating data from a Google Apps Script macro.                                                                                                                                                                                          |

</details>

<details closed><summary>src.views</summary>

| File                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AboutView.vue](https://github.com/Nabil-Alhanif/course-review/blob/master/src/views/AboutView.vue)               | In the given repository, this AboutView.vue file defines the structure for an informative page about the application within the SPA (Single Page Application) architecture. By rendering the about div containing an This is an about page header, it enriches the user experience by providing context on the platform, contributing to its overall usability and engagement.                                                                           |
| [CourseView.vue](https://github.com/Nabil-Alhanif/course-review/blob/master/src/views/CourseView.vue)             | A progress bar illustrating the courses average difficulty level based on student feedback (using icon). 2. An IconRating component for displaying workload average. 3. A submit review button for new student feedback submission. 4. Placeholder content for different load states and error handling, including Waiting for course to be loaded..., "Loading reviews..., Error loading reviews, and a space for showing previously submitted reviews. |
| [HomeView.vue](https://github.com/Nabil-Alhanif/course-review/blob/master/src/views/HomeView.vue)                 | This Vue.js file (`src/views/HomeView.vue`) renders the homepage of a course review application at UBC. It initializes and interacts with a store (`useCourseStore`) to fetch and display courses retrieved from the backend. The homepage includes a search form, loading message, error messages, and a dynamic grid of course cards. The CSS in this file styles the course card grid layout.                                                         |
| [PageNotFoundView.vue](https://github.com/Nabil-Alhanif/course-review/blob/master/src/views/PageNotFoundView.vue) | Displays customizable Page Not found error message when an unreachable route is accessed, promoting seamless user navigation by prompting users to return to the homepage within the given SPA (Single Page Application).                                                                                                                                                                                                                                |

</details>

---

## 🚀 Getting Started

**System Requirements:**

- **NodeJS**: `version x.y.z`
- **Bun**: `version x.y.z`

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the course-review repository:
>
> ```console
> $ git clone https://github.com/Nabil-Alhanif/course-review.git
> ```
>
> 2. Change to the project directory:
>
> ```console
> $ cd course-review
> ```
>
> 3. Install the dependencies:
>
> ```console
> $ bun install
> ```
>
> 4. Setup .env
>
> ```console
> $ cp .env.example .env
> ```

### 🤖 Usage

<h4>From <code>source</code></h4>

> Run the application using the command below:
>
> ```console
> $ bun run dev
> ```

<!--
### 🧪 Tests

> Run the test suite using the command below:
>
> ```console
> $ bun test
> ```
-->

---

## 🛠 Project Roadmap

- [x] `► Setup google form and google sheet for database`
- [x] `► Setup course and review pages`
- [x] `► Improve comments and code styling`
- [x] `► Create a search function for courses`
- [ ] `► User authentication (should be quick, unsure if it would be useful...)`
- [ ] `► On site review input form`
- [ ] `► Migration to actual database (?)`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Nabil-Alhanif/course-review/issues)**: Submit bugs found or log feature requests for the `course-review` project.
- **[Submit Pull Requests](https://github.com/Nabil-Alhanif/course-review/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs. Note: This file doesn't exists yet, because I'm too lazy to make it :))
- **[Join the Discussions](https://github.com/Nabil-Alhanif/course-review/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your local account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone ../.
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to local**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com/Nabil-Alhanif/course-review/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Nabil-Alhanif/course-review">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🔗 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
