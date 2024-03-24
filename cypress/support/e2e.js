// Prevent X's errors from tripping Cypress up
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

// Store local storage
// From: https://stackoverflow.com/questions/50471047/preserve-cookies-localstorage-session-across-tests-in-cypress

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});
