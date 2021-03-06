# loop-test-activities

Super simple app to test Loop actitivies. Currently only join a room is supported.

## Use via WebIDE

You can just get the content of the app folder and install it via WebIDE, in that case you need to enter the room token manually.

## Using grunt

 By using grunt you can launch the Loop Activities via command line.
 
### Configuring grunt
 
 As usual, before being able to use grunt you need to install the dependencies:
 
 ```
 $ npm install
 ```
 
 Then you can use very simple commands, the most interesting one is:

### pushclean
 
 ```
 $ grunt pushclean --token=<your_room_token>
 ```
 
 This command will:
 a/ create a version of the application
 b/ kill the app if it's already running in the device
 c/ install the generated version
 d/ and launch it with the room token passed as parameter

### push
 
 Additionally, you can also use:
 
  ```
 $ grunt push --token=<your_room_token>
  ```
  
 This command performs exactly the same than pushClean but without trying to kill the app in the device.
 
### release 
  
  ```
 $ grunt release --token=<your_room_token>
  ```
  
 This command just creates the app with the configured token so you can distribute it or use via WebIDE. The app will be available in releases/application.zip)
 
### Other Grunt goodies
 
 The Gruntfile includes also some features that allows you to interact via command line not only with loop-test-activies but with any other 3rd party app:

Kill the app which ID corresponds to appname
 
  ```
$ grunt killApp:appname
  ```
Launch the app which ID corresponds to appname
 
  ```
$ grunt launchApp:appname
  ```

List all the running apps

  ```
$ grunt listRunningApps
   ```

List all the apps

  ```
$ grunt listAllApps
   ```

 
 
