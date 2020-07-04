const { Builder,By,Key,until } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
  
async function profile(){
    try {
             let namerequired;
             let phonerequired;
             let namevalidation;
             let phonevalidation;
         // login 
         await  driver.get("https://staging.dresma.com/login");
         await driver.findElement(By.css("#email")).sendKeys("aditi@dresma.com",Key.TAB);
         
         await driver.findElement(By.css("#password")).sendKeys("a@123456",Key.RETURN);

        
         
         // profile
         
         await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/span/div/div/div[2]/ul[2]/li/a/i")));
         //sleep for toast message to disapper
         await  driver.sleep(9000);
         await driver.findElement(By.xpath("/html/body/div/div/span/div/div/div[2]/ul[2]/li/a/i")).click();
         await driver.findElement(By.css(".dropdown-menu > li:nth-child(1) > a:nth-child(1)")).click();
         // create new entity
         /*
         await driver.sleep(9000);
         await driver.findElement(By.css("div.gray-bg-container > div > div.create > div > div > a")).click();
         // put the values in create new entity
         await driver.findElement(By.xpath("//*[@id='company_name']")).sendKeys("Dresma-Technology",Key.TAB);

         await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[1]/div[5]/div")).click();
         await driver.findElement(By.css("#react-select-2-option-100")).click();
         await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[1]/div[6]/div")).click();
         await driver.findElement(By.css("#react-select-3-option-2")).click();
         await driver.findElement(By.xpath("//*[@id='company_address_lineone']")).sendKeys("Samalka New Delhi-37",Key.TAB);
         await driver.findElement(By.xpath(" //*[@id='city_name']")).sendKeys("Delhi",Key.TAB);
         await driver.findElement(By.xpath("//*[@id='company_postal'] ")).sendKeys("110037",Key.TAB);
         await driver.findElement(By.xpath(" /html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[1]/div[12]/div")).click();
         await driver.findElement(By.css("#react-select-5-option-9")).click();
         await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[1]/div[16]/div")).click();        
         await driver.findElement(By.css(" #react-select-4-option-0")).click();
         await driver.findElement(By.xpath(" //*[@id='company_gst_number']")).sendKeys("12444444",Key.TAB);
         // continue
         await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/div/div[2]/div/form/div[3]/div/span/button")).click();
           */
         // update profile
                     
         await  driver.sleep(9000);

           await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[1]/div[2]/div/div/div[2]/div/i")).click();
           await driver.sleep(5000);

           await driver.findElement(By.xpath('//*[@id="inputUpload"]')).sendKeys(__dirname+"\\profile.jpg");



           
        await driver.findElement(By.xpath('//*[@id="first_name"]')).sendKeys(Key.chord(Key.CONTROL, "a", Key.DELETE, Key.NULL));
                   // update value
        await driver.findElement(By.xpath('//*[@id="first_name"]')).sendKeys("Sakshishar",Key.TAB);
        
        await driver.findElement(By.xpath('//*[@id="phone"]')).sendKeys(Key.chord(Key.CONTROL,"a",Key.DELETE,Key.NULL));
          // update value
        await driver.findElement(By.xpath('//*[@id="phone"]')).sendKeys("8826576533",Key.TAB);
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[1]/div[2]/div/div/div[2]/form/div/div[4]/div")).click();

        await driver.findElement(By.css("#react-select-2-option-0")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[1]/div[2]/div/div/div[2]/form/div/div[5]/button[1]/i")).click();

        // valdiation check
         //namerequired = await driver.findElement(By.xpath("//*[@id='profile-form']/div/div[1]/span")).getText();
         //phonerequired = await driver.findElement(By.xpath("//*[@id='profile-form']/div/div[3]/span")).getText();
         //namevalidation = await driver.findElement(By.xpath("//*[@id='profile-form']/div/div[1]/span")).getText();
         //phonevalidation = await driver.findElement(By.xpath("//*[@id='profile-form']/div/div[3]/span")).getText();

         if (namerequired == "First name is required!") {
           console.log(" first test cases passed ");
           
         } else {
           console.log("first name test cases failed");
           
         }
         if (phonerequired == "Phone is required!") {
           console.log("phone required test cases passed");
           
         } else {
           console.log("phone required test cases failed")
           
         }
        if (namevalidation == "Provided Name is Invalid") {
          console.log("provided name invalid test case passed");
          
        } else {
          console.log("provided name invalid test case failed");
          
        }
        if (phonevalidation == "Provided Phone Number is Invalid") {
          console.log("provided name  invalid phone test case passed");

          
        } else {
          console.log("provided name invalid phone test case failed");

        }



        // entity update
        
         
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/div[1]/div[1]/h4/span/i")));
        //sleep for toast message to disapper
        await  driver.sleep(9000);
        await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[1]/h4/span/i")).click();
        await driver.findElement(By.xpath("//*[@id='company_name']")).sendKeys(Key.chord(Key.CONTROL,"a",Key.DELETE,Key.NULL));
        // update value
        await  driver.findElement(By.xpath("//*[@id='company_name']")).sendKeys("Technology-Dresma-01",Key.TAB);
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/form/div[1]/div[2]/div")).click();
        // option selected
        await driver.findElement(By.css("#react-select-3-option-4")).click();
        // update company address
        await driver.findElement(By.xpath("//*[@id='company_address_lineone']")).sendKeys(Key.chord(Key.CONTROL,"a",Key.DELETE,Key.NULL));
        // update value
        await  driver.findElement(By.xpath("//*[@id='company_address_lineone']")).sendKeys("Bestechtower",Key.TAB);
        // update postal code
        await driver.findElement(By.xpath("//*[@id='company_postal']")).sendKeys(Key.chord(Key.CONTROL,"a",Key.DELETE,Key.NULL));
        // update value
        await  driver.findElement(By.xpath("//*[@id='company_postal']")).sendKeys("23456677",Key.TAB);
        // update phone number
        await driver.findElement(By.xpath("//*[@id='company_phone']")).sendKeys(Key.chord(Key.CONTROL,"a",Key.DELETE,Key.NULL));
        // update 
        await  driver.findElement(By.xpath("//*[@id='company_phone']")).sendKeys("8826576533",Key.TAB);
        // click value
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/form/div[2]/div/button[1]")).click();

       // billing details update

        // sleep message
        await driver.sleep(9000);
        await driver.findElement(By.xpath("//*[@id='5ed61c7aa0c01114cd1ecf42']/div[3]/div[1]/h4/a")).click();
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/div[1]/h4/span/i")).click();
       // update billing details
       await driver.findElement(By.xpath("//*[@id='billing_name']")).sendKeys(Key.chord(Key.CONTROL,"a",Key.DELETE,Key.NULL));
        // update value
        await  driver.findElement(By.xpath("//*[@id='billing_name']")).sendKeys("Technology-100",Key.TAB);

        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[1]/div/div/div[3]/div[2]/div/div/div[3]/div")).click();
        await driver.sleep(5000)
        await driver.findElement(By.css("#react-select-10-option-1")).click();

        // update button
        await driver.findElement(By.css(".button.btn:nth-child(1)")).click();
        

         // team member

         // sleep message
         
         await driver.sleep(9000);
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[2]/div/div/div[5]/div[1]/h4/a")).click();
       await driver.findElement(By.xpath("//*[@id='assign-5e9ff25e1cbbac489f74722d']/div/span/div[3]/div/a")).click();
         await driver.findElement(By.xpath("//*[@id='email']")).sendKeys("aditi123@abc.com",Key.TAB);
         // select role
         await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[2]/div/div/div[5]/div[2]/div/span/div[2]/div/div/form/div/div[2]/div")).click();
         await driver.findElement(By.css("#react-select-5-option-1")).click();
         await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div[2]/div/div/div[5]/div[2]/div/span/div[2]/div/div/form/div/div[3]/span/button")).click();
     
        

        } 
        catch (error) {
            console.log(error);
            
        }
        
    }
      
       
 
        
   
profile();

//await driver.findElement(By.css(" div.gray-bg-container > div > div.create > div > div > a")).click();
