document.write("\
<div class=\"w3-card-4 w3-margin w3-white\" style=\"border: solid 3px #954955;\">\
<div class=\"w3-row w3-padding w3-dark-gray\" style=\"width:100%\" width = \"200\"  >\
<div class=\"w3-container\"><p>\
<h3><b>Adding a Laser Engraver to a 3d printer\
</b></h3>\
<h5>3d Printing <span class=\"w3-opacity\"> 10th July 2017\
</span></h5>\
</div></div>\
<div class=\"w3-container\">\
<p>\
<!TEXT!><p>\
I have been experimenting with the 3d printer a lot. It is a fantastic tool to make all sorts of prototypes\
 However, there are still a lot of limitations with printers from every price range. The more practice I get, the more and more consistant\
 results I achieve. I have been looking into ways to upgrade the printer to increase functionality for a long time and I have decided to do one\
 upgrade in particular: Add a laser engraver.<p>\
 I have been trying to make custom board games recently..having designed some settlers of catan models I am getting tired of the time it takes\
 to do even small prints! With this in mind I have decided to write a guide on adding a laser engraver to any 3d printer. It is actually quite simple..\
 3d printers are composed of a hot end, extruder and a way to move a carriage along the x, y and z axis. Simply adding a laser module to the moving carriage and\
 fixing the z axis (height) to the focal length of the laser will allow you to etch most materials with computer precision. THIS POST IS A LITTLE MORE DANGEROUS SO DO NOT TRY THIS IF YOU\
 DONT KNOW WHAT YOU ARE DOING. I TAKE NO RESPONSIBILITY FOR ANY EYE INJURIES\
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b3p1.jpg\" alt=\"Laser\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center><p>\
 <p>Some simple examples are shown below!\
\<p><center><img src=\"./Pictures/base/b3p10.jpg\" alt=\"Laser sample 1\" style=\"width:27%; max-width:400px;\"   style=\"top:5%\">\
 \<img src=\"./Pictures/base/b3p11.jpg\" alt=\"Laser sample 2\" style=\"width:27%; max-width:400px;\"  style=\"top:5%\">\
 \<img src=\"./Pictures/base/b3p12.jpg\" alt=\"Laser sample 3\" style=\"width:27%; max-width:400px;\"   style=\"top:5%\"></center><p>\
\
\
\To start, think of what you want to achieve by adding a laser to your 3d printer. That includes choosing a laser capable of etching or cutting select materials. I wanted to be able to etch and engrave wood at the very least but I had no interest in engraving metal or glass.\
 I started by looking at different lasers available for sale, with some experience with lasers in a research capacity I understood the theory behind them and the properties that would effect the end capabilities. This tutorial is written for a Tevo black widow with an mks board. That is not to say\
 it will not work on other 3d printer boards - but if you do use another board or setup ensure that you fully understand the electronics, laser properties and reasoning for certain choices that I have made.<p>\
 <p><h3>Step 1. Purchasing Materials </h3><p>\
 The laser you chose to buy, first and foremost, has to be capable of running off the 3d printer power supply. This ensures minimal modifications to the system. In order to etch different shades into wood the 3d printer board has to have some way of controlling the laser output. If you have\
 ever used an external layer cooling fan you will be aware that the speed of this fan can be set between 0 and 255 at any point in the print using g-code. The fan can be set to 256 discreet values between 0 volts and 12 V with the upper value setting the fan to top speed.\
 We will want a laser capable of runnign off 12 Volts.. a laser diode on its own would not be sufficient but fortunately enough most lasers come with a driver circuit to regulate power input.\
 <p> The frequency of the laser light is another important aspect to your choice. On the spectrum of light, Red is a high wavelength/low frequency band of light. The lower the frequency the less energy will be in the beam. It is clear on the the chart below the relationship between wavelength and energy.\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/b3p3.jpg\" alt=\"Spectrum of Light\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
  For laser engraving it is desirable that we pack as much power/energy into the laser beam in a small area. A low wavelength purple laser powered by only 500 mW is capable of engraving wood, cardboard, leather in a small casing. It is for this reason that I chose a blue/purple 405 nm laser. I wanted the laser to fit\
  in as small an area as possible and I did not want the hastle of having to add extra power supply.\
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b3p1.jpg\" alt=\"Laser Diode\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
  You can buy the laser I got from AliExpress at the link <a href=\"http://s.aliexpress.com/jm22aq6f\">HERE</a>. I want to stress that I am not affiliated with the seller, I just bought this and found the seller reliable..which is not always the case on aliexpress.\
  <p>\
  <h3>Step 2: Planning the design</h3>\
  <p> Everyone\'s 3d printer is a little bit different. Any upgrades can change the layout and positioning of the entire structure. This modification is no different. You may need to customise things to suit your own needs. I am a big fan of modular designs...this means that I like each component/upgrade/etc to act as a discreet block which can be removed and added in a simple way. There should be as little setup as possible.\
   Feature List:<p> I will NEVER need to 3d-print while laser engraving or vice versa.<p> I will still want to be able to use my external cooling fan while I am 3d printing. <p> I never want the laser to turn on accidentally while 3d printing.<p>\
   With these features in mind I set to work planning my design. On the black widow I attached a cable from the mks board +/- terminals and ran it up to the extruder. The terminal for the external fan is just below the main board power supply on the right hand side of the board.\
   <p><center><img text-align=\"center\" src=\"./Pictures/base/b3p4.jpg\" alt=\"mksgen\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center><p>\
   I am very deliberately not marking the exact location of the port on the image above..this is to encourage you to inpect the board yourself. It should be one of the green screw top terminals. Ensure that the black negative wire goes to the - terminal and the red positive wire goes to the + terminal.\
   The black widow cables running from the control box all end in a female connector. You should order one of these to attach to the two wires of the cable you just wired up. You might have one spare from building the black widow.<p> Any female 2 pin connector will do as long as it has an adequate power rating. The laser module I bought came with two male 2 pin connectors. The female connector running to teh mks board will accept input from either an external cooling fan or the laser module.\
   The laser should be plugged in when you want to use the laser engraver and the external cooling fan should be plugged in when you want to do some 3d printing. To be safe, I plugged the external fan in which was mounted on the main carriage. I switched on the printer and selected control->temperature->fan speed. Setting the fan speed should make the fan run at different rates. This will prove that the board is operational and supplying voltage correctly. When you select the fan speed manually you are actually executing a gcode command which sets the rate of the fan.\
   A simple program will be used to generate gcode which will set the laser power and move the x and y carriage. ENSURE YOU WEAR SAFETY GLASSES WHENEVER THE LASER IS SWITCHED ON.<p>\
   The next step will be to measure the laser module and design a secure removable holder for the laser. I designed a box for the laser which measures 40 mm x 40 mm. This is slightly too large for the laser module but ensures the laser will fit. Add some extra padding if there is too much wiggle room.\
   I designed the case to clip on to the printer securely and fit on the carriage. I will include a link to thingiverse where I have uploaded the file I used but you may choose to design your own mount to fit your printer. Ensure the laser fits onto the carriage but does not drop below the extruder. Otherwise, you will need to completely remove the printer whenever you want to 3d print anything.\
   <p><center><img text-align=\"center\" src=\"./Pictures/base/b3p6.jpg\" alt=\"Laser Mounted\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
  <p><h3>Step 3: Creating g-code for a laser engraver</h3><p>\
  The 3d printer needs instructions capable of running the newly mounted laser. The g-code should instruct the laser to move along the x and y access and vary the light intensity of the laser.\
  Luckily, this is easy to do with the correct software. The first thing you will need is a vectorised image program called inkscape. Inkscape allows images, text and drawings to be converted into a format which can be used on the 3d printer. There are just a few settings and extensions that you will require to get going.\
  <p> Inkscape can be found here:<a href=\"https://inkscape.org/en/download/windows/\">Inkscape</a><p>\
  I have been using this tool extension to generate laser g-code. It is simple and easy to use and provides excellent results. It can be found <a href=\"https://jtechphotonics.com/?page_id=1980\">Here</a><p>\
  Once inkscape has installed, empty the contents of the laser gcode extension into \"C:\\Program Files (x86)\\Inkscape\\share\\extensions\\ \" This might be slightly different on a 32 bit machine, the folder will be located in Program Files(There wont be an x86 folder)<p>\
  Restart Inkscape and teh plugin should be under the extensions tab > laser gcode. \
 <p><center><img text-align=\"center\" src=\"./Pictures/base/b3p13.JPG\" alt=\"Inkscape\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center><p>\
  The tool has to be configured to create code for your particular machine. As you can see in the picture I have selected the laser ON command to be m106. This is the gcode command to switch on the external fan on the 3d printer board. If you select a different port look up the appropriate gcode commands to control it and enter it in place of m106. When the gcode command for my setup is processed it will read \"m106 <LASER POWER 0-255>;\"<p> \
  The next setting is the laser Off command. I simply selected this to be m106 0;. This simply sends in a 0 value to the laser, effectively switching it off.\
  <p> Travel speed can be set to whatever you like. The higher it is, the faster the carriage will travel while the laser is off. Set it to a value around 600. If it is too high it may dislodge your laser and cause vibration in any laser etching.<p>\
  <p> Laser Speed is more important. This controls the speed the laser moves at while it is turned on. If this is set too low it will cause burning, if it is too high it will not properly etch the material. Experiment to find the right value for each type of material you use.<p>\
  Set 255 in the laser power option. This will set the range of values the laser can be set at, the fan speed can only be set between 0 and 255, so ensure you set this properly from the beginning. The rest of the settings are explained on the extension website (and are pretty self explanatory). Play around with settings, especially when trying new materials!.<p>\
  Now that the extension is ready to use, all we need to do is get some text/images etc to actually engrave! I will show you how to encode in text and a simple image but nearly everything can be converted to laser comaptible gcode. \
  <p><h4>Engraving Text</h4><p>\
  On the main inkscape canvas, click on the add text button in the bottom left menu. The (0,0) origin is shown at the bottom left. The build plate will dictate the maximum canvas size you can etch on. Add some text by clicking on the canvas and typing. You can set the size, font etc in the toolbar at the top of the screen. \
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b3p14.JPG\" alt=\"Inkscape adding text\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center><p>\
  Once you are happy, prepare to convert the laser into gcode. Select the text using the arrow tool on the left bar. Select Path > Object to Path. Now, ensuring  the text is still selected, click apply on the laser gcode extension box. If successful the pattern shown in the image below will surround the text and a gcode file will be created at the specified file path.  \
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b3p15.JPG\" alt=\"Generating code\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center><p>\
  Simply put the code on an sd card and run it like any other gcode file from your 3d printer slicer software. You will need to focus the laser first before you run the code.\
 <p><h3> Step 4: Focussing the laser and using the g-code</h3><p>\
 Fix some wood or cardboard to your build plate to protect the surface of your printer. Put on your safety glasses and turn on your printer. In the \"control\" menu navigate to \"temperature\" and set the external fan speed to around 10. This should be enough to switch the laser on without burning anything. Then navigate to the \"prepare\ menu and select \"move axis\". Use the menu to move the z axis up and down. You should be able to find the height at which the laser is focussed on the wooden or cardboard build plate. Increase the z axis by the height of whatever you will be engraving. Navigate back to the fan control and turn the laser off.<p>\
 Securely fix any object to the build plate..start simple with cardboard. Now, slect the printer to run the gcode you prepared earlier.It should start etching the text you drew in inkscape!\
 <p><center><img text-align=\"center\" src=\"./Pictures/base/ab3p16.jpg\" alt=\"Result\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center><p>\
 Play around with the settings in the gcode creator settings and try out different materials. I found that increasing the laser speed increased the resolution of what I was engraving. \
 \
\
\
<div class=\"w3-row\">\
<div class=\"w3-col m8 s12\">\
<form method=\"get\" action=\"../index-1.html\">  <p><button class=\"w3-button w3-padding-large w3-white w3-border\"><b>Back</b></button></p></form>\
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