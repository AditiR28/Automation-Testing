const { Builder,By,Key,until } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();
async function edittemplate(){
try {
    await driver.get("https://staging.dresma.com/login");
    await driver.findElement(By.xpath("//*[@id='email']")).sendKeys("superadmin@dresma.com", Key.TAB);
    await driver.findElement(By.xpath("//*[@id='password']")).sendKeys("Dresm@618", Key.TAB);
    await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[5]/span/button")).click();

    // template  click
    await driver.sleep(9000)
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/span/nav/div/ul[2]/li[4]/a")));
    await driver.sleep(9000)
    await driver.findElement(By.xpath("/html/body/div/div/span/nav/div/ul[2]/li[4]/a")).click();
    //  editt tempplatee

    await driver.sleep(9000)

    await driver.findElement(By.xpath("//*[@id='5ed743edf4715d320c7a4d3d']")).click();
      // update button
    await driver.findElement(By.xpath("//*[@id='5ed743edf4715d320c7a4d3d']")).click();

    // Pricing type
    await driver.sleep(3000)
    await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/div/form/div[7]/div/div")).click();
    await driver.findElement(By.css("#react-select-5-option-2")).click();
    await driver.findElement(By.xpath("//*[@id='base_number']")).sendKeys("100",Key.TAB);
    await driver.findElement(By.xpath("//*[@id='base_cost']")).sendKeys("10",Key.TAB);
    await driver.findElement(By.xpath("//*[@id='incremental_cost']")).sendKeys("20",Key.TAB);
    // other instruction
    await driver.findElement(By.xpath("//*[@id='instructions']")).sendKeys("templatessss",Key.TAB);
    //update button
    await driver.findElement(By.xpath('/html/body/div/div/div[2]/div/div/div/div[2]/div/div/form/div[14]/div/input[1]')).click();
    // cancel button
    //await driver.findElement(By.xpath('/html/body/div/div/div[2]/div/div/div/div[2]/div/div/form/div[14]/div/input[2]')).click();





    



    
} catch (error) {
    console.log(error);
    
}
}
edittemplate();