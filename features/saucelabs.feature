Feature: As a user, i want to view the Saucelabs sandbox page, so that I can prototype my tests

  Scenario: Verify Page title
    Given I want to verify the page title text
    When I open the page
    Then I see the page title is "API Reference | Nightwatch.js"

  Scenario: Verify header
    Given I want to verify the page title text
    When I open the page
    Then I see "Expect" labels on the page

  @smoketest
  Scenario Outline: Verify Page title
    Given I want to verify the page title text
    When I open the page
    Then I see "<HeadingName>", "<LanguageName>" labels on the page
    Examples:
      | HeadingName | LanguageName|
      | Expect | Language Chains  |