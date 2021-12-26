package br.ce.wcaquino.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class InserirContasSteps {

	private WebDriver driver;

	@Dado("^que desejo adicionar uma conta$")
	public void queDesejoAdicionarUmaConta() throws Throwable {
		driver = new FirefoxDriver();
		driver.get("https://seubarriga.wcaquino.me");
		driver.findElement(By.id("email")).sendKeys("levir@gmail.com");
		driver.findElement(By.id("senha")).sendKeys("levir123");
		driver.findElement(By.xpath("//button[text()='Entrar']")).click();
		driver.findElement(By.linkText("Contas")).click();
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("^adiciono a conta \"([^\"]*)\"$")
	public void adicionoAConta(String arg1) throws Throwable {
		driver.findElement(By.id("nome")).sendKeys(arg1);
		driver.findElement(By.xpath("//button[text()='Salvar']")).click();
	}

	@Então("^recebo a mensagem \"([^\"]*)\"$")
	public void receboAMensagem(String arg1) throws Throwable {
		String texto = driver.findElement(By.xpath("//div[starts-with(@class,'alert alert-')]")).getText();
		Assert.assertEquals(arg1, texto);
	}
	
	@After(order = 1 , value = {"@funcionais"} )
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshots/"+cenario.getId()+".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@After(order = 0 , value = {"@funcionais"} )
	public void fecharBrowser() {
		driver.quit();
		System.out.println("terminando");
	}

}
