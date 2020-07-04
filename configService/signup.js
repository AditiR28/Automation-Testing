const { Builder,By,Key,until,dropdown,Select } = require ("selenium-webdriver")
//const firefox = require("selenium-webdriver/firefox");

//const proxy = require("selenium-webdriver/proxy");
//const options = new firefox.Options();


//options.setProfile("./Selenium Learning"); set profile

//const proxyServer ="190.151.94.3:46615"
//options.setPreference("browser.download.dir","C:\\Selenium\\configService");
//options.setPreference("browser.download.folderList",2);

//options.setPreference("browser.helperApps.neverAsk.saveToDisk","application/octet-stream");

const driver = new Builder().forBrowser("firefox").build();

/*async function openwebsites(){
    try {
          await driver.get("http://staging.dresma.com");
           await driver.get("http://google.com");
        
    } catch (error) {
        console.log("error");
        
    }
    

}
openwebsites(); // call function
*/
//.setFirefoxOptions(options)
//.build()
//.setProxy(proxy.manual({
    
//}))
// ;

//driver.get("https://bloodhoundinvoices.s3.eu-west-3.amazonaws.com/5e05d47c85b65815d09a749c.pdf");

//driver.get("https://google.com");


//const driver =new Builder().forBrowser("firefox").build(); // start browser

//driver.get("https://staging.dresma.com/login"); // new browser 
//driver.findElement(By.id("email")).sendKeys("aditidresma1@gmail.com",Key.TAB); // set value
//driver.findElement(By.id("password")).sendKeys("a@12346",Key.RETURN); // setvalue  
/*function simpleform(){
    try {
            driver.get("https://staging.dresma.com/login");
            driver.findElement(By.css("#email")).sendKeys("aditidresma1@gmail.com",Key.TAB);
            driver.findElement(By.css("#password")).sendKeys("a@123456",Key.TAB);
            driver.findElement(By.css(" div.row > div > div > form > div > div:nth-child(7) > span > button")).click(); 
    } catch (error) {
           console.log("error");
        
    }
}
simpleform();
*/
/*function signupform(){
    try {
          driver.get("https://staging.dresma.com");
          driver.findElement(By.css("#email")).sendKeys("aditidresma@efg.com",Key.TAB);
          driver.findElement(By.css(" div.input-field.col.s6 > span > button")).click();
    } catch (error) {
        console.log("ajajjs");
    }
}

signupform();
*/

async function simpleregistrationform() {
    try {
    await driver.get("https://staging.dresma.com/");
    await driver.findElement(By.css("#email")).sendKeys("aditi@dresma.com", Key.RETURN);
    await driver.wait(until.elementLocated(By.css("div:nth-child(3) > div > div:nth-child(2) > div > div > div:nth-child(2) > div > span.label.label-default.active")));
    
    await driver.findElement(By.css("#first_name")).sendKeys("Aditi", Key.TAB);
    await driver.findElement(By.css("#last_name")).sendKeys("Rajput", Key.TAB);
    await driver.findElement(By.css("#phone")).sendKeys("122333444", Key.TAB);
    await driver.findElement(By.css("#password")).sendKeys("a@12345678", Key.TAB);
    await driver.findElement(By.css("#password2")).sendKeys("a@12345678", Key.TAB);
    await driver.findElement(By.css("div:nth-child(4) > form > div.row > div:nth-child(10) > button")).click();
    }
    catch (error){
         console.log(error);
    }
}


    async function billingdetails(){
        try {
    await  driver.wait(until.elementLocated(By.css("div.row.m-t-lg.step-form-labels > span.label.label-default.active")));
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//input[@id ='company_name']")).sendKeys("Differential Technologies Limited");
    await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[5]/div")).click();
    await driver.findElement(By.css("#react-select-2-option-100")).click();
    await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[6]/div")).click();
    await  driver.findElement(By.css("#react-select-3-option-2")).click();
    await driver.findElement(By.xpath("//*[@id='company_address_lineone']")).sendKeys("Bestech Busniess tower",Key.TAB);

    await driver.findElement(By.xpath("//*[@id='company_postal']")).sendKeys("12233773",Key.TAB);
    await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[12]/div")).click();
    await  driver.findElement(By.css("#react-select-5-option-7")).click();

    await  driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[1]/div[16]/div")).click();
    //await driver.sleep(2000);
    await   driver.findElement(By.css("#react-select-4-option-4")).click();
    await  driver.findElement(By.xpath("//*[@id='company_gst_number']")).sendKeys("266363636",Key.TAB);
    await driver.findElement(By.xpath("//*[@id='city_name']")).sendKeys("New Delhi",Key.TAB);
    await  driver.findElement(By.css("div:nth-child(3) > div > span > button")).click();
    //await driver.findElement(By.xpath("/html/body/div/div/div[2]/div/div[2]/div/div/div/form/div[3]/div/span/button")).click();

    }
    
     catch (error) {
    console.log(error);
    }
    }
   
    
    simpleregistrationform();
    billingdetails();
