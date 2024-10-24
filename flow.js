import { Builder, By, Key } from "selenium-webdriver";
import login from "./login.js";
import askAi from "./askAi.js";
import source from "./source.js";
import credits from "./credits.js";
import library from "./library.js";

const email = "vimal@gmail.com";
const password = "vimalonlexlive";
const legalTopic =
  "What is the difference between a lawyer and a legal expert?";

(async function flow() {
  let driver = new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://lex.live/");

    // Login
    await login(driver, email, password);

    // // Ask AI
    // await askAi(driver, legalTopic)

    // // Add credits
    // await credits(driver);

    // // Go to Soucre
    // await source(driver);

    // Go to Library
    await library(driver);

    await driver.sleep(2000);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
