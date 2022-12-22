/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Gurel Sezgin
 *      Student ID: 174331215
 *      Date:       11/26/22
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// Display buttons creation
function displayCategories() {
  var buttons = [];
  var navigation = document.getElementById("category-menu");

  for (let i = 0; i < categories.length; i++) {
    buttons[i] = document.createElement("button");
    let desc = document.createTextNode(categories[i].description);
    buttons[i].appendChild(desc);
    navigation.appendChild(buttons[i]);

    // Event listener that invoke the function which displays content on click
    buttons[i].addEventListener("click", function () {
      displayProducts(categories[i]);
    });
  }
  // The default product category is the first one
  defaultContent();
}

// Invoke the display prodducts function for categories 1
function defaultContent() {
  displayProducts(categories[0]);
}

// Create relevant tags to store products and fill them from products.js
function displayProducts(category) {

  // Main element of the products
  let body = document.getElementById("body"); 
  // Container for product cards
  let container = document.createElement("div"); 
  container.setAttribute("id", "container");

  // Reset all the values first
  body.innerHTML = '';

  // Create header element and append it to the body
  let header = document.createElement("h1");
  let categoryHeader = document.createTextNode(category.description);
  header.appendChild(categoryHeader);
  body.appendChild(header);

  // Create product cards for the products in the specific category
  let n = 0;
  for (n = 0; n < products.length; n++) {
    // Create Product card
    let product_card = document.createElement("div");
    product_card.setAttribute("id", "card");

    // Create Product details inside the card
    let product_details = document.createElement("div");
    product_details.setAttribute("id", "product_details");

    // Create Product image inside the card
    let product_img = document.createElement("img");
    product_img.setAttribute("id", "product_img");

    // Display different images based on product category
    if (category.id == "rw") {
    product_img.setAttribute("src", "/media/red1.jpg");
    }
    else if (category.id == "ww"){
      product_img.setAttribute("src", "/media/white.jpg");
    }
    else if (category.id == "row"){
      product_img.setAttribute("src", "/media/rose.jpg");
    }
    else if (category.id == "hs"){
      product_img.setAttribute("src", "/media/seltzer.jpg");
    }

    // Create tags for product name, description, and price
    let product_name = document.createElement("span");
    let product_desc = document.createElement("p");
    product_desc.setAttribute("id", "product_desc");
    let product_price = document.createElement("p");
    product_price.setAttribute("id", "product_price");

    // If the products are not discontinued and in the specific category
    if (
      products[n].discontinued == false &&
      products[n].categories == category.id
    ) {
      // Fill the elements from products database
      let name = document.createTextNode(products[n].name);
      product_name.appendChild(name);

      let desc = document.createTextNode(products[n].description);
      product_desc.appendChild(desc);

      // Formatting the price tag display
      let priceFormat = (products[n].price / 100).toFixed(2);
      let price = document.createTextNode(`$ ${priceFormat}`);
      product_price.appendChild(price);

      // Append all items to their parents
      product_details.appendChild(product_name);
      product_details.appendChild(product_desc);
      product_details.appendChild(product_price);
  
      product_card.appendChild(product_img);
      product_card.appendChild(product_details);

      container.appendChild(product_card);
    } 
  }
  body.appendChild(container);
}

// Opening functionalty for the nav (set the nav width to 250 px)
function openNav() {
  document.getElementById("category-menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

// Closing functionality for the nav (set the nav width to 0 px)
function closeNav() {
  document.getElementById("category-menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function main() {
  displayCategories();
}

addEventListener("DOMContentLoaded", main);
