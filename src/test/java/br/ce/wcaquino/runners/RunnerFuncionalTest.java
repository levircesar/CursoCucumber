package br.ce.wcaquino.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		glue = "br.ce.wcaquino.steps",
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		tags = {"@funcionais"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerFuncionalTest {
	
	@BeforeClass
	public static void reset() {
		WebDriver driver = new FirefoxDriver();
		driver.get("https://seubarriga.wcaquino.me");
		driver.findElement(By.id("email")).sendKeys("levir@gmail.com");
		driver.findElement(By.id("senha")).sendKeys("levir123");
		driver.findElement(By.xpath("//button[text()='Entrar']")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}
	
}
