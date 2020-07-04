const { Builder,By,Key,until } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
async function viewjob(){
    try {
        await  driver.get("https://staging.dresma.com/login");
        await driver.findElement(By.css("#email")).sendKeys("aditidresma@gmail.com",Key.TAB);
        
        await driver.findElement(By.css("#password")).sendKeys("a@123456",Key.RETURN);
       
        await driver.sleep(30000)
        await  driver.findElement(By.xpath("//*[@id='5ed8e087ea01503a7a9f71b3']")).click();

        // search element
        //await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div[1]/div[1]/input")).sendKeys("AM-DK-1000",Key.TAB);
        // view joborder
        //await driver.wait(until.elementLocated(By.xpath("//*[@id='5ed4a774bc07cc06900c92a3']")));
        //await driver.sleep(5000)
        //await  driver.findElement(By.xpath("//*[@id='5ed4a774bc07cc06900c92a3']")).click();

        // Add New 
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div[1]/div[3]/a")).click();



    } catch (error) {
            console.log(error);
    }
}
viewjob();