Feature: Account in Yandex Mail

  @smoke @regression
  Scenario: Logout Yandex Mail
    Given I am logged in Yandex mail
    When I Logout from Yandex mail
    Then I can see the login Page