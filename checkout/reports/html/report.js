$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the price of a \"banana\" is 40c",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I checkout \u003ccount\u003e \"banana\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the total price should be \u003ctotal\u003ec",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "checkout;checkout-a-banana;",
  "rows": [
    {
      "cells": [
        "count",
        "total"
      ],
      "line": 8,
      "id": "checkout;checkout-a-banana;;1"
    },
    {
      "cells": [
        "1",
        "40"
      ],
      "line": 9,
      "id": "checkout;checkout-a-banana;;2"
    },
    {
      "cells": [
        "2",
        "80"
      ],
      "line": 10,
      "id": "checkout;checkout-a-banana;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the price of a \"banana\" is 40c",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I checkout 1 \"banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the total price should be 40c",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 16
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "CheckoutSteps.thePriceOfAIsC(String,int)"
});
formatter.result({
  "duration": 81669540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "banana",
      "offset": 14
    }
  ],
  "location": "CheckoutSteps.iCheckout(int,String)"
});
formatter.result({
  "duration": 139459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 26
    }
  ],
  "location": "CheckoutSteps.theTotalPriceShouldBeC(int)"
});
formatter.result({
  "duration": 1689636,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the price of a \"banana\" is 40c",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I checkout 2 \"banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the total price should be 80c",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 16
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "CheckoutSteps.thePriceOfAIsC(String,int)"
});
formatter.result({
  "duration": 138588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "banana",
      "offset": 14
    }
  ],
  "location": "CheckoutSteps.iCheckout(int,String)"
});
formatter.result({
  "duration": 109855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    }
  ],
  "location": "CheckoutSteps.theTotalPriceShouldBeC(int)"
});
formatter.result({
  "duration": 97906,
  "status": "passed"
});
formatter.uri("checkout001.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout001",
  "description": "",
  "id": "checkout001",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout001;checkout-a-banana",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the price of a \"banana\" is 40c",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I checkout \u003ccount\u003e \"banana\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the total price should be \u003ctotal\u003ec",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "checkout001;checkout-a-banana;",
  "rows": [
    {
      "cells": [
        "count",
        "total"
      ],
      "line": 8,
      "id": "checkout001;checkout-a-banana;;1"
    },
    {
      "cells": [
        "3",
        "40"
      ],
      "line": 9,
      "id": "checkout001;checkout-a-banana;;2"
    },
    {
      "cells": [
        "4",
        "160"
      ],
      "line": 10,
      "id": "checkout001;checkout-a-banana;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout001;checkout-a-banana;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the price of a \"banana\" is 40c",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I checkout 3 \"banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the total price should be 40c",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 16
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "CheckoutSteps.thePriceOfAIsC(String,int)"
});
formatter.result({
  "duration": 106057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    },
    {
      "val": "banana",
      "offset": 14
    }
  ],
  "location": "CheckoutSteps.iCheckout(int,String)"
});
formatter.result({
  "duration": 89181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 26
    }
  ],
  "location": "CheckoutSteps.theTotalPriceShouldBeC(int)"
});
formatter.result({
  "duration": 441669,
  "error_message": "java.lang.AssertionError: expected:\u003c40\u003e but was:\u003c120\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat org.junit.Assert.assertEquals(Assert.java:631)\n\tat step_definitions.CheckoutSteps.theTotalPriceShouldBeC(CheckoutSteps.java:27)\n\tat ✽.Then the total price should be 40c(checkout001.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout001;checkout-a-banana;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the price of a \"banana\" is 40c",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I checkout 4 \"banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the total price should be 160c",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 16
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "CheckoutSteps.thePriceOfAIsC(String,int)"
});
formatter.result({
  "duration": 121688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 11
    },
    {
      "val": "banana",
      "offset": 14
    }
  ],
  "location": "CheckoutSteps.iCheckout(int,String)"
});
formatter.result({
  "duration": 78285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 26
    }
  ],
  "location": "CheckoutSteps.theTotalPriceShouldBeC(int)"
});
formatter.result({
  "duration": 97992,
  "status": "passed"
});
});