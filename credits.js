import { By, Key } from "selenium-webdriver";

export default async function credits(driver) {
  try {
    await driver.sleep(100);

    await driver
      .findElement(
        By.css('img[src="/icons/Theme=light, Name=card-duotone.svg"]'),
      )
      .click();

    await driver.findElement(By.css('input[value="cashfree"]')).click();

    await driver
      .findElement(
        By.css('input[placeholder = "Enter Phone Number"][type="tel"]'),
      )
      .sendKeys("1234567890");

    await driver
      .findElement(
        By.css(
          'button[class="w-full bg-[#0C0E30] text-white py-2 rounded-xl"][type="submit"]',
        ),
      )
      .click();

    await driver.sleep(20000);

    console.log("Credits Successfull!");
  } catch (error) {
    console.log("Login Error:", error);
    throw new Error("Login Error");
  }
}
