/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "wwPC",
    name: "Perfect Chardonnay",
    description:
      "A full bodied white with notes of honey and with a smooth finish",
    price: 2599,
    discontinued: false,
    categories: ["ww"],
  },

  {
    id: "wwFSB",
    name: "Fresh Savignon Blanc",
    description:
      "A light and crisp white with notes of citrus and tropical fruits",
    price: 1999,
    discontinued: false,
    categories: ["ww"],
  },

  {
    id: "wwFPG",
    name: "Fine Pinot Grigo",
    description: "A light and crisp white with notes of green apples and pears",
    price: 1895,
    discontinued: false,
    categories: ["ww"],
  },

  {
    id: "wwHPG",
    name: "House Pinot Gris",
    description: "Dry, but fruity white which is medium bodied",
    price: 2299,
    discontinued: true,
    categories: ["ww"],
  },

  {
    id: "wwSSW",
    name: "Store Signature White",
    description:
      "A white with the blend of 5 grapes, with the notes of stone fruits, apples, pinapples with a crispy finish",
    price: 2799,
    discontinued: false,
    categories: ["ww"],
  },

  {
    id: "rwHPN",
    name: "Heavenly Pinot Noir",
    description: "A light and dry red, with the notes of red berries",
    price: 1899,
    discontinued: false,
    categories: ["rw"],
  },

  {
    id: "rwNDCF",
    name: "Nicer Dicer Cabarnet Franc",
    description:
      "A light and dry red, with the notes of leather, tobacco, and red berries",
    price: 1999,
    discontinued: false,
    categories: ["rw"],
  },

  {
    id: "rwOSM",
    name: "Old School Merlot",
    description:
      "An earthy, versatile medium bodied red, with notes of red and black berries",
    price: 2295,
    discontinued: false,
    categories: ["rw"],
  },

  {
    id: "rwNWCS",
    name: "New World Cabarnet Sauvignon",
    description: "A Californian red with full body and a crisp earthy finish",
    price: 2995,
    discontinued: false,
    categories: ["rw"],
  },

  {
    id: "rwSBN",
    name: "Storm Baco Noir",
    description:
      "A full bodied, rich red with notes of smoke, toast, and coffee",
    price: 2795,
    discontinued: false,
    categories: ["rw"],
  },

  {
    id: "rowRR",
    name: "Raspberry Rose",
    description: "A light and crisp rose with notes of cherries and lemon",
    price: 1599,
    discontinued: false,
    categories: ["row"],
  },

  {
    id: "rowPHR",
    name: "Pink Horse Rose",
    description:
      "A light and off dry rose with notes of red berries and grapefruit",
    price: 1699,
    discontinued: false,
    categories: ["row"],
  },

  {
    id: "rowVR",
    name: "Vintage Rose",
    description: "A sweet rose with notes of strawberry and orange",
    price: 1799,
    discontinued: true,
    categories: ["row"],
  },

  {
    id: "rowHLR",
    name: "Healthy Light Rose",
    description: "A dry and light rose with 0g of sugar per serving (188ml)",
    price: 1499,
    discontinued: false,
    categories: ["row"],
  },

  {
    id: "rowHLR",
    name: "Store Signature Rose",
    description:
      "An off dry and light rose blended from pinot noir, baco noir, sauvignon blanc, and riesling",
    price: 2199,
    discontinued: false,
    categories: ["row"],
  },

  {
    id: "hsWWS",
    name: "House White Wine Spritz",
    description: "A fizzy cooler with the flavor of white wine.",
    price: 355,
    discontinued: false,
    categories: ["hs"],
  },

  {
    id: "hsRWS",
    name: "House Rose Wine Spritz",
    description: "A fizzy cooler with the flavor of rose wine.",
    price: 355,
    discontinued: false,
    categories: ["hs"],
  },

  {
    id: "hsSS",
    name: "House Sangria Spritz",
    description: "A fizzy cooler made from sangria.",
    price: 355,
    discontinued: false,
    categories: ["hs"],
  },

  {
    id: "hsGTPS",
    name: "House Green Tea & Peach Spritz",
    description: "A fizzy cooler with the flavor of green tea and peach.",
    price: 355,
    discontinued: false,
    categories: ["hs"],
  },

  {
    id: "hsWC",
    name: "House Winter Cranberries",
    description:
      "A fizzy cooler with the flavor of cranberries (Winter exclusive).",
    price: 355,
    discontinued: false,
    categories: ["hs"],
  },

  {
    id: "hsLS",
    name: "House Lemonade Spritz",
    description:
      "A fizzy lemonade with the addition of a white wine (Summer exclusive).",
    price: 355,
    discontinued: true,
    categories: ["hs"],
  },
];
