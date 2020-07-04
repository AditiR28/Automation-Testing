const { Builder,By,Key,until,dropdown,Select } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();


 async function templates(){
     let companyname;
     let templatename;
     let sametemplate;
     let bannerimage;
     let requiredtemplate;
     try {
        await  driver.get("https://staging.dresma.com/login");
        await driver.findElement(By.css("#email")).sendKeys("aditi@dresma.com",Key.TAB);
        await driver.findElement(By.css("#password")).sendKeys("a@12345678",Key.RETURN);

        await driver.wait(until.elementLocated(By.css("#tempList")));
        await driver.findElement(By.xpath("//*[@id='tempList']")).click();




        //Select Entity
        await driver.wait(until.elementLocated(By.css("#app-inner > div.gray-bg-container > div > div > div > div.card-content > div.row.m-b-md > div.col.s12.m9 > div > div")));
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[1]/div[1]/div[1]/div/div/div")).click();
        await driver.findElement(By.css("#react-select-2-option-0")).click();

        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/div[2]/a")).click();
        //
          // Create New Template
        await driver.wait(until.elementLocated(By.css(" div.gray-bg-container > div > div > div > div > form > div:nth-child(1) > div > div")));
        await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/div/div/form/div[1]/div/div")).click();
        await driver.sleep(10000)
        await  driver.findElement(By.css("#react-select-3-option-0")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div/form/div[2]/div/div")).click();
        await driver.sleep(10000)
        await driver.findElement(By.css("#react-select-4-option-0")).click();
        await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div/div/div/form/div[3]/div/button")).click();

        // validation check
        //await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")));
        //await driver.sleep(5000)
        //companyname = await driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();

        // templatename
        //await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")));
        //await driver.sleep(5000)
        //templatename = await driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();
   
       if (companyname == "Company Name Required") {
            console.log("company name test case passed");
            
        } else {
            console.log("company name test case failed");
            
        }
     if (templatename == "Template category is required") {
         console.log("template name test case passed");
         
     } else {
          console.log("template name test case failed");
         
     }

        // put value in template
            // put value in template
        await driver.wait (until.elementLocated(By.css("#collapseOne > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div")));
            
        await  driver.findElement(By.xpath("//*[@id='template_name']")).sendKeys("Clipping Path-01");

        await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[3]/div[1]/div[1]/div/div/div[1]/p/i")).click();
          
        //template banner image
       
        await driver.findElement(By.xpath("//*[@id='BannerImage']/div/div/div[2]/div/div[1]/div")).click();
        await driver.findElement(By.css("#react-select-16-option-4")).click();
        await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div[4]/div/div/div[2]/div/div[4]/button[2]")).click();
       
        // image

        // Basic Settings
        
            await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div[1]/div[1]/div/div")).click();
        await  driver.findElement(By.css("#react-select-5-option-2")).click();
        await  driver.findElement(By.xpath("//*[@id='collapseOne']/div/div/div/div[1]/div[2]/div/div[1]")).click();
        await  driver.findElement(By.css("#react-select-6-option-1")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div[2]/div[1]/div[1]/div")).click();
        await  driver.findElement(By.css("#react-select-7-option-2")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div[2]/div[2]/div[1]/div")).click();
        await  driver.findElement(By.css("#react-select-10-option-2")).click();
        await driver.findElement(By.xpath("//*[@id='top']")).sendKeys("56",Key.TAB);

        // Settings
        

        // Advanced Settings
       
       await  driver.findElement(By.xpath("//*[@id='accordion']/div[2]/div[1]/h4/a")).click();
        await  driver.findElement(By.css("#filename_prefix")).sendKeys("3344",Key.TAB);
        


        //Add-ons field Template
    
        await driver.findElement(By.xpath("//*[@id='accordion']/div[3]/div[1]/h4/a")).click();
        await  driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[1]/div/div/div[1]/ul/li[2]/div[1]")).click();
        await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[2]/div/div/div[1]/ul/li[2]/div[1]")).click();


         //color correction
         await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[4]/div/div/div[1]/ul/li[2]")).click();
    await   driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[5]/div/div/div[1]/ul/li[2]/div[1]")).click();
    await  driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[5]/div/div/div[1]/ul/li[2]/div[2]")).click();

    // color change
    await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[6]/div/div/div[1]/ul/li[2]")).click();
     await driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[6]/div/div/div[1]/ul/li[2]/div[1]")).click();
     await  driver.findElement(By.xpath("//*[@id='collapseThree']/div/div/div/div[6]/div/div/div[1]/ul/li[2]/div[2]")).click();
      
        await driver.findElement(By.css("#instructions")).sendKeys("adititemplate",Key.TAB);
        //save template
        await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[3]/div[4]/div/div/button")).click();

       // validation check


       //sametemplate = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div[2]/div[1]/span")).getText();
       //await driver.sleep(2000)
       //bannerimage = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[3]/div[1]/div[1]/div/div/div[1]/span")).getText();
       //requiredtemplate = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[1]/span")).getText();


        if (sametemplate == "Template name already exist") {
            console.log(" same template test case passed");
            
        } else {
             console.log("same template test case failed");
            
        }
        // banner image validation
        
         if(bannerimage == "Please Select template Banner"){
             console.log(" banner image required test case passed");

         }
         else{
             console.log("banner image required test case failed");
         }
          // required field template name
          
          if (requiredtemplate == "Please enter template name") {
              console.log("required template test case passed");
              
          } else {
               console.log("required template test case failed");
          }



     } catch (error) {
         console.log(error);
         
     }
    }
 templates();
 
