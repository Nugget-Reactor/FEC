<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/Nugget-Reactor/FEC">
    <img src="./client/src/assets/Gnicchi.png" alt="Logo" width="200" height="auto">
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
        <li><a href="#overview">Overview</a></li>
        <li><a href="#related-products--your-outfit">Related Products & Your Outfit</a></li>
        <li><a href="#questions--answers">Questions & Answers</a></li>
        <li><a href="#ratings--reviews">Ratings & Reviews</a></li>
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
    <li><a href="#meet-the-team">Meet The Team</a></li>
  </ol>
</details>

## About The Project

<p align="center">
  <img src="./client/src/assets/Homepage.png" alt="Screen capture of the homepage" width="720" height="auto" >
</p>

---
Our team was tasked with creating a mock front-end webstore using a provided black box database. Main features of the website include the product overview section, related products & your outfit section, questions & answers section, and th ratings & reviews section. We go into detail about each of these website features below.

### Overview

The main entry point of the page, this section shows the current product, and allows the user to browse through photos of the product, zoom in on the photos, look at the product's different styles, see the prices and description, and add the product to their cart.

<p align="center">
  <img src="./client/src/assets/image_gallery.gif" alt="Gif of the image gallery in overview widget" width="720" height="auto" >
</p>

---

The Overview's current product informs all of the other widgets and changes based on the user's selection in the Related Products & "Your Outfit" widget, and the user's selection in the style selector component.

<p align="center">
  <img src="./client/src/assets/style_selector.gif" alt="Gif of the style selector in overview widget" width="720" height="auto" >
</p>

The version of the cart in this repo is for demo purposes only, but it could be modified for functionality.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Related Products & Your Outfit

This is the section of site where product collections are displayed:<br><br>
  first: a carousel of products that are related to the current product,<br>
  second: a carousel of the user's own selected products that they add to or remove from their "Outfit" collection if they choose.<br>

<p align="center">
  <img src="./client/src/assets/OutfitAddRemove.gif" alt="Gif of adding a product to and removing a product from the 'Your Outfit' carousel" width="720" height="auto" >
</p>

---

By clicking on the Related Product of their choice, the user navigates to that product's page. This action updates all other widgets to display the data for the product selected.<br>
<p align="center">
  <img src="./client/src/assets/RelatedChangeProduct.gif" alt="Gif of changing the current product by clicking on a related product card" width="720" height="auto" >
</p>

---

The action button on each Related Product's card shows a Comparing modal that displays the current product's characteristics next to those of that particular related product.

<p align="center">
  <img src="./client/src/assets/RelatedProductNavCompare.gif" alt="Gif of the navigation for the Related Products carousel and Comparing Modal" width="720" height="auto" >
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Questions & Answers

Section of store webpage for users to ask and answer questions regarding a certain product. Users will see up to 2 questions with up to 2 answers each loaded by default and depending on how many questions & answers there are.

At the top of the section there is a search bar to filter the list of questions based on user input, and the filtering of the list only takes place after at least 3 characters have been input, resetting to original list if there are less than 3 characters input.

<p align="center">
  <img src="./client/src/assets/qna-search.gif" alt="Gif of the search in questions & answers widget" width="720" height="auto">
</p>

---

Users can also extend the questions list using the more questions button which will add 2 questions to the end of the list and disappear if there are no more questions to load. The see more answers link should extend to show all answers and change text to collapse list when fully extended, and reset back to the condensed list when collapse list is clicked. Within the list users can mark questions or answers as helpful and report them to remove unhelpful questions/answers from the list.


<p align="center">
  <img src="./client/src/assets/QnaList.gif" alt="Gif of the list in questions & answers widget" width="720" height="auto">
</p>

---

To add a question or answer, modals will popup when the respective button/link is clicked that opens a form for user to input their question or answer. The form will validate inputs to ensure mandatory fields are filled in, emails are entered in the correct format, and not more than 5 photos are uploaded. If it passes the validation check the form inputs will be coalesced and posted to the black box and returned on any subsequent gets of the respective list.

<p align="center">
  <img src="./client/src/assets/ModalUpload.gif" alt="Gif of the upload modal in questions & answers widget" width="720" height="auto">
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Ratings & Reviews

This widget contains three main parts. The left-hand side shows the overall rating, as well as a breakdown of the ratings from all the reviews. Clicking on a rating allows the user to filter reviews by that star value. This section also shows the average scores for different characteristics of the item.

<p align="center">
  <img src="./client/src/assets/breakdownDemo.gif" alt="Gif of the reviews widget" width="720" height="auto" >
</p>

---

The right-hand side shows a list of reviews that can be sorted in three different ways. Each review can be given a helpful vote or be reported. If a review has pictures, the user can click on a thumbnail to open the image in a modal.

<p align="center">
  <img src="./client/src/assets/reviewsDemo.gif" alt="Gif of the reviews widget" width="720" height="auto" >
</p>

---

Finally, users have the ability to add new reviews to products by filling out a review form which opens in a modal. The user can give their rating, score different characteristics, add extra info and up to five images.

<p align="center">
  <img src="./client/src/assets/InputForm.gif" alt="Gif of the new reviews form" width="720" height="auto" >
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* Express
* React
* Node

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

To get a local copy of Gnicchi up and running follow these simple steps.

### Prerequisites

* node
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

*Requires a Hack Reactor accepted email to access the API*
1. Get a Github Personal Access Token from [https://github.com/settings/tokens][https://github.com/settings/tokens]
2. Fork the repo
3. Clone the repo
   ```sh
   git clone https://github.com/Nugget-Reactor/FEC.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Copy the exampleConfig.js and rename it config.js
6. Enter your API key in `server/Controllers/env/config.js`
   ```js
   'Authorization': 'INSERT GIT KEY HERE'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Meet the team:

<p>
  :mortar_board: <i>All participants in this project are students in the Hack Reactor Bootcamp</a> <b>@</b> <a href="https://www.hackreactor.com/coding-bootcamp">Hack Reactor</a></i> <br> <br>

  :boy: <b>Jonah Choi</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LinkedIn: <a href="https://www.linkedin.com/in/jonah-choii/">@jonah-choii</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/jonahchoi">@jonahchoi</a> <br>

  :boy: <b>Ahmed Hanafy</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LinkedIn: <a href="https://www.linkedin.com/in/ahmed-hanafy9/">@ahmed-hanafy9</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/reethunavale">@AhmedHanafy9</a> <br>

  :woman: <b>Tessa Thornberry</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LinkedIn: <a href="https://www.linkedin.com/in/theresa-thornberry/">@theresa-thornberry</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/tessathornberry">@tessathornberry</a> <br>

  :boy: <b>Curtis Wang</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LinkedIn: <a href="https://www.linkedin.com/in/curtis-wang-25350975/">@curtis-wang</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/cwang1014">@cwang1014</a> <br>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
