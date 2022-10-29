<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/Nugget-Reactor/FEC">
    <img src="" alt="Logo" width="80" height="80">
  </a>
<h3 align="center">Gnicchi</h3>
  <p align="center">
    Gnicchi is a mock front-end webstore created for our Hack Reactor Front End Capstone Project.
    <br />
    <br />
    <a href="https://github.com/Nugget-Reactor/FEC/issues">Report Bug</a>
    ·
    <a href="https://github.com/Nugget-Reactor/FEC/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

<img src="/client/src/assets/HomepagePic.png">

---
Our team was tasked with creating a mock front-end webstore using a provided black box database. Main features of the website include a product overview section, a related products & your outfit section, a questions & answers section, and a ratings & reviews section. We go into detail about each of these website features below.

### Overview

The main entry point of the page, this section shows the current product, and allows the user to browse through photos of the product, zoom in on the photos, look at the product's different styles, see the prices and description, and add the product to their cart. The Overview's current product informs all of the other widgets and changes based on the user's selection in the Related Products & "Your Outfit" widget.

The version of the cart in this repo is for demo purposes only, but it could be modified for functionality.

### Related Products & "Your Outfit"

Section of site where two collections of products are displayed:
  first: a carousel of products that are related to the current product.
  second: a carousel of products the user has added to their "Outfit" collection.

  By clicking on the Related Product of their choice, the user navigates to that product's page.

  The button on each Related Product card shows a Comparing modal that displays the current product's characteristics along with those of the related product that was clicked.

  The button on each Outfit Product card removes that outfit from the Outfit carousel.

### Questions & Answers
---
Section of store webpage for users to ask and answer questions regarding a certain product. Users will see up to 2 questions with up to 2 answers each loaded by default and depending on how many questions & answers there are.

At the top of the section there is a search bar to filter the list of questions based on user input, and the filtering of the list only takes place after at least 3 characters have been input, resetting to original list if there are less than 3 characters input.

Users can also extend the questions list using the more questions button which will add 2 questions to the end of the list. The see more answers link should extend to show all answers and change text to collapse list when fully extended, and reset back to the condensed list when collapse list is clicked.



### Ratings & Reviews

<img src="/client/src/assets/Reviews.gif">
<img src="./client/src/assets/InputForm.gif">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Meet the team:

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
