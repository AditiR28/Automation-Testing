const { Builder,By,Key,until } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();


async function registertest(){
    let firstmessage;
    let phonemessage;
    let validpassword;
    let validpassword2;
    let validpassword3;
    try {
        
        await  driver.get("https://staging.dresma.com/");
        await driver.findElement(By.css("#email")).sendKeys("aditidresma1234@abc.com", Key.RETURN);
        await driver.wait(until.elementLocated(By.css("div:nth-child(3) > div > div:nth-child(2) > div > div > div:nth-child(2) > div > span.label.label-default.active")));

        await driver.findElement(By.xpath("//*[@id='first_name']")).sendKeys("Saksshii",Key.TAB);
        await  driver.findElement(By.xpath("//*[@id='phone']")).sendKeys("+123-3883-88383",Key.TAB);
        await driver.findElement(By.xpath("//*[@id='password']")).sendKeys("a@123456",Key.TAB);
        await driver.findElement(By.xpath("//*[@id='password2']")).sendKeys("a@123456",Key.TAB);
        
        await driver.findElement(By.css("div:nth-child(4) > form > div.row > div:nth-child(10) > button")).click(); // continue button

        //await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div[4]/form/div[2]/div[1]/span[2]")));
        await driver.sleep(9000)

        //firstmessage  = await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[2]/div/div/div[4]/form/div[2]/div[1]/span[2]")).getText();
        //phonemessage  = await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div/div[2]/div/div/div[4]/form/div[2]/div[4]/span[2]")).getText();
        //validpassword = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div[4]/form/div[2]/div[6]/span[2]")).getText();
         
        //validpassword2 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div[4]/form/div[2]/div[7]/span[2]")).getText();
        //validpassword3 = await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div[4]/form/div[2]/div[7]/span[2]")).getText();
        
        if (firstmessage == "Provided Name is Invalid ") {
            console.log("test cases passed");
            
        } else {
            console.log("testcases failed");
            
        }
        if (phonemessage == "Provided Phone Number is Invalid") {
            console.log("test cases phone number passed");
            
        } else {
            console.log("test cases phone number failed");
            
        }
        if (validpassword == "Use 8 or more character & atleast 1 numeric & special character"){
            console.log("valid password test cases passed");
        }
        else{
            console.log("valid password test cases failed");
        }
        if (validpassword2 == "Password does not match")
               console.log("valid test cases passed");
    else{
        console.log("Valid test cases failed");
    }

    if ( validpassword3 == "Password should be minimum 8 character") {
        console.log("Password test case passed");
        
    } else {
        console.log("Password test case failed");
        
    }
    } catch (error) {
         console.log(error);
        
    }
}
    

 async function billingtest(){
     let reqbilling;
     let reqcountry;
     let entityname;
 

    try {
        await  driver.wait(until.elementLocated(By.css("div.row.m-t-lg.step-form-labels > span.label.label-default.active")));
        await driver.sleep(2000)
        await driver.findElement(By.xpath("//input[@id ='company_name']")).sendKeys("Differential Technologies Limited");
                   
       
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[5]/div")).click();
        await driver.findElement(By.css("#react-select-2-option-3")).click();
       

        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[6]/div")).click();
        await  driver.findElement(By.css("#react-select-3-option-2")).click();
        await driver.findElement(By.xpath("//*[@id='company_address_lineone']")).sendKeys("Bestech Busniess tower",Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='company_postal']")).sendKeys("22222222222222222222222",Key.TAB);
        //await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[12]/div")).click();
        //await  driver.findElement(By.css("#react-select-5-option-7")).click();
    
        await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[14]/div")).click();
        //await driver.sleep(2000);
        await   driver.findElement(By.css("#react-select-4-option-3")).click();
        //await  driver.findElement(By.xpath("//*[@id='company_gst_number']")).sendKeys("266363636",Key.TAB);
        await driver.findElement(By.xpath("//*[@id='city_name']")).sendKeys("New Delhi",Key.TAB);
        await  driver.findElement(By.css("div:nth-child(3) > div > span > button")).click();

        //reqcountry = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[5]/span")).getText(); 
        //reqbilling = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[2]/span[2]")).getText();
         
        //await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")));
        //await driver.sleep(5000)
        //entityname = await driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();
   

        if (reqbilling == "Atleast provide more than 1 character") {
             console.log("billing address test case passed");
            
        } else {
            console.log("billing addresss test case failed");
            
        }
        if (reqcountry == "Country is required!"){
            console.log("test case passesd");
        }
        else {
             console.log("test case failed");
        }
        if (entityname == "Entity Name already Exists,Please choose different name" ){
        console.log("entity test case passed");
        }
        else{
            console.log(" entity test case failed");
        }
        
    } catch (error) {
        console.log(error);
        
    }
}



billingtest();
registertest();