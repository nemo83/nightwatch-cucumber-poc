Feature: As a user, i want to prototype nightwatch, so that I know how to write tests

  @smoketest
  Scenario: Search for an apple cake recipe
    Given I want to search for an apple cake recipe
    When I search for "Apple Cake Recipe"
    Then I see results for an apple cake

  #failing test to show the screenshot in html report
  Scenario: Verify Page title
    Given I want to verify the page title text
    When I open the page
    Then I see the page title is "API Reference | Nightwatch"

  Scenario Outline: Verify Page title
    Given I want to verify the page title text
    When I open the page
    Then I see "<HeadingName>", "<LanguageName>" labels on the page
    Examples:
      | HeadingName | LanguageName|
      | Expect | Language Chains  |