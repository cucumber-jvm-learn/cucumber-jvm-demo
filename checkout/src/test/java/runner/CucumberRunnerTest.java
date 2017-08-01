package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty","json:reports/output.json","html:reports/html/"},
        glue = {"step_definitions"},
        features = {"src/test/resource/features"}
)
public class CucumberRunnerTest {
}