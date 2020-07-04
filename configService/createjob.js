const { Builder, By, Key, until } = require("selenium-webdriver")

const driver = new Builder().forBrowser("firefox").build();
driver.manage().window().maximize();


async function job(){
    let validupload;
    let validdrive;
    let validbox;
    try {
        await driver.get("https://staging.dresma.com/login");
        await driver.findElement(By.xpath("//*[@id='email']")).sendKeys("superadmin@dresma.com", Key.TAB);
        await driver.findElement(By.xpath("//*[@id='password']")).sendKeys("Dresm@618", Key.TAB);
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/div[1]/div[3]/div/div/form/div/div[5]/span/button")).click();
  
        // job order click 
        await driver.sleep(5000)
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/span[1]/nav/div/ul[2]/li[3]/a")));
        await driver.sleep(5000)

        await driver.findElement(By.xpath("//*[@id='app-inner']/span[1]/nav/div/ul[2]/li[3]/a")).click();
        await driver.sleep(15000)
        //
        await driver.findElement(By.xpath("/html/body/div/div/span[2]/div/div/div[1]/div[2]/button/i")).click();

        // select option
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/form/div[1]/div[2]/div[2]/div/div")).click();
         await driver.sleep(5000)
       
        await driver.findElement(By.css("#react-select-6-option-130")).click();
        await driver.findElement(By.xpath("//*[@id='Job Order Label']")).sendKeys("Corp123",Key.TAB);
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/form/div[1]/div[6]/div/div/div/div")).click();
        await driver.sleep(15000)
        await driver.findElement(By.css("#react-select-7-option-1")).click();

        //url upload
        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/form/div[2]/div/div[1]/p[2]/label/span")).click();

        await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/form/div[2]/div/div[2]/div[1]/div")).click();

        await driver.sleep(5000)
        await driver.findElement(By.css("#react-select-8-option-2")).click();

        await driver.findElement(By.xpath("//*[@id='Url']")).sendKeys("www.abc.com",Key.TAB);
       await driver.findElement(By.xpath("//*[@id='No. of Images']")).sendKeys("30",Key.TAB);
        
        // submit button
        await driver.findElement(By.xpath("//*[@id='submit']")).click();
        // negative scarenioss..........

        await driver.sleep(5000)
        //validupload = await driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();

        validdrive = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div/form/div[2]/div/div[2]/div[2]/div/div/span")).getText();
        //validbox = await driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div/div[1]")).getText();


       
    if (validupload == "Upload the Image first" ) {
        console.log("upload first test case passed");
        
    } else {
        console.log("upload first test case failed");
        
    }
    if (validdrive == "Unable to get images from given url. so, make sure you shared drive folder with given client and images exists at given url") {
        console.log("google drive test case passed");
        
    } else {
        console.log("google drive test case failed");
        
    }
    if (validbox == "Please check your details"){
        console.log("linkinvalid test case passed");
    }
    else{
        console.log(" link invalid test case failed");
    }


        
    } catch (error) {
        console.log(error);
        
    }
}
job();
