const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');

Given(/^I want to verify the page title text$/, () => {

    return client.url('http://nightwatchjs.org/api/#assert-visible')
})
When(/^I open the page$/, () => {
    const testPage = client.page.TestPage()
    testPage.navigate().waitForElementVisible('@body', 1000)
})
Then(/^I see the page title is "([^"]*)"$/, (expectedTitle) => {
    return client.assert.title(expectedTitle)

})

Then(/^I see "([^"]*)", "([^"]*)" labels on the page$/, function (HeadingName, LanguageName) {
    const testPage = client.page.TestPage()
    return testPage.navigate().Fieldlabels(HeadingName, LanguageName)
});
