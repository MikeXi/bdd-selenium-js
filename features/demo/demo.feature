Feature: Demo site test

  @smoke @regression
  Scenario Outline: Login demo site
    Given I navigate to the login page
    When I input correct username and password
    Then I can see the title <title>
    Examples:
      |title|
      |Execute Automations|

  @regression
  Scenario Outline: Login demo site again
    Given I am in login page
    When I input correct username and password
    Then I can see the title <title>
    Examples:
      |title|
      |Execute Automation|