Feature: Login to application

  Scenario: Valid login
    Given I open login page
    When I submit login
    Then I should see homepage
