/**
 * Handles the login process by validating the user and redirecting if valid.
 * @param {Event} event - The form submission event.
 */
const handleLogin = (event) => {
  event.preventDefault();

  // Get form values
  const user = event.target.user.value.trim();
  const password = event.target.password.value.trim();

  // Reset error message
  resetErrorMessage();

  // Validate the user
  if (isValidUser(user, password)) {
    redirectToAdminPage(user);
  } else {
    displayErrorMessage("Usuario o contraseña invalidos");
  }
};

/**
 * Validates the user credentials.
 * Note: This is a placeholder for demonstration purposes.
 * Avoid validating users directly on the client side in production.
 * @param {string} user - The user entered by the user.
 * @param {string} password - The password entered by the user.
 * @returns {boolean} - Returns true if the user credentials are valid.
 */
const isValidUser = (user, password) => {
  // Replace with secure server-side validation.
  return user === "mel" && password === "123";
};

/**
 * Redirects to the admin page with the user's user as a query parameter.
 * @param {string} user - The user of the authenticated user.
 */
const redirectToAdminPage = (user) => {
  window.location.href = `admin.html?user=${encodeURIComponent(user)}`;
};

/**
 * Displays an error message to the user.
 * @param {string} message - The error message to display.
 */
const displayErrorMessage = (message) => {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
};

/**
 * Resets the error message on the login form.
 */
const resetErrorMessage = () => {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
};

// Assign the login event handler to the form
document.getElementById("login-form").addEventListener("submit", handleLogin);
