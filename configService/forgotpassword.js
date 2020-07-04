const { Builder,By,Key,until,dropdown,Select } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();

async function validfield(){
    let errorforgot;
    let erroremail;
    let emailsuccess;
    try {
        await driver.get("https://staging.dresma.com/login");
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[4]/p/a")));
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[4]/p/a")).click();// forgot password 
        // email value
        await driver.findElement(By.xpath("//*[@id='email']")).sendKeys("aditi@dresma.com",Key.TAB);
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div/div[3]/div/form/div/div[4]/span/button")).click();

        //errorforgot = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div/div[3]/div/form/div/div[2]/span")).getText();
         // email invalid

         //await driver.wait(until.elementsLocated(By.xpath("/html/body/div[1]/div/div[1]/div/div/div[1]")));
         //await driver.sleep(2000);

       //erroremail = await  driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div/div/div[1]")).getText();
       // email not registerd

       // email is registered

       await driver.wait(until.elementsLocated(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")));
         await driver.sleep(2000);

       errorsuccess = await  driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();
      // email is registered.
        if (errorforgot == "Email is not valid") {
            console.log("email invalid test case passed"); // tc case 1
            
        } else {
            console.log("email invalid test case failed");
            
        }
        if (erroremail == "Email is not registered!")
        console.log("email registered test case passed");  // tc case 2
        else{
            console.log("email registered test case failed");
        }

         if (errorsuccess == "Mail sent successfully")
         console.log("mail sent test case passed");
         else{
             console.log("mail sent test case failed"); // tc case 3
         }


    } catch (error) {
         console.log(error);
        
    }
}
validfield();