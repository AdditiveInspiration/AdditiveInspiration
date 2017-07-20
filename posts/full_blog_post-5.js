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
  Slicr software is a piece of software which will convert the mesh of an stl model (3d file type) into machine code which will be run directly on your machine.\
  Gcode files are the output of this kind of software. It is a very simple command language which you can learn about from a quick google. Everything on the printer is set using gcode..to set the fan to half speed \"m106 150;\"The slicr software will give you full control over the 3d printer and how the model is printed. It should fill in holes and support overhangs automatically on basic settings. \
  <p> I would recomend CURA, a simple but powerful free slicr tool. It can be downloaded here: <a href=\"https://ultimaker.com/en/products/cura-software\">CURA</a> <p>\
  <p><center><img text-align=\"center\" src=\"./Pictures/base/b5p2.png\" alt=\"3cura\" style=\"width:50%; max-width:400px;\"  style=\" left: 50%\" style=\"top:5%\"></center>\
 <p>You will be guided through the setup process. You can select your 3d printer from a list. Advanced users should go into the settings menu and enable visibility of all control settings. New users should be fine setting default options. Normally it will ask you the type of filament you are using so you will not even have to manually set your temperature settings! \
  I would recommend after a while enabling setting visibility and making customised lists of settings. I will do a quick walkthrough of some important settings:<p>\
  <h5><b>Infill</b></h5><p>\
  Infill determines how empty areas within stl meshes get filled in. It is not necesscary to make the model completely solid (wasteful and time consuming). If the model does not need to be especially rigid set it to a value between 10% and 15%. The print time and filament usage will both decrease with these settings.\
  If there is a large top section to the model, which the surrounding walls are at an angle lower than 40 degrees, I would recommend an infill of between 20% - 40%. As the infill % increases the stronger and heavier your printed product will become! \
  <p><h5><b>Print Speed</b></h5><p>\
  The print speeds achievable will depend on the types of printer, stability of your printer and nozzle type. I think as a rule of thumb - quality will increase at slower speeds. I generally set the speed to be slower on early layers. If I want high detailed models I \
  \
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