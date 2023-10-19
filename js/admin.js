// Admin Updates
const adminUpdatesContainer = document.getElementById("admin-updates");
const addUpdateButton = document.getElementById("add-update");

addUpdateButton.addEventListener("click", () => {
  const updateText = prompt("Enter the admin update:");
  if (updateText) {
    const updateElement = document.createElement("p");
    updateElement.textContent = updateText;
    adminUpdatesContainer.appendChild(updateElement);
  }
});

// Google Form Link
const googleFormLink = document.getElementById("google-form-link");
googleFormLink.href = "https://your-google-form-link-here"; // Replace with your Google Form link
