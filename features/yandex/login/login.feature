Feature: Login Yandex Mail

  @smoke @regression
  Scenario Outline: Login Yandex Mail
    Given I navigate to the Yandex Mail login page
    When I input the correct username and password
    Then I can see the Yandex Mail title as <title>
    Examples:
      |title|
      |Inbox — Yandex.Mails|
