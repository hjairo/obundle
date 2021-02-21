(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/special-items.js":
/*!******************************************!*\
  !*** ./assets/js/theme/special-items.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpecialItems; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SpecialItems = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(SpecialItems, _PageManager);

  function SpecialItems() {
    return _PageManager.apply(this, arguments) || this;
  }

  return SpecialItems;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]); // Custom feature that allows for product images to change when hovered on



$("figure").hover(function () {
  var image = $(this).find(".card-image");
  var newImg = image.attr("data-hoverimage");
  var currentImg = image.attr("src");
  if (newImg && newImg != "") image.attr("src", newImg);
}, function () {
  var image = $(this).find(".card-image");
  var newImg = image.attr("data-src");
  var currentImg = image.attr("src");
  if (newImg && newImg != "") image.attr("src", newImg);
});

function createCart(url, cartItems) {
  return fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cartItems)
  }).then(function (response) {
    return response.json();
  });
}

createCart("/api/storefront/carts", {
  lineItems: [{
    quantity: 1,
    productId: 112
  }]
}).then(function (data) {
  return console.log(JSON.stringify(data));
})["catch"](function (error) {
  return console.error(error);
});

function addCartItem(url, cartId, cartItems) {
  return fetch(url + cartId + "/items", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cartItems)
  }).then(function (response) {
    return response.json();
  });
}

function deleteCartItem(url, cartId, itemId) {
  return fetch(url + cartId + "/items/" + itemId, {
    method: "DELETE",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  });
}

$("a.add-all").on("click", function (e) {
  addCartItem("/api/storefront/carts/", "46052e83-b0c3-42aa-a1c2-6e1264836769", {
    lineItems: [{
      quantity: 1,
      productId: 112
    }]
  }).then(function (data) {
    return console.log(JSON.stringify(data));
  })["catch"](function (error) {
    return console.error(error);
  });
  alert("added all to cart");
});
$("a.remove-all").on("click", function (e) {
  deleteCartItem("/api/storefront/carts/", "46052e83-b0c3-42aa-a1c2-6e1264836769", "fba26e07-2870-40c0-bbcc-f5928cd45630").then(function (data) {
    return console.log(JSON.stringify(data));
  })["catch"](function (error) {
    return console.log(error);
  });
  alert("removed all from cart");
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc3BlY2lhbC1pdGVtcy5qcyJdLCJuYW1lcyI6WyJTcGVjaWFsSXRlbXMiLCJQYWdlTWFuYWdlciIsIiQiLCJob3ZlciIsImltYWdlIiwiZmluZCIsIm5ld0ltZyIsImF0dHIiLCJjdXJyZW50SW1nIiwiY3JlYXRlQ2FydCIsInVybCIsImNhcnRJdGVtcyIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibGluZUl0ZW1zIiwicXVhbnRpdHkiLCJwcm9kdWN0SWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWRkQ2FydEl0ZW0iLCJjYXJ0SWQiLCJkZWxldGVDYXJ0SXRlbSIsIml0ZW1JZCIsIm9uIiwiZSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsWTs7Ozs7Ozs7RUFBcUJDLHFELEdBRTFDOzs7O0FBQ0FDLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUNFLFlBQVk7QUFDVixNQUFJQyxLQUFLLEdBQUdGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLGFBQWIsQ0FBWjtBQUNBLE1BQUlDLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVcsaUJBQVgsQ0FBYjtBQUNBLE1BQUlDLFVBQVUsR0FBR0osS0FBSyxDQUFDRyxJQUFOLENBQVcsS0FBWCxDQUFqQjtBQUNBLE1BQUlELE1BQU0sSUFBSUEsTUFBTSxJQUFJLEVBQXhCLEVBQTRCRixLQUFLLENBQUNHLElBQU4sQ0FBVyxLQUFYLEVBQWtCRCxNQUFsQjtBQUM3QixDQU5ILEVBT0UsWUFBWTtBQUNWLE1BQUlGLEtBQUssR0FBR0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsYUFBYixDQUFaO0FBQ0EsTUFBSUMs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QUFDLG1CQUFELENBQUw7QUFDRCxDQWhCRDtBQWtCQWpDLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFDQyxDQUFELEVBQU87QUFDbkNILGdCQUFjLDBHQUFkLENBS0daLElBTEgsQ0FLUSxVQUFDTSxJQUFEO0FBQUEsV0FBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlWLElBQUksQ0FBQ0MsU0FBTCxDQUFlTyxJQUFmLENBQVosQ0FBVjtBQUFBLEdBTFIsV0FNUyxVQUFDRyxLQUFEO0FBQUEsV0FBV0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosQ0FBWDtBQUFBLEdBTlQ7QUFRQU8sT0FBSyxDQUFDLHVCQUFELENBQUw7QUFDRCxDQVZELEUiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gXCIuL3BhZ2UtbWFuYWdlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVjaWFsSXRlbXMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7fVxyXG5cclxuLy8gQ3VzdG9tIGZlYXR1cmUgdGhhdCBhbGxvd3MgZm9yIHByb2R1Y3QgaW1hZ2VzIHRvIGNoYW5nZSB3aGVuIGhvdmVyZWQgb25cclxuJChcImZpZ3VyZVwiKS5ob3ZlcihcclxuICBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLmZpbmQoXCIuY2FyZC1pbWFnZVwiKTtcclxuICAgIHZhciBuZXdJbWcgPSBpbWFnZS5hdHRyKFwiZGF0YS1ob3ZlcmltYWdlXCIpO1xyXG4gICAgdmFyIGN1cnJlbnRJbWcgPSBpbWFnZS5hdHRyKFwic3JjXCIpO1xyXG4gICAgaWYgKG5ld0ltZyAmJiBuZXdJbWcgIT0gXCJcIikgaW1hZ2UuYXR0cihcInNyY1wiLCBuZXdJbWcpO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGltYWdlID0gJCh0aGlzKS5maW5kKFwiLmNhcmQtaW1hZ2VcIik7XHJcbiAgICB2YXIgbmV3SW1nID0gaW1hZ2UuYXR0cihcImRhdGEtc3JjXCIpO1xyXG4gICAgdmFyIGN1cnJlbnRJbWcgPSBpbWFnZS5hdHRyKFwic3JjXCIpO1xyXG4gICAgaWYgKG5ld0ltZyAmJiBuZXdJbWcgIT0gXCJcIikgaW1hZ2UuYXR0cihcInNyY1wiLCBuZXdJbWcpO1xyXG4gIH1cclxuKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcnQodXJsLCBjYXJ0SXRlbXMpIHtcclxuICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSxcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxufVxyXG5cclxuY3JlYXRlQ2FydChgL2FwaS9zdG9yZWZyb250L2NhcnRzYCwge1xyXG4gIGxpbmVJdGVtczogW1xyXG4gICAge1xyXG4gICAgICBxdWFudGl0eTogMSxcclxuICAgICAgcHJvZHVjdElkOiAxMTIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbiAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcblxyXG5mdW5jdGlvbiBhZGRDYXJ0SXRlbSh1cmwsIGNhcnRJZCwgY2FydEl0ZW1zKSB7XHJcbiAgcmV0dXJuIGZldGNoKHVybCArIGNhcnRJZCArIFwiL2l0ZW1zXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpLFxyXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVDYXJ0SXRlbSh1cmwsIGNhcnRJZCwgaXRlbUlkKSB7XHJcbiAgcmV0dXJuIGZldGNoKHVybCArIGNhcnRJZCArIFwiL2l0ZW1zL1wiICsgaXRlbUlkLCB7XHJcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbn1cclxuXHJcbiQoXCJhLmFkZC1hbGxcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGFkZENhcnRJdGVtKFxyXG4gICAgYC9hcGkvc3RvcmVmcm9udC9jYXJ0cy9gLFxyXG4gICAgYDQ2MDUyZTgzLWIwYzMtNDJhYS1hMWMyLTZlMTI2NDgzNjc2OWAsXHJcbiAgICB7XHJcbiAgICAgIGxpbmVJdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgcHJvZHVjdElkOiAxMTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gIGFsZXJ0KFwiYWRkZWQgYWxsIHRvIGNhcnRcIik7XHJcbn0pO1xyXG5cclxuJChcImEucmVtb3ZlLWFsbFwiKS5vbihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZGVsZXRlQ2FydEl0ZW0oXHJcbiAgICBgL2FwaS9zdG9yZWZyb250L2NhcnRzL2AsXHJcbiAgICBgNDYwNTJlODMtYjBjMy00MmFhLWExYzItNmUxMjY0ODM2NzY5YCxcclxuICAgIGBmYmEyNmUwNy0yODcwLTQwYzAtYmJjYy1mNTkyOGNkNDU2MzBgXHJcbiAgKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcblxyXG4gIGFsZXJ0KFwicmVtb3ZlZCBhbGwgZnJvbSBjYXJ0XCIpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==