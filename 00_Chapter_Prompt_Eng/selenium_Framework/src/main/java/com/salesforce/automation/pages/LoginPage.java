package com.salesforce.automation.pages;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
    private static final Duration WAIT_TIMEOUT = Duration.ofSeconds(15);

    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement password;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMe;

    @FindBy(xpath = "//div[@id='error']")
    private WebElement errorMessage;

    public LoginPage(WebDriver driver) {
        try {
            this.driver = driver;
            this.wait = new WebDriverWait(driver, WAIT_TIMEOUT);
            PageFactory.initElements(driver, this);
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to initialize the Salesforce login page", exception);
        }
    }

    public void login(String user, String pass) {
        try {
            wait.until(ExpectedConditions.visibilityOf(username)).clear();
            username.sendKeys(user);
            password.clear();
            password.sendKeys(pass);
            wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to submit the Salesforce login form", exception);
        }
    }

    public String getErrorMessage() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(errorMessage)).getText().trim();
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Salesforce login error message was not available", exception);
        }
    }

    public boolean isUsernameValid() {
        try {
            return Boolean.parseBoolean(username.getDomProperty("valid"));
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to read username field validity", exception);
        }
    }

    public boolean isPasswordValid() {
        try {
            return Boolean.parseBoolean(password.getDomProperty("valid"));
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to read password field validity", exception);
        }
    }

    public boolean isRememberMeSelected() {
        try {
            return rememberMe.isSelected();
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to read remember-me selection", exception);
        }
    }

    public void toggleRememberMe() {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(rememberMe)).click();
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to change remember-me selection", exception);
        }
    }
}