class dialog{
    // define elements
    get appBtn(){return $('//android.widget.ImageView')};

    // user_id filed
    get email(){return $('//android.widget.EditText[@resource-id= "com.dresma.domyshoot:id/et_email"]')};
    get password(){return $('//android.widget.EditText[@resource-id="com.dresma.domyshoot:id/et_password"]')};
    get login(){return $('//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.dresma.domyshoot:id/bt_login"]')};
    // permission button
    get button() {return $('//android.widget.Button[@resource-id="com.android.packageinstaller:id/permission_allow_button"]')};


    get order(){return $('//android.widget.ImageView[@resource-id= "com.dresma.domyshoot:id/ivAngleThumbnail"]')};
    get camera(){return $('//android.widget.ImageButton[@resource-id= "com.dresma.domyshoot:id/take_photo"]')};
    get capture(){return $('//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.dresma.domyshoot:id/llProceedBtn"]')};

    get cancel(){return $('//androidx.appcompat.widget.LinearLayoutCompat[@resource-id= "com.dresma.domyshoot:id/llCancelBtn"]')};

    get done(){return $('//android.widget.Button[@resource-id= "com.dresma.domyshoot:id/uploadBtn"]')};
 
    get folder(){return $('//android.widget.EditText[@resource-id= "com.dresma.domyshoot:id/edFolderName"]')};
    get dropdown(){return $('//android.widget.ImageButton[@resource-id= "com.dresma.domyshoot:id/text_input_end_icon"]')};

  
      get drop() { return $('//androidx.appcompat.widget.LinearLayoutCompat[@resource-id= "fixed_Folder_type"]')};
    

    get save(){return $('//[@resource-id= "androandroidx.appcompat.widget.LinearLayoutCompatid:id/button1[@resource-id= "com.dresma.domyshoot:id/btn_add"]')};
    



}
module.exports = new dialog();