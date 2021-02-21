import PageManager from "./page-manager";
export default class SpecialItems extends PageManager {}

// Custom feature that allows for product images to change when hovered on
$("figure").hover(
  function () {
    var image = $(this).find(".card-image");
    var newImg = image.attr("data-hoverimage");
    var currentImg = image.attr("src");
    if (newImg && newImg != "") image.attr("src", newImg);
  },
  function () {
    var image = $(this).find(".card-image");
    var newImg = image.attr("data-src");
    var currentImg = image.attr("src");
    if (newImg && newImg != "") image.attr("src", newImg);
  }
);

function createCart(url, cartItems) {
  return fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItems),
  }).then((response) => response.json());
}

createCart(`/api/storefront/carts`, {
  lineItems: [
    {
      quantity: 1,
      productId: 112,
    },
  ],
})
  .then((data) => console.log(JSON.stringify(data)))
  .catch((error) => console.error(error));

function addCartItem(url, cartId, cartItems) {
  return fetch(url + cartId + "/items", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItems),
  }).then((response) => response.json());
}

function deleteCartItem(url, cartId, itemId) {
  return fetch(url + cartId + "/items/" + itemId, {
    method: "DELETE",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

$("a.add-all").on("click", (e) => {
  addCartItem(
    `/api/storefront/carts/`,
    `46052e83-b0c3-42aa-a1c2-6e1264836769`,
    {
      lineItems: [
        {
          quantity: 1,
          productId: 112,
        },
      ],
    }
  )
    .then((data) => console.log(JSON.stringify(data)))
    .catch((error) => console.error(error));
  alert("added all to cart");
});

$("a.remove-all").on("click", (e) => {
  deleteCartItem(
    `/api/storefront/carts/`,
    `46052e83-b0c3-42aa-a1c2-6e1264836769`,
    `fba26e07-2870-40c0-bbcc-f5928cd45630`
  )
    .then((data) => console.log(JSON.stringify(data)))
    .catch((error) => console.log(error));

  alert("removed all from cart");
});
