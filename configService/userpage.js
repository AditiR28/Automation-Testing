const { Builder, By, Key, until } = require("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();

async function userdetails() {
    let results =[];
    
    try {
        await driver.get("https://staging.dresma.com/login");
        await driver.findElement(By.xpath("//*[@id='email']")).sendKeys("superadmin@dresma.com", Key.TAB);
        await driver.findElement(By.xpath("//*[@id='password']")).sendKeys("Dresm@618", Key.TAB);
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[5]/span/button")).click();

        // user click
        await driver.sleep(2000)
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/span/nav/div/ul[2]/li[2]/a")));
        await driver.sleep(5000)
        await driver.findElement(By.xpath("//*[@id='app-inner']/span/nav/div/ul[2]/li[2]/a")).click();
        await driver.sleep(30000)

       for (let i = 0; i < 14; i++) {
        let rows = await driver.findElements(By.xpath("//tbody//tr"));
        
        for (const row of  rows) {
            let rowData = await  row.getText();
           
            let user = rowData.split(/\n/);
            let userData = user[0].split(/\s+/);
            // console.log(userData);
            results.push({
                FirstName: userData[0],
                LastName: userData[1],
                Email : userData[2],
                //Entity : userData.slice(3,-1).toString(),
                Role: userData.slice(-1)[0]
            });
            await driver.findElement(By.css(". div.custom-container > div > div:nth-child(3) > center > ul > li.active")).click();
           
           
       }
        
        }
        console.table(results);

    } catch (error) {
        console.log(error);

    }
}
userdetails();