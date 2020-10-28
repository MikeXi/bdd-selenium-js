Feature: Validate actions on Selenium Dev website

  @smoke
  Scenario: On visiting the homepage of selenium.dev
    Given I have visited the Selenium official web page
    When There is a title on the page as "SeleniumHQ Browser Automation"
    Then I should be able to click Search in the sidebar

  Scenario: On selenium
    Given I have visited the Selenium
    When There is a title on the page as "SeleniumHQ Browser Automation"
    Then I should be able to click Search in the sidebar