const { Builder,By,Key,until,dropdown,Select } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
 
async function signuptest(){
    let errorMessage;
    let errorinvalid;
    let emailalready;
    try {

        await driver.get("https://staging.dresma.com");
        await driver.findElement(By.xpath("//*[@id='email']")).sendKeys("aditidresma1234@abc.com", Key.TAB);
        
        await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div[2]/div/div[1]/div[3]/div/div/div/div/div/form/div/div[2]/span/button")).click();
             
        //errorMessage = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div[1]/div[3]/div/div/div/div/div/form/div/div[1]/span")).getText();
         /// email is required

        errorinvalid = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[3]/div/div/div/div/div/form/div/div[1]/span")).getText();
              // email is invalid
        //await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")));
        //await driver.sleep(2000)
        //emailalready = await  driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();
   
        // email is already registered.
        if (errorMessage == "Email is required!") {  // test case 1
            console.log("email required test case passed");
            
        } else {
                console.log("email required test case failed");
            
        }
        if (errorinvalid == "Email is not valid"){ // test case 2
            console.log("email invalid test case passed");

        }
        else{
            console.log("email invalid test case failed");
        }
        if (emailalready == "Email is already registered!!"){ // test case 3
            console.log("test case passsed");

        }
        else{
             console.log("test case failed");
        }

    } catch (error) {
        
    }
}
signuptest();