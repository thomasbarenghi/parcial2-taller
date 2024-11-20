/**
 * Handles the login process by validating the user and redirecting if valid.
 */
const handleLogin = (event) => {
  event.preventDefault();
  const user = event.target.user.value.trim();
  const password = event.target.password.value.trim();

  if (isValidUser(user, password)) {
    redirectToAdminPage(user);
  } else {
    displayErrorMessage("Usuario o contraseña invalidos");
  }
};

/**
 * Validates the user credentials.
 */
const isValidUser = (user, password) => {
  return user === "mel" && password === "123";
};

/**
 * Redirects to the admin page with the user's user as a query parameter.
 */
const redirectToAdminPage = (user) => {
  window.location.href = `admin.html?user=${encodeURIComponent(user)}`;
};

/**
 * Displays an error message to the user.
 */
const displayErrorMessage = (message) => {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
};

document.getElementById("login-form").addEventListener("submit", handleLogin);
