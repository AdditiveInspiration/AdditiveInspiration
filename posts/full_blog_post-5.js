document.write("\
<div class=\"w3-card-4 w3-margin w3-white\" style=\"border: solid 3px #954955;\">\
<div class=\"w3-row w3-padding w3-dark-gray\" style=\"width:100%\" width = \"200\"  >\
<div class=\"w3-container\"><p>\
<h3><b>3d Printing: Where to start? Part 2\
</b></h3>\
<h5>3d Printing <span class=\"w3-opacity\"> 18th July 2017\
</span></h5>\
</div></div>\
<div class=\"w3-container\">\
<p>\
<!TEXT!><p><p>\
  This is the second part in a series designed to ge tbeginners up and running in the\
  world of 3d-printing. In the last section I went through some calibration techniques, filament types and temperature settings.\
  I ended with some links to stl files which are simple and easy to print for beginners. To continue on I think it would be useful to run through some of the free software available to create printable models!\
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b5p1.jpg\" alt=\"3d printing software\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
  This will cover:<p>FREE SOFTWARE, CREATING GCODE, LEVELING THE BED, CUSTOM DESIGN<p>\
  \
  \
  \
  \
  <p>\
  <h3><b>Software for your first print</b></h3>\
  <p>There is a lot of commercial 3d printing software available on the internet. I think because this guide is aimed at beginners I am going to recommend some free software. The\
  quality should not be any different than any paid software and should more than meet your needs!<p>\
  <h4><b>What is a slicr?</b></h4><p>\
  A Slicr is a piece of software which will convert the mesh of an stl model (3d file type) into machine code which will be run directly on your machine.\
  Gcode files are the output of this kind of software. It is a very simple command language which you can learn about from a quick google. Everything on the printer is set using gcode..to set the fan to half speed \"m106 150;\" is the command you would use. Here m106 specifies the fan control command. When the 3s printer reads in m106 it will then expect a value representing the fan speed to follow it. The slicr software will give you full control over the 3d printer and how the model is printed. It should fill in holes and support overhangs automatically on basic settings. If you want, you can get away without knowing anything about gcode! It is handy to add to your knowledge base but CURA will be capable of performing nearly any task you could want to do.\
  <p> I would recomend CURA, a simple but powerful free slicr tool. It can be downloaded here: <a href=\"https://ultimaker.com/en/products/cura-software\">CURA</a> <p>\
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b5p2.png\" alt=\"3cura\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
 <p>You will be guided through the setup process. You can select your 3d printer from a list. Advanced users should go into the settings menu and enable visibility of all control settings. New users should be fine setting default options. Normally it will ask you the type of filament you are using so you will not even have to manually set your temperature settings! \
  I would recommend after a while enabling setting visibility and making customised lists of settings. I will do a quick walkthrough of some important settings:<p>\
  <h5><b>Infill</b></h5><p>\
  Infill determines how empty areas within stl meshes get filled in. It is not necesscary to make the model completely solid (wasteful and time consuming). If the model does not need to be especially rigid set it to a value between 10% and 15%. The print time and filament usage will both decrease with these settings.\
  If there is a large top section to the model which will require some support to allow the 3d printer to fill in I would recommend an infill of between 20% - 40%. As the infill % increases the stronger and heavier your printed product will become! \
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b5p2.jpg\" alt=\"infill\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
  \
  <p><h5><b>Print Speed</b></h5><p>\
  The print speeds achievable will depend on the types of printer, stability of your printer and nozzle type. I think as a rule of thumb - quality will increase at slower speeds. I generally set the speed to be slower on early layers and increase the speed as the print progresses. To do this most printers will have a tune menu which will have an option to set speeds during the print. Otherwise you can insert speed settings into the gcode file. Look up the gcode command to setup print speed and within a text editor add in the command at points where you want to change the print speed. If I want high detailed models I typically reduce the speed for those areas of the print. Remember, even small models will take hours if you are setting the printer speed to 10mm/s. I normally, by Default, set the print speed to about 60mm/s. It seems to prodce nice results and doesnt take excessively long to print anything. \
  <p><h5><b>Layer Height</b></h5><p>\
  The layer height will set the movement of the z axis (vertical) on each layer. This will effect the resolution of your model. Setting a smaller value (0.1mm) will reduce the layer lines and get rid of the banding effects frequently seen during 3d prints. It will increase the print time, however, so for functional simple prints increase the value to >0.2mm. Avoid setting the value above 0.3mm, higher values will increase the chances of layers failing to stick and the print could come apart in your hands! Similarly, the lowr values will be limited by the nozzle size of your printer. If your printer nozzle is 0.4 mm then do not set the layer height below this value to avoid all sorts of problems with your print.\
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b5p3.jpg\" alt=\"layer height\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
  \
  <p><h5><b>Supports</b></h5><p>\
  The supports setting determines if supports will be generated for the model. Angled overhangs which would be impossible to print in thin air will be supported by automatically generated plastic supports. They can easily be broken off but can occasionally scar the surface of the model. Try to design models in such a way that you avoid major overhangs. If you have angled overhangs which are greater than 45 degrees you should enable supports to prevent a failed print.\
   <p><center><img text-align=\"center\" src=\"./Pictures/base/b5p4.png\" alt=\"supports\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
  \
  <p><b><h4>How do I make a custom design?</h4></b><p>\
  It is a great feeling when you download and print your first model...but it is one hundred times more satisfying to design and print your own model. To fully explore design for 3D printing would take another post but I will try to detail the software and tehniques I use to create custom models.<p>\
  <h5><b>3D Design</b></h5>\
  Fusion 360 is fantastc modelling programme. It allows you to create all sorts of designs using a very intuitive UI..what makes it even better is that it is free to students and hobbyists. Download Fusion 360 from <a href=\"https://www.autodesk.com/products/fusion-360/students-teachers-educators?mkwid=s|pcrid|207698365128|pkw||pmt|b|pdv|c|&&gclid=CObC_tH_l9UCFUmx7Qody6oD4w\">Here</a>. I will most likely do some future posts on how to use it..but for now google some tutorials to figure it out!<p>\
  Fusion 360 will allow you to create and export stl files. An STL is a filetype describing a mesh constructed from the design you created. Sometimes you will need to work with other pre-made stl files. Customising and mergin stl files is difficult if not impossible in fusion 360. I use meshmixer for that. It allows you to combine multiple stl files and perform all sorts of operations on them. It allows for more artistic designs because of the addition of sculpting tools.<p>\
  You can find meshmixer <a href=\"http://www.meshmixer.com/download.html\">Here</a><p>\
  Hopefully I have given you some useful information which will help you get up and running with a new 3D printer! Check back regularly for updatges and more projects!\
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