const { Builder,By,Key,until,dropdown,Select } = require ("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();


async function loginTest1() {
    let errorMessage;
    let errorMessagePassword;
    let errorMessagePassword1;
    let errorMessagePassword2;


    try {

        await driver.get("https://staging.dresma.com/login");
        await driver.findElement(By.xpath("//*[@id='email']")).sendKeys("aditidra@@@gmail.com", Key.TAB);
        await driver.findElement(By.xpath("//*[@id='password']")).sendKeys("a23333",Key.TAB);
        await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[5]/span/button")).click();

                
        errorMessage = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[1]/span")).getText();
        //errorMessagePassword = await driver.findElement(By.xpath("//*[@id='app-inner']/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[3]/span")).getText();
        
                

         //await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[1]/div/div[1]/div[1]")));
         //await driver.sleep(2000);
         //errorMessagePassword1 = await  driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div[1]/div[1]")).getText();
    //await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")));
     // errorMessagePassword2 = await driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div[1]/div[1]")).getText(); 
 
 

        if(errorMessage == "Email is not valid"){ // test case 1
            console.log("Email invaild Test Case Pass");
            
        }else{
            console.log("Email invalid Test Case Fail");
        }
        if(errorMessagePassword == "Password is required"){ // test case 2
            console.log("password required test case pass")
        }
        else{
            console.log("password required test case fail")
        }
             
        if (errorMessagePassword1 == "Login details are not valid!!") {  // test case 3
            console.log("login details test case passed");
            
        } else {
            console.log("login details test case failed");
            
        }
        
        if(errorMessagePassword2 == "Email is not registered!"){   // test case 4
            console.log("email is not registered test case passed");
        }
        else{
            console.log("email is not registered test case failed");
        }

    }
    catch (error) {
        console.log(error);
    }
}

loginTest1();




