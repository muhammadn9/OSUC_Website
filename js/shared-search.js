document.addEventListener("DOMContentLoaded", function () {
  // Get the input field and search button
  var searchInput = document.getElementById("searchInput");
  var searchButton = document.getElementById("searchButton");

  // Get all event items or items you want to search
  var searchableItems = document.querySelectorAll(".searchable-item");

  // Add a click event listener to the search button
  searchButton.addEventListener("click", function () {
    var searchTerm = searchInput.value.toLowerCase();

    // Loop through searchable items and show/hide based on the search term
    searchableItems.forEach(function (item) {
      var itemText = item.textContent.toLowerCase();
      if (itemText.includes(searchTerm)) {
        item.style.display = "block"; // Show the item
      } else {
        item.style.display = "none"; // Hide the item
      }
    });
  });
});
