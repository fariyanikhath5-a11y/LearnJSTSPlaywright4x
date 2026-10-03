package com.salesforce.automation.tests;

import java.time.Duration;

import com.salesforce.automation.pages.LoginPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class LoginTest {
    private static final String LOGIN_URL = "https://login.salesforce.com/?locale=in";
    private static final Duration WAIT_TIMEOUT = Duration.ofSeconds(20);

    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeTest
    public void setUp() throws Exception {
        try {
            ChromeOptions options = new ChromeOptions();
            if (Boolean.parseBoolean(System.getenv("SELENIUM_HEADLESS"))) {
                options.addArguments("--headless=new");
            }
            options.addArguments("--disable-dev-shm-usage", "--no-sandbox");
            driver = new ChromeDriver(options);
            driver.manage().timeouts().implicitlyWait(Duration.ZERO);
            driver.manage().window().maximize();
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to start Chrome for Salesforce login tests", exception);
        }
    }

    @BeforeMethod
    public void openLoginPage() throws Exception {
        try {
            driver.get(LOGIN_URL);
            loginPage = new LoginPage(driver);
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to open the Salesforce login page", exception);
        }
    }

    @Test
    public void validCredentialsShouldCompleteLogin() throws Exception {
        String username = System.getenv("SF_USERNAME");
        String password = System.getenv("SF_PASSWORD");
        if (username == null || username.isBlank() || password == null || password.isBlank()) {
            throw new SkipException("Set SF_USERNAME and SF_PASSWORD to run the successful-login test");
        }

        loginPage.login(username, password);
        new WebDriverWait(driver, WAIT_TIMEOUT)
                .until(ExpectedConditions.not(ExpectedConditions.urlContains("login.salesforce.com")));
        Assert.assertFalse(driver.getCurrentUrl().contains("login.salesforce.com"),
                "Successful login should leave the Salesforce login page");
    }

    @Test
    public void invalidCredentialsShouldShowAnError() throws Exception {
        loginPage.login("invalid.user@example.invalid", "InvalidPassword-123");

        Assert.assertFalse(loginPage.getErrorMessage().isBlank(),
                "Invalid credentials should display a login error");
    }

    @Test
    public void missingUsernameShouldBeRejectedByTheForm() throws Exception {
        loginPage.login("", "AnyPassword-123");

        Assert.assertFalse(loginPage.isUsernameValid(),
                "The browser should mark an empty username as invalid");
    }

    @Test
    public void missingPasswordShouldBeRejectedByTheForm() throws Exception {
        loginPage.login("user@example.invalid", "");

        Assert.assertFalse(loginPage.isPasswordValid(),
                "The browser should mark an empty password as invalid");
    }

    @Test
    public void rememberMeShouldToggleSelection() throws Exception {
        boolean initialSelection = loginPage.isRememberMeSelected();

        loginPage.toggleRememberMe();

        Assert.assertEquals(loginPage.isRememberMeSelected(), !initialSelection,
                "Remember-me selection should toggle when clicked");
    }

    @AfterTest(alwaysRun = true)
    public void tearDown() throws Exception {
        if (driver != null) {
            try {
                driver.quit();
            } catch (WebDriverException exception) {
                throw new IllegalStateException("Unable to close the Chrome WebDriver", exception);
            }
        }
    }
}