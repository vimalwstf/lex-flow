import { By } from "selenium-webdriver";

export default async function login(driver, legalTopic) {
  try {
    await driver.sleep(100);

    await driver
      .findElement(
        By.css(
          'form textarea[placeholder="Ask about any legal topic and get instant answers..."]',
        ),
      )
      .sendKeys(legalTopic);

    const followUp = await driver
      .findElement(
        By.css('form button img[src="/icons/Theme=light, Name=send.svg"]'),
      )
      .click();

    await driver.sleep(24000);

    await driver
      .findElement(
        By.css(
          'div[class="flex flex-col space-y-3"] div[class="flex flex-col space-y-3 text-sm"]',
        ),
      )
      .click();

    // await driver.executeScript("arguments[0].scrollIntoView(true);", followUp);

    console.log("Asked AI Successfull!");
  } catch (error) {
    console.log("Ask AI Error:", error);
    throw new Error("Ask AI Error");
  }
}
