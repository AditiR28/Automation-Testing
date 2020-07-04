const { Builder,By,Key,until } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();
 async function template(){
     let companyrequired;
     let categoryrequired;
     let templaterequired;
     let bannerrequired;
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

        // create new template
        await driver.sleep(5000)
        await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[1]/div[2]/button/i")).click();
        // select option

        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/form/div[1]/div/div")).click();
        await driver.sleep(5000)
        await driver.findElement(By.css("#react-select-4-option-0")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/form/div[2]/div/div")).click();
        await driver.sleep(5000)
        await driver.findElement(By.css("#react-select-5-option-120")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/form/div[3]/div/div")).click();
        await driver.sleep(5000)
        await driver.findElement(By.css("#react-select-6-option-1")).click();
        
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/form/div[4]/div/button")).click();


        //await driver.sleep(5000)
        //companyrequired = await driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();
        //await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")));

        //await driver.sleep(5000)
        //categoryrequired = await driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();

        // create new template

        await driver.wait (until.elementLocated(By.css("#template_name")));
            
        //await  driver.findElement(By.xpath("//*[@id='template_name']")).sendKeys("Clipping Path");

        // banner image 
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[1]/div[1]/div/div/div[1]/p/i")).click();
        // popup window 
        await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div[4]/div/div/div[2]/div/div[1]/div")).click();
        await driver.findElement(By.css("#react-select-17-option-3")).click();
        // save button
        await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div[4]/div/div/div[2]/div/div[4]/button[2]")).click();

        // output file type
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div[1]/div[1]/div/div")).click();
        await driver.findElement(By.css("#react-select-7-option-0")).click();
        // background image
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div[1]/div[2]/div/div[1]")).click();
        await driver.findElement(By.css("#react-select-8-option-2")).click();
        // background image
        await driver.sleep(5000)
        await driver.findElement(By.xpath("//*[@id='upload-bg-image']")).sendKeys(__dirname+"\\profile.jpg");
          // object alignment
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div[2]/div[2]/div[1]/div")).click();
        await driver.findElement(By.css("#react-select-11-option-1")).click();
        // Advanced Settings
        
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div/div/div/div[1]/div[2]/div[1]/h4/a")).click();
        // color profile 
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div/div/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/div[1]/div")).click();
        await driver.findElement(By.css("#react-select-13-option-0")).click();
        //dpi
        await driver.findElement(By.xpath("//*[@id='dpi']")).sendKeys("2333",Key.TAB);
        // progressive

        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div/div/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/div[2]/div")).click();
        await driver.findElement(By.css("#react-select-14-option-1")).click();

        // Advanced Settings 
        await driver.findElement(By.xpath("//*[@id='accordion']/div[3]/div[1]/h4/a")).click();
        // option select 
        // Clipping Path
        //await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[1]/div/div/div[1]/ul/li[2]")).click();

        await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[1]/div/div/div[1]/ul/li[2]/div[1]")).click();
        await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[1]/div/div/div[1]/ul/li[2]/div[2]")).click();

        // Product Retouch
        await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[2]/div/div/div[1]/ul/li[1] ")).click();
        await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[2]/div/div/div[1]/ul/li[2]")).click();
        await driver.findElement(By.xpath(" //*[@id='collapseThree']/div/div/div/div[2]/div/div/div[1]/ul/li[3]")).click();

        // save template
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[4]/div/div/button")).click();

        // negative scarenios
        await driver.sleep(9000)
        templaterequired = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[1]/span")).getText();

      // banner image 
      //bannerrequired = await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[3]/div[1]/div[1]/div/div/div[1]/span")).getText();





        if (companyrequired == "Company Name Required") {
            console.log("company required test case passes");
            
        } else {
            console.log("company required test case failed");
            
        }
        if (categoryrequired == "Template category is required") {
            console.log("category test cases passed");
            
        } else {
            console.log("category test case failed");
        }
        if (templaterequired == "Please enter template name") {
            console.log("template required test case passed");
            
        } else {
            console.log("template required test case failed");
            
        }

        if (bannerrequired == "Please Select template Banner") {
            console.log("test cases baaner passed");
            
        } else {
            console.log("test cases banner failed");
            
        }
              //await  driver.close()
              //await driver.quit();

     } catch (error) {
         console.log(error);
         
     }
 }
 template();