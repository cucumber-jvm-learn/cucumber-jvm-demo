Feature: Checkout001
  Scenario Outline: Checkout a banana
    Given the price of a "banana" is 40c
    When I checkout <count> "banana"
    Then the total price should be <total>c

    Examples:
        | count | total |
        | 3    |    40|
        | 4 | 160 |
