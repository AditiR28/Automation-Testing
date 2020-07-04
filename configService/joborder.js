const { Builder,By,Key,until } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();

 
async function joborder(){
     let uploadfirst;
     let drivetest;
     let dropbox;
    try {
            // login 
        await  driver.get("https://staging.dresma.com/login");
        await driver.findElement(By.css("#email")).sendKeys("aditidresma@gmail.com",Key.TAB);
        await driver.findElement(By.css("#password")).sendKeys("a@123456",Key.RETURN);

        // job-order
        await driver.sleep(5000)
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div[1]/div[2]")));
        await  driver.sleep(5000)
        await driver.findElement(By.xpath("//*[@id='jobList']")).click();
        // 

        // select entity
        await  driver.sleep(5000)
        await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[1]/div[2]/div[2]/div")).click();
        await driver.sleep(5000)
        await driver.findElement(By.css("#react-select-2-option-1")).click();

        // job order label

        await driver.findElement(By.xpath("//*[@id='Job Order Label']")).sendKeys("corp123",Key.TAB);
        // select template
        await driver.sleep(9000)
          await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[1]/div[6]/div/div/div/div")).click();
        await  driver.sleep(9000)
        await driver.findElement(By.css("#react-select-3-option-1")).click();
       // await  driver.sleep(2000)//

       // url upload
       /*
       
       await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[2]/div/div[1]/p[2]/label/span")).click();
       await  driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[2]/div/div[2]/div[1]/div")).click();
       await driver.findElement(By.css("#react-select-4-option-0")).click();
       await driver.findElement(By.xpath("//*[@id='Url']")).sendKeys("www.jkl.com",Key.TAB);
       await  driver.findElement(By.xpath("//*[@id='submit']")).click();
       */
       
      // ftp transfer

      /* await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[2]/div/div[1]/p[2]/label/span")).click();
       await  driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[2]/div/div[2]/div[1]/div")).click();
       await driver.findElement(By.css("#react-select-4-option-1")).click();
       await driver.findElement(By.xpath("//*[@id='Url']")).sendKeys("www.abc.com",Key.TAB);
       await driver.findElement(By.xpath("//*[@id='Username']")).sendKeys("Sumit",Key.TAB);
       await driver.findElement(By.xpath("//*[@id='Password']")).sendKeys("a@123456",Key.TAB);
       await driver.findElement(By.xpath("//*[@id='No. of Images']")).sendKeys("10",Key.TAB);
*/

       //await  driver.findElement(By.xpath("//*[@id='submit']")).click();
       



      // Dropbox
      /*
    
      await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[2]/div/div[1]/p[2]/label/span")).click();
       await  driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[2]/div/div[2]/div[1]/div")).click();
       await driver.findElement(By.css("#react-select-4-option-2")).click();
       await driver.findElement(By.xpath("//*[@id='Url']")).sendKeys("www.abc.com",Key.TAB);
       await driver.findElement(By.xpath("//*[@id='No. of Images']")).sendKeys("30",Key.TAB);
        
       await  driver.findElement(By.xpath("//*[@id='submit']")).click();
       */
       
  
       // Wet Transfer
       
       await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[2]/div/div[1]/p[2]/label/span")).click();
       await  driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/form/div[2]/div/div[2]/div[1]/div")).click();
       await driver.findElement(By.css("#react-select-4-option-3")).click();
       
       await driver.findElement(By.xpath("//*[@id='Source Email']")).sendKeys("aditi@dresma.com",Key.TAB);
       await driver.findElement(By.xpath("//*[@id='No. of Images']")).sendKeys("10",Key.TAB);
        
       await  driver.findElement(By.xpath("//*[@id='submit']")).click();

       // validation

       //await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div[1]/div/div/div[1]")));
        //await driver.sleep(5000)
        //uploadfirst = await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div/div/div[1]")).getText();
          
        //await driver.sleep(5000)
        //drivetest = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/form/div[2]/div/div[2]/div[2]/div/div/span")).getText();

         await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div[1]/div/div/div[1]")));
        await driver.sleep(5000)
        dropbox = await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div/div/div[1]")).getText();
          

        if (uploadfirst == "Upload the Image first") {
            console.log("test case passed");
            
        } else {
            console.log("test case failed");
            
        }
        if (drivetest == "Unable to get images from given url. so, make sure you shared drive folder with given client and images exists at given url") {
            console.log("test case passed");
            
        } else {
            console.log("test case failed");
            
        }
        if (dropbox == "Please check your details") {
            console.log("dropbox test case passed");
            
        } else {
             console.log("dropbox test case failed");
            
        }

       
       
       


        
    } catch (error) {
        console.log(error);
        
    }
}
joborder();