document.write("\
<div class=\"w3-card-4 w3-margin w3-white\" style=\"border: solid 3px #954955;\">\
<div class=\"w3-row w3-padding w3-dark-gray\" style=\"width:100%\" width = \"200\"  >\
<div class=\"w3-container\"><p>\
<h3><b>Make your own custom chess set: Scan and Print!\
</b></h3>\
<h5>3d Printing <span class=\"w3-opacity\"> 05th July 2017\
</span></h5>\
</div></div>\
<div class=\"w3-container\">\
<p>\
<!TEXT!> This post is a little bit more advanced: but it should be cheap and accessible to most of the people reading\
 this blog. We are going to make a customised chess set...where this project gets a little bit more interesting centers around\
 how we are going to create the models for each chess piece! All you will need is: <p> - A Kinect, the old x-box 360 version with a\
 usb/power adapter (Version 1)\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/kinect.jpg\" alt=\"Kinect Sensor\" style=\"width:50%\" style=\" left: 50%\" style=\"top:5%\"></center>\
 <p> - A 3d Printer <p> - A spinning platform (Office chair works best)<p> - 32 Friends.<p>\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/scanning.jpg\" alt=\"Scanning a friend\" style=\"width:50%\" style=\" left: 50%\" style=\"top:5%\"></center>\
<p> So follow along and I promise you won\'t be disappointed! The final chess pieces are really amazing for the low cost of this project. The following is a Rook, The kind of model you can expect if you follow\
 this post - only your version could have your granny, mum or even yourself staring back at you!<p>\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/scan1.jpg\" alt=\"Example Scan\" style=\"width:30%\" style=\" left: 50%\" style=\"top:5%; bottom:50%\">\t<img text-align=\"center\" src=\"./Pictures/base/remi.jpg\" alt=\"Example Scan\" style=\"width:30%\" style=\" left: 50%\" style=\"top:5%; bottom:50%\">\t<img text-align=\"center\" src=\"./Pictures/base/scan2.jpg\" alt=\"Example Scan\" style=\"width:30%\" style=\" left: 50%\" style=\"top:5%\"></center>\
 <p>\
\
\
 <h3>Have you ever dreamed about making your own custom game set?</h3>\
\
 I\'m going to show you how you can use a 3d printer and an x-box 360 Kinect to relatively cheaply create your own personalized chess set! This project is low-cost and the Kinect sensor is low cost and can be purchased on e-bay for less than 30 euro! Just be warned that you need to have the x-box 360 version 1 of the Kinect...<p> It should come with an adapter converting the male USB power connector (orange) to a standard usb male connector and power input.\
\
 The other thing you will need is a 3d printer to print the 3d models we are going to create, if you don\'t have access to a 3d printer you can easily order your 3d models to be professionally printed and shipped to you using services like shapeways.\
\
<p>\
<h3> Step 1: Download the Software and Drivers</h3>\
<p>\
 The software and drivers can be tricky to install and get up and running. You should be using Version 1 of the xbox 360 Kinect. Other versions may not work!\
\
 There are a lot of versions of software that will allow you to capture 3d models using the Kinect...unfortunately these can be expensive or useless! The best free software I could find is called reconstructme.\
\
<p>Reconstructme: <a href =\"http://reconstructme.net/\">Reconstructme</a> --> v2.5 at the time of writing\
\
 Install the software before connecting the Kinect to your computer. Then download drivers for the Kinect from Microsoft:\
<p>\
<a href =\"https://www.microsoft.com/en-us/download/details.a...\">Drivers</a>\
<p>\
 You will also need two pieces of software to work with the 3d models that you will create:\
\
 CURA, a 3d printer slicer..converts 3d models to format (gcode) that can be read by your 3d printer\
<p>\
<a href =\"https://ultimaker.com/en/products/cura-software\"> Cura </a>\
<p>\
 To turn your 3d scan into a chess piece you will need Meshmixer:\
<p>\
<a href =\"http://www.meshmixer.com/download.html\">Meshmixer</a>\
<p>\
 Restart your computer and plug in the Kinect sensor...\
\
<h3> Step 2: Scanning Your Subjects! </h3>\
 Its important to set up a clear space to start scanning in. Plug in the Kinect to the mains and connect it to your computer. Place it on a flat surface like a table sand point it towards a large open space. Try and have the subject you are scanning as the only object within the scene.\
\
 <p>Place an office chair in front of the Kinect camera and ask your subject to sit up straight on the chair. Open up reconstructme. It should detect the camera after a minute or so. There will be a blue box on the bottom right representing what the Kinect camera can see. Try to picture the subject in the center of this preview box. Ask them to spin slowly and ensure that the entire subject is within the box for a full 360 revolution.\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/b2p3.jpg\" alt=\"Office Chair\" style=\"width:50%; max-width:400px;\" style=\" left: 50%\" style=\"top:5%\"></center>\
\
 <p>\
 <p>The size of the box can be increased in the size setting of the volume tab.\
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b2p4.jpg\" alt=\"Positioning the sensor\" style=\"width:50% ; max-width:400px;\" style=\" left: 50%\" style=\"top:5%\"></center>\
\
 <p>\
\
 <p>In the Surface tab select the option \"Selfie 3d Scan\"\
\
 <p>The Kinect Sensor should be higher than the subject and pointed just below 0 degrees at the subject. Click the start scan button on the bottom right of the reconstructme user interface. It should launch a creen showing a camera image seen by the Kinect. Default settings will allow you 5 seconds to align the image and ensure the subject is in full view. Ask them to stay perfectly still when the timer counts down. You should see the 3d model as it begins to build up. Speckled or blank areas should build up as more of the model is captured. Advise them to very slowly revolve the chair. Go slower in areas of high detail like the front of the face. A percentage bar at the bottom of the screen should increase throughout the revolution. It should finsigh automatically when the subject has completed 1 full revolution and the percentage reachers 100%.\
\ <p><center><img text-align=\"center\" src=\"./Pictures/base/b2p1.jpg\" alt=\"Kinect Setup\" style=\"width:50% ; max-width:400px;\" style=\" left: 50%\" style=\"top:5%\"></center>\
<p>\
 <p>A preview of the model will be generated by the software. Click the save as button and save as type .stl. This format will lose the color detail but you will be able to edit it in the meshmixer software downloaded earlier. If you want to make a custom chess set find subjects to scan for each piece..your friends, granny..anyone will do.<p>\
\
<p><center><img text-align=\"center\" src=\"./Pictures/base/b2p2.jpg\" alt=\"Scanning a friend\" style=\"width:50% ; max-width:400px;\" style=\" left: 50%\" style=\"top:5%\"></center>\
<p>\
<h3> Step 3: Creating a Chess Piece! </h3>\
<p> Open the Meshmixer software you downloaded earlier. Click the import button on the top left and browse to the location where you saved your scan stl files.\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/b2p5.jpg\" alt=\"Importing a model\" style=\"width:50% ; max-width:400px;\" style=\" left: 50%\" style=\"top:5%\"></center>\
\
<p>\
<p>Hopefully the scan will be fairly complete..but it is inevitable that you will need to clean it up a little bit. In one scan I took there was a big hole around my nose! If this is the case open the sculpt tab..select brushes and click on the shrink smooth button. You can toggle the size of the brush and strength of the effect using the context menu. Slowly move the brush around the hole selecting between the shrink smooth brush and the inflate brush until the hole is repaired.\
\
<p>Click on the edit tab and select close cracks and make solid. This will repair the model of any small holes that may effect the performance of the 3d print.\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/b2p6.jpg\" alt=\"Repairing the mesh\" style=\"width:50%; max-width:400px;\" style=\" left: 50%\" style=\"top:5%\"></center>\
\
<p>\
 <p>Finally, for a chess piece it is best to slice away parts of the shoulders to make the model fit on the chess piece properly. Select \"Edit\" on the left menu. Click Plane Cut. Use the buttons to orient the plane and select keep both as the \"cut type\". The plane will split the model along that plane..orient it to remove each shoulder. On the edit button menu select split shells. This will allow you to seperately select the two regions split by the plane. Select the shoulder region you want to cut away and click delete.\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/b2p7.jpg\" alt=\"Plane Cut\" style=\"width:50%; max-width:400px;\" style=\" left: 50%\" style=\"top:5%\"></center>\
\
 <p>\
<p> You might be wondering...\"How do I make this model into a chess piece?\" Simply navigate to thingiverse or another 3d modelling website..or create your own using fusion 360 (That is for another tutorial).\
\
<p>Rook:\
\
<p><a href=\"https://www.thingiverse.com/thing:99028\">Link to thingiverse chess piece</a>\
\
<p>I am going to show you how to make the castle and then you can try it by yourself on the other chess pieces. Open the zip file and extract the stl file to the same folder you placed your scans.\
\
<p>Select import in the same view of meshmixer containing your scanned model. Select the append model button when you import the model so the stl file is added to the meshmixer file. Save frequently to avoid losing all your progress!\
<p> <h3> Step 4: Using Meshmixer to create a rook </h3>\
<p>Now that both models are imported within meshmixer we can start turning the model into a working chess piece!\
\
<p>Plan where you want your model to fit into the existing model of the chess piece! Start by moving teh model of teh chess piece away from the scanned model to work with it independently. Click the \"Edit\" button and transform when the Rook is selected and highlighted. Use the arrows to translate the model. Similar to the previous step use the plane cut and separate shells function to separate the head of the castle. This time, instead of selecting and deleting one of the shells use the transform function to move the top of the castle upwards.\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/b2p8.jpg\" alt=\"Preparing two models\" style=\"width:50%; max-width:400px;\" style=\" left: 50%\" style=\"top:5%\"></center>\
\
<p>\
<p>Now, select the scanned model and transform it. The inside gray box in the transform controls will allow you to scale the model. Reduce the size so that it will fit on top of the castle base. I also scaled the top of the castle so that it would fit more like a hat. I then rotated and positioned it on to of the scanned model like a hat.\
\
<p>I decided to cut off more of the shoulders to make the body of the scanned model fit more naturally with the castle body. When you are happy with the positioning and composition of the model simply select all pieces by shift clicking each shell in the object browser menu. In the edit menu there will be a submenu \"Combine\" Select it to turn it into one fixed model.\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/b2p9.jpg\" alt=\"Scanning a friend\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
\
<p>\
<p>Click Export on the bottom left button and save the file as one complete stl file. This file can be opened in cura and gcode can be generated to run on your 3d printer!\
\
\
\
<div class=\"w3-row\">\
<div class=\"w3-col m8 s12\">\
<form method=\"get\" action=\"../index.html\">  <p><button class=\"w3-button w3-padding-large w3-white w3-border\"><b>Back</b></button></p></form>\
</div>\
<p>\
<p>\
<div id=\"HCB_comment_box\"><a href=\"http://www.htmlcommentbox.com\">Comment Box</a> is loading comments...</div>\
<link rel=\"stylesheet\" type=\"text/css\" href=\"//www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0\" />\
<script type=\"text/javascript\" id=\"hcb\"> /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement(\"script\"), l=hcb_user.PAGE || (\"\"+window.location).replace(/'/g,\"%27\"), h=\"//www.htmlcommentbox.com\";s.setAttribute(\"type\",\"text/javascript\");s.setAttribute(\"src\", h+\"/jread?page=\"+encodeURIComponent(l).replace(\"+\",\"%2B\")+\"&opts=16862&num=10&ts=1495298126351\");if (typeof s!=\"undefined\") document.getElementsByTagName(\"head\")[0].appendChild(s);})(); /*-->*/ </script>\
<p>\
</div>\
</div>\
</div>");