import { By, Key } from "selenium-webdriver";

export default async function source(driver) {
  try {
    await driver.sleep(100);

    await driver
      .findElement(
        By.css(
          'div[class="col-span-6 p-2 rounded-l-md rounded-ee-md border shadow-[0px_13px_20px_0px_rgba(0,0,0,0.05)] border-[#F4F4F4] dark:border-dark-border-300 bg-white dark:bg-dark-700 overflow-y-auto overflow-hidden-scrollable"] div[class="bg-[#FFFFFF] border-[#DDDDDD] dark:border-dark-border-300 border-[1px] hover:bg-light-100 gap-2 dark:bg-dark-600 dark:hover:bg-dark-300 transition duration-200 rounded-md p-3 py-5 flex flex-col space-y-2 font-medium"] button[class="text-xs bg-[#0C0E30] p-2 text-white dark:bg-dark-200 rounded dark:text-white"]',
        ),
      )
      .click();

    // await driver.sleep(20000);

    // console.log(await driver.windowHandles());
    // await driver.switchTo().frame(2);

    // console.log("Source title is: ", await driver.getTitle());
    // await driver.actions().keyDown(Key.CONTROL).sendKeys("w").perform();
    // await driver.get("https://lex.live/");

    // try {
    //   console.log("close tab");

    //   await driver.sleep(15000);
    //   await driver.close();
    // } catch (error) {
    //   console.error("Close Error:", error);
    // }

    console.log("source Successfull!");
  } catch (error) {
    console.log("Login Error:", error);
    throw new Error("Source Error");
  }
}
