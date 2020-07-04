const { Builder,By,Key,until } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();

async function invoice(){
    try {

         // login 
         await  driver.get("https://staging.dresma.com/login");
         await driver.findElement(By.css("#email")).sendKeys("aditi@dresma.com",Key.TAB);
         
         await driver.findElement(By.css("#password")).sendKeys("a@123456",Key.RETURN);

        
         
         // profile
         
         await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/span/div/div/div[2]/ul[2]/li/a/i")));
         //sleep for toast message to disapper
         await  driver.sleep(9000);
         await driver.findElement(By.xpath("/html/body/div/div/span/div/div/div[2]/ul[2]/li/a/i")).click();
         await driver.findElement(By.xpath("/html/body/div/div/span/div/div/div[2]/ul[2]/li/ul/li[2]/a")).click();

         // Pay button
         await driver.wait(until.elementLocated(By.xpath("//*[@id='app-inner']/div[2]/div/div/div[1]/table/tbody/tr/td[7]/span/button")));
         await driver.sleep(5000)
         await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/div[1]/table/tbody/tr/td[7]/span/button")).click();

          await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div[2]/div/div/div[5]/div[2]/button[1]")));
         await driver.sleep(5000)
         await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div/div[5]/div[2]/button[1]")).click();

         // again pay button

         await driver.wait(until.elementLocated(By.xpath("//*[@id='app-inner']/div[2]/div/div/div[1]/table/tbody/tr/td[7]/span/button")));
         await driver.sleep(5000)
         await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/div[1]/table/tbody/tr/td[7]/span/button")).click();
          
          
          // payonneer close button
         
          await driver.wait(until.elementLocated(By.xpath("//*[@id='PayoneerModel']/div[2]/button")));
          await driver.sleep(9000)
         await driver.findElement(By.xpath("//*[@id='PayoneerModel']/div[2]/button")).click();
          
         
         // close button
         
         //await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div[2]/div/div/div[3]/div[2]/button")));
         //await driver.sleep(5000)
         //await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div/div[3]/div[2]/button")).click();
         
           // logout button
           await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/span/div/div/div[2]/ul[2]/li/a")));
           await  driver.sleep(9000);
         await driver.findElement(By.xpath("/html/body/div/div/span/div/div/div[2]/ul[2]/li/a")).click();
         await driver.findElement(By.xpath("/html/body/div/div/span/div/div/div[2]/ul[2]/li/ul/li[3]/a")).click();



    }
    catch(error){
        console.log(error);
    }
}
invoice();