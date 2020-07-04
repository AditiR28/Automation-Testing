const { Builder, By, Key, until } = require("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();

async function datepicker() {
    let results =[];
   
    
    try {
        await driver.get("https://staging.dresma.com/login");
        await driver.findElement(By.xpath("//*[@id='email']")).sendKeys("superadmin@dresma.com", Key.TAB);
        await driver.findElement(By.xpath("//*[@id='password']")).sendKeys("Dresm@618", Key.TAB);
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[5]/span/button")).click();

        // user click
        await driver.sleep(5000)
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/span[1]/nav/div/ul[2]/li[3]/a")));
        await driver.sleep(5000)

        await driver.findElement(By.xpath("//*[@id='app-inner']/span[1]/nav/div/ul[2]/li[3]/a")).click();
        await driver.sleep(15000)


        //await driver.findElement(By.xpath("//*[@id='from_date']")).click();
        //await driver.findElement(By.css(" div.react-datepicker__day.react-datepicker__day--004.react-datepicker__day--keyboard-selected.react-datepicker__day--today")).click();

        //await driver.findElement(By.xpath("//*[@id='till_date']")).click();
        ///await driver.findElement(By.css(" div.react-datepicker__day.react-datepicker__day--004.react-datepicker__day--today")).click();
        // creator name
        await driver.findElement(By.xpath("/html/body/div/div/span[2]/div/div/div[1]/div[7]/div")).click();
        await driver.findElement(By.css("#react-select-4-option-0")).click();
        await driver.findElement(By.xpath("/html/body/div/div/span[2]/div/div/div[1]/div[8]/div")).click();
        await driver.findElement(By.css("#react-select-5-option-0")).click();
        // search button
        await driver.findElement(By.xpath("/html/body/div/div/span[2]/div/div/div[1]/div[9]/button")).click();

        // closed job-order
        await driver.sleep(5000)
        await driver.findElement(By.xpath("/html/body/div/div/span[2]/div/div/div[2]/table/tbody/tr[1]/td[6]/div/div/label/span")).click();

        // create button

         await driver.findElement(By.xpath("/html/body/div[1]/div/span[2]/div/div/div[4]/div/div[2]/button[1]")).click();

        
        // cancel button
        //await driver.findElement(By.xpath("/html/body/div[1]/div/span[2]/div/div/div[4]/div/div[2]/button[2]")).click();

     // closed job-order -02
        //await driver.sleep(9000)
        // edit button
        /*
        await driver.sleep(5000)
        await driver.findElement(By.xpath("/html/body/div/div/span[2]/div/div/div[2]/table/tbody/tr[1]/td[7]/i[1]")).click();
        //edittt button
        await driver.sleep(5000)
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/div/div/form/div[9]/div[1]/button[1]")).click();
        //order status
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/div/div/form/div[3]/div/div")).click();
        await driver.findElement(By.css("#react-select-6-option-1")).click();
        await driver.findElement(By.xpath("//*[@id='jobOrder_saved_loc']")).sendKeys("addddd",Key.TAB);
        // TEMPLATE
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/div/div/form/div[5]/div/div")).click();
        await driver.findElement(By.css("#react-select-7-option-1")).click();
        // IMAGE Count
        await driver.findElement(By.xpath("//*[@id='imageCount']")).sendKeys("23",Key.TAB);
        //RATE 
        await driver.findElement(By.xpath(" //*[@id='jobOrder_cost']")).sendKeys("2.45",Key.TAB);
        // currenvy valueee
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/div/div/form/div[8]/div/div")).click();
        await driver.findElement(By.css("#react-select-8-option-1")).click();
        // update value 
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/div/div/form/div[9]/div/input[1]")).click();
        // cancel value
        //await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/div/div/form/div[9]/div/input[2]")).click();
        */
    } catch (error) {
        console.log(error);

    }
}
datepicker();