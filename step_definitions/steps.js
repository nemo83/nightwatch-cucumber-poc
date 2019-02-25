const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');

Given(/^I want to verify Saks HP$/, () => {
    client.page.SaksPage().navigate().SetVariant()
    return client.url('https://www.qa.saks.com/Entry.jsp')
})

When(/^I open the page$/, () => {
    const saksPage = client.page.SaksPage()
    saksPage.navigate().waitForElementVisible('@body', 5000)
})

Then(/^I check the text is "([^"]*)"$/, (expectedText) => {
    client.page.SaksPage().navigate().PrintVisitorId()
    return client.page.SaksPage().navigate().BestSeller(expectedText)
})
