const { Builder,By,Key,until,dropdown,Select } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();


async function listemplate(){
    let editname;
    let banneredit;
    try {

        // login 
        await  driver.get("https://staging.dresma.com/login");
        await driver.findElement(By.css("#email")).sendKeys("aditi@dresma.com",Key.TAB);
        await driver.findElement(By.css("#password")).sendKeys("a@12345678",Key.RETURN);
        //
        // template list
         await driver.wait(until.elementLocated(By.css("#tempList")));
        await driver.findElement(By.xpath("//*[@id='tempList']")).click();
        //
        
        // select entity
        await driver.wait(until.elementLocated(By.css("#app-inner > div.gray-bg-container > div > div > div > div.card-content > div.row.m-b-md > div.col.s12.m9 > div > div")));
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[1]/div[1]/div[1]/div/div/div")).click();
        await driver.findElement(By.css("#react-select-2-option-0")).click();
        ///
    
        // view template

        await driver.sleep(15000)

        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div[2]/div/div[3]/div[1]/span/button")));
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div[2]/div/div[3]/div[1]/span/button")).click();
       
        // edit template click

        await driver.wait(until.elementLocated(By.css(" div.col.s12.m9.col-inner > div:nth-child(1) > div.template-save-button.col.m6.s12 > div > button")));
        await  driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[2]/div[2]/div[1]/div[2]/div/button")).click();

        // put the values in template

        await driver.wait (until.elementLocated(By.css("#collapseOne > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div")));
            
        await  driver.findElement(By.xpath("//*[@id='template_name']")).sendKeys("Retouching-edit",Key.TAB);
        await  driver.findElement(By.xpath("//*[@id='tags']")).sendKeys("Template-image",Key.TAB);

        //await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[3]/div[1]/div[1]/div/div/div[1]/p/i")).click();

        // template banner image
        /*
        await driver.findElement(By.xpath("//*[@id='BannerImage']/div/div/div[2]/div/div[1]/div")).click();
        await driver.findElement(By.css("#react-select-13-option-4")).click();
        await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div[4]/div/div/div[2]/div/div[4]/button[2]")).click();
        */
        // image

        //Advanced Settings

        // Advanced Settings
       
       await  driver.findElement(By.xpath("//*[@id='accordion']/div[2]/div[1]/h4/a")).click();
       //await  driver.findElement(By.css("#filename_prefix")).sendKeys("3344",Key.TAB);
    // color profile
    await driver.findElement(By.xpath("//*[@id='collapsetwo']/div/div/div/div[2]/div[1]/div[1]/div")).click();
    await driver.findElement(By.css("#react-select-10-option-1")).click();

    // Add-Ons
    await driver.findElement(By.xpath("//*[@id='accordion']/div[3]/div[1]/h4/a")).click();
    
    //color correction
    await   driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[5]/div/div/div[1]/ul/li[2]/div[1]")).click();
    await  driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[5]/div/div/div[1]/ul/li[2]/div[2]")).click();

    // color change
    await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[5]/div/div/div[1]/ul/li[2]")).click();
     await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[5]/div/div/div[1]/ul/li[2]/div[1]")).click();
     await  driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[5]/div/div/div[1]/ul/li[2]/div[2]")).click();
      
     //save template
     await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[3]/div[4]/div/div/button")).click();

     editname = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[1]/span")).getText();
     banneredit = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[1]/div[1]/div/div/div[1]/span")).getText();
     if (editname == "Please enter template name") {
          console.log("edit name test case passed");

         
     } else {
          console.log("edit name test case failed")
         
     }
     if (banneredit == "Please Select template Banner") {
         console.log("test case passed");
         
     } else {
         console.log("test case failed");
         
     }


       

        
    } catch (error) {
         console.log(error);
        
    }
}
listemplate();