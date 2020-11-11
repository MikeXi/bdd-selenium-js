Feature: Store Locator

@burberry
Scenario: Open Store Locator page
	Given I open Burberry Site
	When I click the Store Locator link in footer
	Then I can see the Store Locator page

@burberry
Scenario Outline: Search for store
	Given I am in Store Locator page
	When I search stores with <province> and <city>
	Then I can see the <searchedStores> with correct store information
    Examples:
      |province|city|searchedStores|
      |Shanghai|Shanghai|上海 (6 间精品店)|
      
@burberry
Scenario Outline: Rich Store page overview
	Given I have searched out the stores
	When I click the See Store Information CTA on one store card
	Then I can see the Rich Store page with <name> and store information
    Examples:
      |name|
      |博柏利嘉里中心旗舰店|