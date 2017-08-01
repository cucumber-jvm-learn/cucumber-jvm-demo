Feature: Checkout
  Scenario Outline: Checkout a banana
    Given the price of a "banana" is 40c
    When I checkout <count> "banana"
    Then the total price should be <total>c

    Examples:
        | count | total |
        | 1    |    40|
        | 2 | 80 |

  Scenario: Test for table
    Given table like this
        |name|age|
        |ogq|32|
        |lm|30|

  Scenario Outline: Test for table with argument
    Given table with arg <name> and <age>
        
    Examples:
        | name | age |
        |ogqogq| 32 |
        |lmlm | 30 |

