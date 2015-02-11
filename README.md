# my-vocabulary

## Debug like firebug on android device with weinre:
*  install phonegapp application on your android device
*  activate wifi connection
*  run "weinre --boundHost -all-" on your computer
*  in "www/index.html", add "<script src="http://192.168.1.39:8080/target/target-script-min.js"></script>" with the current wifi ip
*  run "cordova build android" on your computer
*  run "phonegap serve -p 8000" on your computer
*  open the weinre interface in your computer browser on "http://localhost:8080/client/#anonymous"
*  open the phonegap application on your android device
*  connect to the ip served by your phonegap server on your computer x.x.x.x:8000
*  in the weinre, wait to have a target in green color and open elements tab

## Deploy apk application on android device
*  enable "USB debugging" in "developer tools" options of your android device
*  run "adb install yourapp.apk"