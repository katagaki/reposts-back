const { defineConfig } = require("cypress");
const otplib = require("otplib");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                generateOTP(secret) {
                    return otplib.authenticator.generate(secret);
                }
            })
        },
    },
});
