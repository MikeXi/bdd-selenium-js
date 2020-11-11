Feature: Wish List

@burberry
Scenario: Open Sign In page
	Given I open Burberry Site
	When I click the Sign In CTA
	Then I can see the Sign In page

@burberry
Scenario: Register account
	Given I am in the Sign In page
	When I click the Register CTA
	Then I input user information
	And I click the Register CTA again
	Then I can see the Thanks for registering message

@burberry	
Scenario Outline: Open one PLP page
	Given I am in the Thanks for registering page
	When I hover on one menu <menuName>
	And I click the <PLP> page link
	Then I can see the <PLP> page opens
	Examples:
      |menuName|PLP|
      |女士|Trench 风衣|

@burberry
Scenario Outline: Add product to wish list
	Given I find the <PLP> page opens
	When I click the heart icon on the <product> card
	And I hover on the account icon
	Then I can see the <product> on the My Account dropdown
    Examples:
      |PLP|product|
      |Trench 风衣|动物印花丝质围巾式细节棉质轻便大衣|