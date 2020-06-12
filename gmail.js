let puppeteer = require("puppeteer");
let fs = require("fs");
let credentialsFile = process.argv[2];
let pageName = process.argv[3];
let postToLike = process.argv[4];
let url, pwd, user, user2;
(async function() {
    let data = await fs.promises.readFile(credentialsFile, "utf-8");
    let credentials = JSON.parse(data);
    url = credentials.url;
    url2 = credentials.url2;
    user = credentials.user;
    user2 = credentials.user2;
    sub = credentials.sub;
    cbox = credentials.cbox;
    pwd = credentials.pwd;
    sub2 = credentials.sub2;
    cbox2 = credentials.cbox2;
    pwd2 = credentials.pwd2;
    // starts browser
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized", "--disable-notifications"],
        slowMo: 400

    });
    let numberofPages = await browser.pages();
    let tab = numberofPages[0];
    // goto page
    // 1. 
    await tab.goto(url, {
        waitUntil: "networkidle2"
    });
    await tab.waitForSelector("#identifierId");
    await tab.type("#identifierId", user, { delay: 200 });
    await tab.waitForSelector("#identifierNext");
    await tab.click("#identifierNext");
    await tab.waitForSelector("#yDmH0d");
    await tab.type("#yDmH0d", pwd, { delay: 200 });
    await tab.waitForSelector("#passwordNext");
    await tab.click("#passwordNext");
    console.log("User logged in");

    await tab.waitForSelector("div[class ='T-I J-J5-Ji T-I-KE L3']");
    await tab.click("div[class='T-I J-J5-Ji T-I-KE L3']");

    await tab.waitForSelector("textarea[class='vO']");
    await tab.type("textarea[class='vO']", user, { delay: 200 });

    await tab.waitForSelector("input[class='aoT']");
    await tab.type("input[class='aoT']", sub, { delay: 200 });
    await tab.waitForSelector("div[class='Am Al editable LW-avf tS-tW']");
    await tab.type("div[class='Am Al editable LW-avf tS-tW']", cbox, { delay: 200 });

    await tab.waitForSelector("div[class ='T-I J-J5-Ji aoO v7 T-I-atl L3']");
    await tab.click("div[class ='T-I J-J5-Ji aoO v7 T-I-atl L3']");

    await tab.waitForSelector("a[class ='gb_D gb_Ra gb_i']");
    await tab.click("a[class ='gb_D gb_Ra gb_i']");
    await tab.waitForSelector("a[class ='gb_Jb gb_lg gb_tg gb_4e gb_5c']");
    await tab.click("a[class ='gb_Jb gb_lg gb_tg gb_4e gb_5c']");
})()
