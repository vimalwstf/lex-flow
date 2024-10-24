import { By, Key, until } from "selenium-webdriver";

export default async function library(driver) {
  try {
    await driver.sleep(100);

    await driver.findElement(By.linkText("Library")).click();

    await driver
      .findElement(
        By.css(
          'input[placeholder="Search legal documents with context of your problem, fetch statutes, case laws, regulations and more"][type="text"]',
        ),
      )
      .sendKeys("Legal");

    await driver.actions().keyDown(Key.ENTER).perform();

    let book = await driver.wait(
      until.elementLocated(
        By.css(
          'div[class="flex flex-col md:flex-row md:justify-between items-start w-full gap-1"]',
        ),
      ),
      10000,
    );
    await book.click();

    // await driver
    //   .actions()
    //   .keyDown(Key.CONTROL)
    //   .sendKeys("w")
    //   .keyUp(Key.CONTROL)
    //   .perform();
    //
    // await driver.close();

    console.log("Library Successfull!");
  } catch (error) {
    // console.log("Login Error:", error);
    throw new Error("Library Error");
  }
}
