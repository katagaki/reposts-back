// Prevent X's errors from tripping Cypress up
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
