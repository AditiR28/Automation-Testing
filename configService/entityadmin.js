const { Builder,By,Key,until,dropdown,Select } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();


async function entity(){
    let results;
    let entityname;
    try {
        
        await driver.get("https://staging.dresma.com/login");
        await driver.findElement(By.xpath("//*[@id='email']")).sendKeys("superadmin@dresma.com", Key.TAB);
        await driver.findElement(By.xpath("//*[@id='password']")).sendKeys("Dresm@618", Key.TAB);
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[5]/span/button")).click();

        // entity click
        await driver.sleep(5000)
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/span/nav/div/ul[2]/li[1]/a")));
        await driver.sleep(5000)
        await driver.findElement(By.xpath("//*[@id='app-inner']/span/nav/div/ul[2]/li[1]/a ")).click();
        // search entity
        

        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[1]/div")).click();
        await driver.findElement(By.css("#react-select-2-option-130")).click();

        
        //await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div")).click();
        //await driver.findElement(By.css("#react-select-3-option-1")).click();
        
         await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[3]/button[1]/i")).click();
        
        //await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div[4]/div/h6")));
        //await driver.sleep(3000)

        //results = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[4]/div/h6")).getText();


       if (results == "No search results found") {
           console.log("search results cases passed");
           
       } else {
            console.log("search results cases failed");
           
       }


        // driver sleep
         await  driver.sleep(5000)
       // Delete button
       //await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[4]/table/tbody/tr/td[6]/i[2]")).click();

     
       //await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div[2]/div/div[5]/div[2]/button[1]")));

       //await driver.sleep(5000)
       //await  driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div[5]/div[2]/button[1]")).click();
        
         // edit button
         
         await driver.findElement(By.xpath("//*[@id='5edf7584d66c987eaf1f64b8']")).click();

           // edit button two
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/div/div/div/form/div[18]/div[1]/button[1]")).click();
           /// payment typee
         await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/div/div/form/div[12]/div/div")).click();
         await driver.findElement(By.css("#react-select-9-option-4")).click();
          
            // update  button
            await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/div/div/form/div[14]/div/button[1]")).click();


         // create new entity
         /*
         await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[1]/div[2]/button[1]/i")).click();
         await driver.findElement(By.xpath("//*[@id='company_name']")).sendKeys("Dresma",Key.TAB);
         await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/div/div[2]/div/form/div[1]/div[5]/div")).click();
         await  driver.findElement(By.css("#react-select-4-option-100")).click();
         await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[1]/div[6]/div")).click();
         await  driver.findElement(By.css("#react-select-5-option-2")).click();
         await  driver.findElement(By.xpath("//*[@id='company_address_lineone']")).sendKeys("Bestech busniess towwer",Key.TAB);
         await  driver.findElement(By.xpath("//*[@id='city_name']")).sendKeys("New Delhi",Key.TAB);
         await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[1]/div[12]/div")).click();
         await  driver.findElement(By.css("#react-select-7-option-12")).click();
         await  driver.findElement(By.xpath("//*[@id='company_postal']")).sendKeys("110037",Key.TAB);
         await  driver.findElement(By.xpath("//*[@id='company_gst_number']")).sendKeys("24424242",Key.TAB);
         await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[1]/div[16]/div")).click();
         await  driver.findElement(By.css("#react-select-6-option-1")).click();
         // contniue button
         await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[3]/div/span/button")).click();
         // Back button
         //await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[3]/div/button")).click();
         // negative test cases
       await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")));
       await driver.sleep(5000)
       entityname = await driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();

         if (entityname == "Entity Name already Exists,Please choose different name") {
             console.log("entity test cases passed");
             
         } else {
             console.log("entity test cases failed");
             
         }
         */

    } catch (error) {
              console.log(error);
    }
}
entity();