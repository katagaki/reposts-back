# reposts-back

This Cypress script will help you re-enable reposts for any follows you have on X (formerly Twitter). It is mainly for former users of Blindfold for Twitter and other similar tools that are now defunct due to the API pricing changes.


# Prerequisites

- Node.js | [Download](https://nodejs.org/en/download) | [brew install](https://formulae.brew.sh/formula/node)
- NPM | [Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Your X archive | [Guide](https://help.twitter.com/managing-your-account/how-to-download-your-x-archive)


# Setting Up

1. Copy the `cypress.env-sample.json` to `cypress.env.json`.
2. Insert your own username, password, and OTP secret into the `cypress.env.json` file.
    - You may need to set up a new Authenticator app to obtain the OTP secret.
3. Download a copy of your X data archive, and copy the entire array of accounts from the `data/follows.js` file into the `follows` value of the `cypress.env.json` file.
    - A single sample is provided, in the event you are unsure of what to copy.
4. Open a new terminal in the root of the project (containing the `cypress` folder, `cypress.config.js` file, and so on).
5. Run `npm install` to install `cypress` and `otplib`.


# Running Cypress
1. Run `npx cypress open` to open Cypress.
2. Select `E2E Testing`.
3. Select `Start E2E Testing in Electron`.
