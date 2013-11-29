FIREFOX-OS-BROWSER-SIMULATOR
============================

FIREFOX OS BROWSER SIMULATOR (RUNS SIMS IN A BROWSER)
/* Siddharth Chandra
   Email : Siddmegadeth@gmail.com /siddmegadeth@outlook.com
   Project Name : Firefox Play(Firefox OS Browser Simulator)
   Date Of First Build :29/11/2013
   Anyone using this code has the right to modify/distribute this code
   for development purpose/Educational use while keeping the project
   creator name included with above information as mandatory 
   
*/   



ntroduction
Background 
Using the code
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css" />
<script type="text/javascript" src="script.js" >
</script>
</head>
<body>
<script>
var t = new initApp("div","siddDiv","siddClass",true); //ElementType,eleID,eleClass, true/false if true then output on browser 
t.applyDimension();
t.testDraw(); //Test 2d Capabilities of a Viewport
t.initVideo("siddVideo","siddVideoClass",360,470,true); // videoID,videoClass,width,Height,ShowControls
</script>
</body>
</html> 
Points of Interest

Hello Friends ...lately we have seen a lot of Vendors coming out with new OS.

But what is really going to change is HTML5. Mozilla has done a groundbreaking work for creating

HTML5 based OS where any can submit app based on HTML5.  HTML5 is something new which is changing the landscape and it time it will challenge Android and Apple OS since it is not clumsy

and app development is as easy as cool breeze.

Here i have a written custom API specifically for Upcoming Mozilla Firefox OS.

Its works great in Firefox Simulator and also as a a standalone browser and you can couple it

up if you want to test on browser+Firefox OS simulator.

 

This is a set of API specifically developed to complement the works done by Mozilla.

This Browser Simulator API helps users automatically set up a viewport("DIV" OR "CANVAS")

check media support.

Automatically create Audio/Video Element with precision position and exposes API call to

controls  all aspect of the application. This API helps users create Viewport/Audio/Video Support,

Video Playback, Camera/Mic Control with just a call to few function and modular control over

all aspect of the elements created with through error checking. (KIndly use logs to check whats happening).   

Please refer to the Mozilla Developers network on how to use Firefox OS and get some introduction

towards HTML5 

 This code has a modular approach and realies a a lot on prototyping provided in javascript

which is used to add functionalities/Features in this API.

  

  

If you loop at the code above its loop self explanatory. 

But lets take a loop at how to work with this API.

all users/dev who would like to use this code have to run from a <SCRIPT> inside a body

the main function here is  initApp()  which takes 4 parameters

such as :   

1. what kind of element to use

2. Element ID 

3. style classes to be applied

4. this parameters is used to display the simulator in a browser. if it is true 

   then a default viewport would be created simulating the FireFox OS simulator.

     in either case the output will always be shown in a actual FireFox OS Simulator. 

     Incase If it is False then  display will not be outputted on a browser(But can still be seen in 

     a Firefox Simulator). Please refer to Logs data to understand whats happening in each steps. 

 

The Second Function applyDimension() applies Width/height depending on the  current Device type(if the mozilla Firefox OS simulator comes with a bigger screen/size then this will adapt and init

the screen automatically.however a default value is used to 360x460 for browser display.

this could be changed by calling mozDev.maxWidth  / mozDev.maxHeight. 

The 3rd Function testDraw() checks if the current viewport (depending on 

eleType such as "canvas") supports 2d drawing. the results would be outputted on console

and also on viewport with debug info.   

 

The 4th Function initVideo()  adds video capability to the viewport.it has  parameters such as




// videoID,videoClass,width,Height,ShowControls 

1. VideoID The ID of the video

2. videoClass  : the stylesheet to be applied to this video

3. width/height : the dimension to be applied. it cannot be greater than the screen size or else

    default values will get applied.

4.  it tells whether video control to show or not (true or false)

The 5th Function is initLive()  which helps get stream from camera/mic and output to userSpace

such as  videoPlayer(canvas displayis under development);

POINTS 

 

Please note that all references are added to  variables

mozDev.  you can use the "." dot to access sub variables under it. all references and states are assigned to under mozDev. from userMEdia,canvas context.

it contains isDeviceReady or ScreenReady which helps determining the current state of browser

or simulator.   Please explore. If you have any query then please provide your valuable feedback as this is still under development.   this set of API was working fine on Chrome/Mozilla Firefox/Firefox Simulator.

 

Event management work is under development. But you can still add your own events

while accessing mozDev.{ .... }. Events can be attached to it.  mozDev is just acollection of reference

of all the elements added with there properties and capabilities.

  

Note:  please do Define css classes as it is required to pass a css class for elements.

You can link the classes using <link> in a separate file. It could help control the visual attributes.

For Inbuilt CSS controls is also under development(do provide your feedback on it. 

 

 

This Sets OF API enables users to set up html5 core exciting features by just calling few function.

For any error please report back. use the manifest.webapp to load this into the Mozilla Firefox OS simulator.  All done enjoy... 

 

 

 

 

 

 

 

   

stay posted for updates as this is still under development and might contain bugs. please report that to me incase you come across. 
