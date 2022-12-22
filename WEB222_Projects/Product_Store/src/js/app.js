/**
 * WEB222 – Assignment 04
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
 *      Date:       11/18/22
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
  // The default table is the categories 1
  defaultTable();
}

// Invoke the display prodducts function for categories 1
function defaultTable() {
  displayProducts(categories[0]);
}

// Create relevant table items and fill them from products.js
function displayProducts(category) {
  let thead = document.getElementById("header"); // The header for the table
  let tbody = document.getElementById("products"); // The table

  // Reset all the values first
  thead.innerHTML = "";
  tbody.innerHTML = "";

  // Create header element and append it to the table head
  let header = document.createElement("h1");
  let categoryHeader = document.createTextNode(category.description);
  header.appendChild(categoryHeader);
  thead.appendChild(header);

  // Create table elements for the products in the specific category
  let n = 0;
  for (n = 0; n < products.length; n++) {
    let row = document.createElement("tr");
    let col_name = document.createElement("td");
    let col_desc = document.createElement("td");
    let col_price = document.createElement("td");

    // If the products are not discontinued and in the specific category
    if (
      products[n].discontinued == false &&
      products[n].categories == category.id
    ) {
      // Fill the elements from products database
      let name = document.createTextNode(products[n].name);
      col_name.appendChild(name);

      let desc = document.createTextNode(products[n].description);
      col_desc.appendChild(desc);

      // Formatting the price tag display
      let priceFormat = (products[n].price / 100).toFixed(2);

      let price = document.createTextNode(`$ ${priceFormat}`);
      col_price.appendChild(price);

      row.appendChild(col_name);
      row.appendChild(col_desc);
      row.appendChild(col_price);

      tbody.appendChild(row);
    }
  }
}

function main() {
  displayCategories();
}

addEventListener("DOMContentLoaded", main);
