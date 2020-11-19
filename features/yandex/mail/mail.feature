Feature: Functions in Yandex Mail

  @smoke @regression
  Scenario Outline: Add Draft mail
    Given I am logged in Yandex mail
    When I add Draft mail with <To>, <Subject>, <Body>
    Then I can find the mail in <Menu> box with <To>, <Subject>, <Body>
    Examples:
      |To              |Subject          |Body          |Menu  |
      |mike_xi@epam.com|Test mail Subject|Test mail Body|Drafts|

  @regression 
  Scenario Outline: Send Draft mail
    Given I am in <DraftsMenu> box
    When I send the Draft mail with <To>, <Subject>, <Body>
    Then I can find the sent mail in <SentMenu> box with <To>, <Subject>, <Body>
    Examples:
      |To              |Subject          |Body          |DraftsMenu|SentMenu|
      |mike_xi@epam.com|Test mail Subject|Test mail Body|Drafts    |Sent    |
