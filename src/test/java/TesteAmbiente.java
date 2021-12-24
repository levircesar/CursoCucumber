import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TesteAmbiente {
	public static void main(String[] args) {
//		System.setProperty("webdriver.geckodriver", "C:\\Users\\levir\\drivers\\geckodriver.exe");
		WebDriver driver = new FirefoxDriver();
		driver.get("https://seubarriga.wcaquino.me");
	}
}
