import { By } from "selenium-webdriver";

export default async function login(driver, email, password) {
  try {
    await driver.sleep(100);

    // Find the email and password fields and enter the credentials
    await driver
      .findElement(By.css('input[placeholder="Your email"][type="text"]'))
      .sendKeys(email);

    await driver
      .findElement(
        By.css('input[placeholder="Your Password"][type="password"]'),
      )
      .sendKeys(password);

    // Click the login button with text "Login"
    await driver
      .findElement(
        By.className(
          "w-full h-fit py-3 bg-black dark:bg-dark-800 transition-all duration-500 dark:hover:bg-dark-600 rounded-3xl text-white",
        ),
      )
      .click();

    await driver.sleep(1500);

    console.log("Login Successfull!");
  } catch (error) {
    // console.log("Login Error:", error);
    throw new Error("Login Error");
  }
}
