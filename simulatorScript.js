/* Siddharth Chandra
   Email : Siddmegadeth@gmail.com /siddmegadeth@outlook.com
   Project Name : Firefox Play(Firefox OS Browser Simulator)
   Date Of First Build :29/11/2013
   Anyone using this code has the right to modify/distribute this code
   for development purpose/Educational use while keeping the project
   creator name included with above information as mandatory 
   
*/   


var mozDev =
{
   screenType :
   [
      { deviceType : "smartphone" , maxWidth : 320, maxHeight : 480 },
      { deviceType : "Phablet"     , maxWidth : 360, maxHeight : 640 },
      { deviceType : null         , maxWidth : 768, maxHeight : 1024 },
      { deviceType : null         , maxWidth : 800, maxHeight : 1280 },
      { deviceType : null         , maxWidth : 980, maxHeight : 1280 },
      { deviceType : null         , maxWidth : 1280, maxHeight : 600 },
      { deviceType : null         , maxWidth : 1920, maxHeight : 900 }
  ],
  isScreenFound : false,
  isDeviceReady : false,
  is2dReady : false,
  maxWidth :360,  //Default Values
  maxHeight: 480, //Default Values
  eleReference : null,
  contextReference : null,
  isDebug : null,
  baseEleId : null,
  baseEleType : null,
  isVideoReady :null,
  videoId :null,
  videoElementReference : null,
  videoWidth:null,
  videoHeight:null,
  mediaStream :null,
  userMedia :null
};



function initApp(eleType,eleId,eleClassName,idTest)
{
  try
 {
   mozDev.baseEleId = eleId;
   mozDev.baseEleType = eleType;
  
  if(idTest!==true)
  {
   mozDev.isDebug = false;
   console.log("In Browser Test/Debug  : "+idTest);
   console.log("Current Screen Dimensions : "+screen.width +","+screen.height);
   // Determine ScreenSize
   var loop =0;
   while(loop!=mozDev.screenType.length)
   {   
         
      if(screen.width == mozDev.screenType[loop].maxWidth  &&  screen.height == mozDev.screenType[loop].maxHeight)
      { 
        mozDev.isScreenFound = true;
        mozDev.maxWidth   = mozDev.screenType[loop].maxWidth;
        mozDev.maxHeight  = mozDev.screenType[loop].maxHeight;
        console.log("Matched Screen Size"); 
        
      }
      else
      {
        console.log("Unmatched Screen Size"+" Probe :"+loop + " Size : "+ mozDev.screenType[loop].maxWidth+","+mozDev.screenType     [loop].maxHeight);
      }               
         loop=loop+1; 
   }
   
        if( mozDev.isScreenFound == true)
       {
        //Determine Device Status 
        var ele  = document.createElement(eleType);
        if(ele)
        {
          ele.id =eleId; 
          document.body.appendChild(ele); 
          mozDev.eleReference = document.getElementById(eleId); 
          mozDev.isDeviceReady = true;
          mozDev.eleReference.className = eleClassName;
          console.log("Added ID and Classes To Element"); 
          console.log("Device Ready"); 
        }
        else
        {
             console.log("Cannot Append To Parent or Create Element "+ eleType); 
        }  
      }
      else
      {
         console.log("Device Not Ready...Unable To Add Element");     
      }
      //Determine 2d Capabilities
     if(mozDev.isDeviceReady == true)
     {
      if(eleType=="canvas")
      {
          var context = document.getElementById(eleId).getContext("2d");
          if(context)
          {
               mozDev.is2dReady =true;
               mozDev.contextReference = context;
               mozDev.eleReference.width = mozDev.maxWidth;
               mozDev.eleReference.height = mozDev.maxHeight;   
               console.log("Device Support 2D Drawing");  
          }
          else
          {
              mozDev.is2dReady =false;
              console.log("Device Not Support 2D Drawing");
          }  
      }
      else
      {
         console.log("Only 2d Capabilites Are Determined For Canvas Element Type");  
      } 
     }
     else
     {
       console.log("Unable To Determine 2d Capabilites as Device Not Ready");
     }
     

 }
 else
 {
   console.log("In Browser Test/Debug  : "+idTest);
   console.log("Current ViewportScreen Dimensions : "+screen.width +","+screen.height);
   mozDev.isDebug = true;
   // Determine ScreenSize
   mozDev.isScreenFound = true;
  // mozDev.maxWidth   = 320;
  // mozDev.maxHeight  = 480;
   console.log("Applying Test Screen Size of : "+mozDev.maxWidth +","+mozDev.maxHeight); 
      
  if( mozDev.isScreenFound == true)
    {
      //Determine Device Status 
      var ele  = document.createElement(eleType);
      if(ele)
      {
       ele.id =eleId; 
       document.body.appendChild(ele); 
       mozDev.eleReference = document.getElementById(eleId); 
       mozDev.isDeviceReady = true;
       mozDev.eleReference.className = eleClassName;
       console.log("Added ID and Classes To Element"); 
       console.log("Device Ready"); 
       }
       else
       {
         console.log("Cannot Append To Parent or Unable To Create Element " +eleType); 
       }  
    }
    else
    {
         console.log("Device Not Ready...Unable To Add Element");     
    }
      //Determine 2d Capabilities
     if(mozDev.isDeviceReady == true)
     {
      if(eleType=="canvas")
      {
          var context = document.getElementById(eleId).getContext("2d");
          if(context)
          {
          
               mozDev.is2dReady =true;
               mozDev.eleReference.width = mozDev.maxWidth;
               mozDev.eleReference.height = mozDev.maxHeight; 
               mozDev.contextReference = context;
               console.log("Device Support 2D Drawing");  
          }
          else
          {
              mozDev.is2dReady =false;
              console.log("Device Not Support 2D Drawing");
          }  
      }
      else
      {
         console.log("Only 2d Capabilites Are Determined For Canvas Element Type");  
      } 
     }
     else
     {
       console.log("Unable To Determine 2d Capabilites as Device Not Ready");
     }

    }  //IDTEST Ends   

   }  //try-catch
   catch(e)
   {
     alert(e);
   }
	    
}  // initApp Function Ends


initApp.prototype = 
{
   
   applyDimension  : function()
   {
      try
      {   
         if(mozDev.isDeviceReady ==true)
         {
           if(mozDev.is2dReady!=true)
           {
            //Apply Width /Height
            console.log(mozDev.maxWidth+","+mozDev.maxHeight);
            mozDev.eleReference.style.width  = mozDev.maxWidth+"px";
            mozDev.eleReference.style.height = mozDev.maxHeight+"px";
            console.log("Width/Height Applied To Element Type "+mozDev.baseEleType);
           } 
         }
         else
         {
           console.log("Unable To Apply/Draw Width And Height Dimenssion in Function applyDimension()");
         }

      }
      catch(e)
      {
        console.log("Error Occured : " +e);
      }
   },  //applyDimension Ends

   testDraw : function()
   {
        try
       {
            if(mozDev.is2dReady==true)
            {
		  if(mozDev.isDebug!=true)
		  {
		   mozDev.contextReference.font="20px Arial";
		   mozDev.contextReference.strokeText("2d Context Supported",10,50);
                   mozDev.contextReference.strokeText("In Browser Debug Draw False",10,70);	
		 
		  }
		  else if(mozDev.isDebug!=false)
		  {
		   mozDev.contextReference.font="20px Arial";
		   mozDev.contextReference.strokeText("2d Context Supported",10,50);
		   mozDev.contextReference.strokeText("In Browser Debug Draw True",10,70);
		  }       
	   }
           else
           {
                console.log("Unable To Draw as 2D Accelerated Drawing Supported only on Canvas Element");
           }
 
        }  
        catch(e)
        {
           console.log("Error Occured : " +e);
        }

  

 
     }, //TestDraw Ends

     initVideo  : function(videoId,videoClass,sizeX,sizeY,controls)
    {

 
     if(sizeX>0 && sizeX<=mozDev.maxWidth)
     {
           mozDev.videoWidth = sizeX;
           
     }
     else
     {
         mozDev.videoWidth = mozDev.maxWidth;
       
     }


     if(sizeY>0  && sizeY<=mozDev.maxHeight)
     {
          
           mozDev.videoHeight = sizeY;
     }
     else
     {
         
         mozDev.videoHeight = mozDev.maxHeight;
     }
      
      console.log("Video Player Added ");
      try
      {   
         if(mozDev.isDeviceReady ==true)
         {
           if(mozDev.is2dReady!=true)
           {
		    var vid = document.createElement("video");
                    
                    
		    if(vid)
		    {
		       vid.id = videoId;
                       mozDev.videoId = videoId; 
                       console.log("Video Player Support Found on Non 2d Acceleration Element : "+mozDev.baseEleType);
                       mozDev.isVideoReady = true;
                       document.getElementById(mozDev.baseEleId).appendChild(vid);
                       mozDev.videoElementReference  = document.getElementById(videoId);
                       mozDev.videoElementReference.className =videoClass;
                       mozDev.videoElementReference.style.width = mozDev.videoWidth+"px";
                       mozDev.videoElementReference.style.height =mozDev.videoHeight+"px"; 
                       if(controls==true)
                       {
                         mozDev.videoElementReference.controls = true;
                       }
                       else
                       {
                         mozDev.videoElementReference.controls = false;
                       }  
                       console.log("Video Added To Non 2d Acceleration Element as Child : "+mozDev.baseEleType+" " +mozDev.videoId);
		    }
		    else
		    {
		        console.log("Video Element Or Playback Not Supported On This Device : "+mozDev.baseEleType)
		    } 

          }
          else if(mozDev.is2dReady!=false)
          {
                    var vid = document.createElement("video");
                    
		    if(vid)
		    {
		       vid.id = videoId;
                    /*   console.log("Video Player Support Found on 2d Acceleration Element : "+mozDev.baseEleType);
                       mozDev.isVideoReady = true;              
                       document.getElementById(mozDev.baseEleId).appendChild(vid);
                       mozDev.videoElementReference  = document.getElementById(videoId);
                       mozDev.videoElementReference.className =videoClass;
                       mozDev.videoElementReference.width = mozDev.maxWidth;
                       mozDev.videoElementReference.height = mozDev.maxHeight; 
                       mozDev.videoElementReference.controls = true; */
                       console.log("Video Added To 2d Acceleration Element as Child Will Not Be Displayed On: "+mozDev.baseEleType);

		    }
		    else
		    {
		        console.log("Video Element Or Playback Not Supported On This Device : "+mozDev.baseEleType)
		    } 

          }
 

 
      }
      else
      {
        console.log("Unable To create Video Playback Test as Device Not Ready : "+mozDev.baseEleType);
      }

      }
      catch(e)
      {
        console.log("Error Occured : " +e);
      }

    },


   initLive : function(camera,mic,controls,autoplay)
   {
         
     try{
     
      if(mozDev.isDeviceReady)
       {
         
         if(mozDev.isVideoReady)
         {
                 navigator.getUserMedia = (navigator.getUserMedia || 
                 navigator.webkitGetUserMedia || 
                 navigator.mozGetUserMedia || 
                 navigator.msGetUserMedia);
                 mozDev.userMedia = navigator.getUserMedia; 
          
         if(navigator.getUserMedia)
         { 

           function success(stream) 
          {
             console.log("Success....Stream Found.");
             mozDev.mediaStream = stream;
             console.log("Reference Added For Stream To : mozDev.mediaStream"); 
             console.log("Success Devices Found.(..");
             var video = document.getElementById(mozDev.videoId);
             var url = window.URL || window.webkitURL;
             video.src = url.createObjectURL(stream);
             console.log("Success Stream Found....Outputting on Video Element :"+mozDev.videoId);
          }
          function failure(e)
          {
            console.log("Failure..."+e);
          } 
           
          
          console.log("Reference Added For getUserMedia To : mozDev.userMedia");
          mozDev.videoElementReference.autoplay = autoplay;
          mozDev.videoElementReference.controls = controls;
          console.log("Initializing Camera/Mic  on Base Element : "+mozDev.baseEleType +" with "+ mozDev.videoId);
          navigator.getUserMedia({video: camera,audio: mic},success,failure);
          console.log("Calling Callback Function....");
         

           
         }
         else
         {
           console.log("No Support For userMedia :  "+mozDev.baseEleType +" with "+ mozDev.videoId);
         }

         }
         else
         { 
            console.log("Initialization Failure as VideoElment Not Found  on Element : "+mozDev.baseEleType +" with "+ mozDev.videoId);
         }           
             
       }
       else
       {
        console.log("Initializing Failure as Device Not Ready  on Base Element : "+mozDev.baseEleType +" with "+ mozDev.videoId);
       }
       
        
       
    
    }
    catch(e)
    {
       console.log("Error Occured : "+e);

    }
   }  //Function initLive Ends

}//initApp Finished
