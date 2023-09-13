let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    await page.setDefaultNavigationTimeout(50000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    await page.setDefaultNavigationTimeout(40000);
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.setDefaultNavigationTimeout(30000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toMatch("Get started with Team");
  });
});

test("The h1 header content on 'About' page", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/about");
  await page.setDefaultNavigationTimeout(20000);
  const firstLink = await page.$("header div div a");
  await firstLink.click();
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual("About · GitHub");
});

test("The h1 header content on 'Security' page", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/security");
  await page.setDefaultNavigationTimeout(10000);
  const firstLink = await page.$("header div div a");
  await firstLink.click();
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual("GitHub Security · GitHub");
});

test("The h1 header content on 'Features' page", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/features");
  await page.setDefaultNavigationTimeout(70000);
  const firstLink = await page.$("header div div a");
  await firstLink.click();
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual("Features | GitHub · GitHub");
});
