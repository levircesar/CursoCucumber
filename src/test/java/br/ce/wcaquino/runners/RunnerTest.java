package br.ce.wcaquino.runners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/inserir_conta.feature",
		glue = "br.ce.wcaquino.steps",
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		tags = {"~@ignore"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerTest {

}
