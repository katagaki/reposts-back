describe('reposts-back for X', () => {
    it('Open X login page', () => {
        var username = Cypress.env('username')
        var password = Cypress.env('password')
        var otpSecret = Cypress.env('otpSecret')
        var follows = Cypress.env('follows')
        var turnOnRepostsText = Cypress.env('txtTurnOnReposts')

        // Authenticate
        cy.visit('https://twitter.com', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
            }
        })

        var btnSignIn = cy.get('span').contains('Sign in')
        btnSignIn.click()

        var txtUsername = cy.get('input')
        txtUsername.click()
        txtUsername.type(username)
        var btnNext = cy.get('span').contains('Next')
        btnNext.click()

        var txtPassword = cy.get('input[name="password"]')
        txtPassword.click()
        txtPassword.type(password)
        var btnLogin = cy.get('span').contains('Log in')
        btnLogin.click()

        var txtOTP = cy.get('input')
        txtOTP.click()
        cy.task('generateOTP', otpSecret).then(token => {
            txtOTP.type(token)
        })
        btnNext = cy.get('span').contains('Next')
        btnNext.click()

        cy.wait(2000)
    
        cy.saveLocalStorage()

        // For each profile, re-enable reposts if they are off
        follows.forEach(follow => {
            it(`Follow: ${follow}`, () => {
                var accountId = follow.following.accountId
                var userLink = follow.following.userLink

                cy.restoreLocalStorage()

                cy.visit(userLink, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
                    }
                })

                var btnUserActionMenu = cy.get('div[data-testid="userActions"]')
                btnUserActionMenu.click()

                var mnuUserActions = cy.get('div[data-testid="Dropdown"]')
                var btnTurnRepostsOnOrOff = mnuUserActions.children('div[role="menuitem"]').first()
                
                btnTurnRepostsOnOrOff.contains(turnOnRepostsText).then($body => {
                    btnTurnRepostsOnOrOff.click()
                    cy.get('div[role="alert"]')
                })
            })
        })
    })
})
