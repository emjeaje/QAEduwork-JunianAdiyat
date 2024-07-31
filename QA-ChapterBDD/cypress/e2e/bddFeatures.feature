# Buatlah scenario dengan format BDD untukll pencarian data (search feature) pada website http://zero.webappsecurity.com/

Feature: Search feature on website http://zero.webappsecurity.com/
    I want to search some data on the website.

    Scenario: Seach field test
        Given I open URL: http://zero.webappsecurity.com/ on browser (for this case I use Chrome)
        When I submit some text on the search field
        Then I should see the result