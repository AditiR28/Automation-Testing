const dialog = require("../../data/pageObjects/dialog.page")
var tesseract = require('tesseract.js')
const loginImg = './screenshots/portrait.png'

const validimg = './screenshots/valid.png'
const passimg = './screenshots/password.png'
const validmail = './screenshots/email.png'
/*
function getText(imgPath){
    tesseract.recognize(
        imgPath,
        'eng'
      ).then(({ data: { text } }) => {
        return text.split('\n').slice(-2)[0];
      })
}
describe('Sample', ()=>{
    it('Verify login screen',()=>{
        dialog.email.addValue('sonalphotographer@abc.com');
        dialog.password.addValue('a@12456');
        dialog.login.click();

        driver.pause(4000);
        driver.saveScreenshot(loginImg)
        errorElement = getText(loginImg)
        if (errorElement == "Login details are not valid!!"){
            console.log("test case pass")
        }

    })
});
function getText(imgPath){
    tesseract.recognize(
        imgPath,
        'eng'
      ).then(({ data: { text } }) => {
        return text.split('\n').slice(2)[0];
      })
}
describe('Sample', ()=>{
    it('Verify login screen',()=>{
        dialog.email.addValue('sonalphotographer@abc.com');
        dialog.email.clearValue();
        dialog.email.addValue('aditi');

        dialog.password.clearValue();

       dialog.login.click();

        driver.pause(9000);
        driver.saveScreenshot(validmail)
        errorElement = getText(validmail)
        if (errorElement == "Enter a valid email"){
            console.log("test case pass")
        }

    })
});
function getText(imgPath){
    tesseract.recognize(
        imgPath,
        'eng'
      ).then(({ data: { text } }) => {
        return text.split('\n').slice(7)[0];
      })
}
describe('Sample', ()=>{
    it('Verify login screen',()=>{
        dialog.email.addValue('aditi');
        dialog.email.clearValue();
        dialog.email.addValue('sonalphotographer@abc.com');

        dialog.password.clearValue();

       dialog.login.click();

        driver.pause(12000);
        driver.saveScreenshot(validimg)
        errorElement = getText(validimg)
        if (errorElement == "Password is required"){
            console.log("test case pass")
        }

    })
});
function getText(imgPath){
    tesseract.recognize(
        imgPath,
        'eng'
      ).then(({ data: { text } }) => {
        return text.split('\n').slice(7)[0];
      })
}
describe('Sample', ()=>{
    it('Verify login screen',()=>{
        dialog.email.addValue('sonalphotographer@abc.com');
        dialog.email.clearValue();
        dialog.email.addValue('sonalphotographer@abc.com');
        
        dialog.password.clearValue();
        dialog.password.addValue('a22');

       dialog.login.click();
       driver.pause(15000);
        driver.saveScreenshot(passimg)
        errorElement = getText(passimg)
        if (errorElement == "Password must contain at least 6 characters"){
            console.log("test case pass");
        }
})
});
*/
///
// login function
describe('Sample', ()=>{
    it('Verify login screen',()=>{
        dialog.email.addValue('aditiphotographer1000@abc.com');
        dialog.password.addValue('a@123456');
        dialog.login.click();
 })

});

describe('joborder', () => {
    it('Verify button', () => {
        driver.pause(9000);
        driver.touchAction([
            { action: 'tap', x: 836, y: 799 }
        ])
    })
});
/*

 // ********1folder****************************
 
describe('folder',()=>{
        it('folderbutton',()=>{
        driver.touchAction([
        {action:'tap',x: 270, y: 619}
        ])
    })
});

describe('anglesactivity',()=>{
    it('angles',()=>{
        //1 angle
        
        driver.pause(9000);
        
        driver.touchAction([
            {action:'tap',x: 281 , y: 762 }

        ])
        dialog.button.click();
        dialog.button.click();
        
        dialog.camera.click();
  
        dialog.cancel.click();
        dialog.camera.click();
        dialog.capture.click();
        
        // 2 angle
        driver.pause(3000);
        driver.touchAction([
            {action:'tap',x: 810,y: 784 }
        ])
       
        dialog.camera.click();
  
        dialog.cancel.click();
        dialog.camera.click();
        dialog.capture.click();
        // 3 angle
        driver.pause(5000);
        driver.touchAction([
            {action:'tap',x: 307 ,y: 1239 }
        ])
        dialog.camera.click();
  
        dialog.cancel.click();
        dialog.camera.click();
        dialog.capture.click();
        driver.back();
 })
});
*/



 /// ******** 2 folder ********///
 
 /*
 describe('folder',()=>{
    it('folderbutton',()=>{
        driver.pause(3000);
    driver.touchAction([
    {action:'tap',x: 783, y: 816}
    ])
})
});
describe('anglesactivity',()=>{
it('angles',()=>{
    //1 angle
    driver.pause(9000);
    driver.touchAction([
        {action:'tap',x: 234 , y: 789 }

    ])
    dialog.camera.click();
  
    dialog.cancel.click();
    dialog.camera.click();
    dialog.capture.click();
    // 2 angle
    driver.pause(3000);
    driver.touchAction([
        {action:'tap',x: 810,y: 784 }
    ])
    dialog.camera.click();
  
    dialog.cancel.click();
    dialog.camera.click();
    dialog.capture.click();
    // 3 angle
    driver.pause(9000);
    driver.touchAction([
        {action:'tap',x: 307 ,y: 1239 }
    ])
    dialog.camera.click();
  
        dialog.cancel.click();
        dialog.camera.click();
        dialog.capture.click();
  
    driver.pause(3000);
    driver.back();
})
});

///// *** 3 folder ******
describe('folder',()=>{
    it('folderbutton',()=>{
        driver.pause(5000);
    driver.touchAction([
    {action:'tap',x: 231, y: 1437}
    ])
})
});
describe('anglesactivity',()=>{
it('angles',()=>{
   //1 angle
   driver.pause(9000);
   driver.touchAction([
       {action:'tap',x: 234 , y: 789 }

   ])
   dialog.camera.click();
 
   dialog.cancel.click();
   dialog.camera.click();
   dialog.capture.click();
   // 2 angle
   driver.pause(3000);
   driver.touchAction([
       {action:'tap',x: 810,y: 784 }
   ])
   dialog.camera.click();
 
   dialog.cancel.click();
   dialog.camera.click();
   dialog.capture.click();
   driver.pause(3000);
   driver.back();
})
});
*/


/// *** 4 folder ****//
/*
describe('folder',()=>{
it('folderbutton',()=>{
    driver.pause(3000);
    driver.touchAction([
    {action:'tap',x: 803, y: 1463}
    ])
   
})
});
describe('anglesactivity',()=>{
it('angles',()=>{
    //1 angle
    driver.touchAction([
        {action:'tap',x: 281 , y: 762 }

    ])
     //1 angle
   driver.pause(9000);
   driver.touchAction([
       {action:'tap',x: 234 , y: 789 }

   ])
   dialog.camera.click();
 
   dialog.cancel.click();
   dialog.camera.click();
   dialog.capture.click();
   // 2 angle
   driver.pause(3000);
   driver.touchAction([
       {action:'tap',x: 810,y: 784 }
   ])
   dialog.camera.click();
 
   dialog.cancel.click();
   dialog.camera.click();
   dialog.capture.click();
   driver.pause(3000);
   driver.back();

  
})
});
*/

// Another folder

describe('another',()=>{
    it('addfolder',()=>{
        driver.pause(9000);

       driver.touchAction([
       {action:'tap',x: 268 , y: 1698 }

   ])
   dialog.folder.addValue("Appium Testing");
   dialog.dropdown.click();
   dialog.drop.click();
   dialog.save.click();

   dialog.pause(20000);
        


    })

});




    