package step_definitions;

import cucumber.api.java.en.*;
import cucumber.api.PendingException;
import static org.junit.Assert.*;
import cucumber.api.DataTable;
import implementation.Checkout;

public class CheckoutSteps{
    int bananaPrice = 0;
    Checkout checkout = new Checkout();

    @Given("^the price of a \"(.*?)\" is (\\d+)c$")
    public void thePriceOfAIsC(String name, int price) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        bananaPrice = price;
    }

    @When("^I checkout (\\d+) \"([^\"]*)\"$")
    public void iCheckout(int itemCount, String itemName) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        checkout.add(itemCount, bananaPrice);
    }

    @Then("^the total price should be (\\d+)c$")
    public void theTotalPriceShouldBeC(int total) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        assertEquals(total, checkout.total());
    }

    @Given("^table like this$")
    public void tableLikeThis(DataTable arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    // For automatic transformation, change DataTable to one of
    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
    // E,K,V must be a scalar (String, Integer, Date, enum etc)
        System.out.println(arg1.raw().get(1).toString());

    }

    @Given("^table with arg (\\w+) and (\\d+)$")
    public void tableWithArgLmlmAnd(String name, int age) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
        System.out.println(name + "---" + age);
    }



}
