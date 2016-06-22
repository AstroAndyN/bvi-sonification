function main_leap(){
  const MAX_HANDS = 1; //More than 1 hand drops DOM performance
  const FINGER_COUNT = 2;
  const FINGER_MIN = 1;
  const LEAP_MIN = { 'x':-15.0, 'y':15.0, 'z':-20.0 };
  const LEAP_MAX = { 'x': 15.0, 'y':26.0, 'z': 20.0 }; 
  const LABEL_OFFSET = { 'x': 30.0, 'y': -20 };
  const PALM_HTML	= "<div class='palm'><img src='images/palm.png' /></div>";
  const DIP_HTML	= "<div class='dip'><img src='images/dip.png' /></div>";
  const PIP_HTML	= "<div class='pip'><img src='images/pip.png' /></div>";
  const MCP_HTML	= "<div class='mcp'><img src='images/mcp.png' /></div>";
  const LABEL_HTML = "<div class='finger_label'></div>";

  var showLabels = false;
  var screenWidth, screenHeight;
  var normalToScreen = 1.0;

  //Symantic sugar. Maps finger names to IDs.
  const fingerMap = {
    'thumb': 0,
    'index': 1,
    'middle':2,
    'ring': 3,
    'pinky': 4,
    0: 'thumb',
    1: 'index',
    2: 'middle',
    3: 'ring',
    4: 'pinky',
  }

  /*
   * Setup the page.
   */
  function start() {
    updateScreenSize(); //Set the inital screen size.
    $(window).resize(updateScreenSize); //Update our screen size on resize.
    createHands(); //Setup the DOM elements to draw our hands. Nothing Leap specific here.
  }

  /*
   * This is the meat of our exmaple. Get the LeapMotion frame data and move the relevant DOM items. 
   */
  function updateLoop(frame) {
    for(var h=0; h<MAX_HANDS; h++) {
      if(h < frame.hands.length) {
        var leap_hand = frame.hands[h];

        if(leap_hand.valid) {
          showHand(h);
          updateHandPosition(h, leap_hand);
          updateHandLabelText(h, leap_hand);
          checkAudio();
        }
        else
        {
          hideHand(h);
          stopAudio();
        }
      }
      else {
        hideHand(h);
        stopAudio();
      }
    }
  }

  /*
   * Make all items on the hand visible.
   */
  function showHand(h) {
    //$("#palm_"+h).show();
    //$('#label_'+h+'_palm').show();
    for(var f=FINGER_MIN; f < FINGER_COUNT; f++) {
      //$("#mcp_"+h+"_"+f).show();
      //$("#pip_"+h+"_"+f).show();
      $("#dip_"+h+"_"+f).show();
      
      // only show the label if labels are enabled.
      if(showLabels) $("#label_"+h+"_"+f).show();
      else $("#label_"+h+"_"+f).hide();
    }
  }

  function hideHand(h) {
    $("#palm_"+h).hide();
    $('#label_'+h+'_palm').hide();
    for(var f=FINGER_MIN; f < FINGER_COUNT; f++) {
      $("#mcp_"+h+"_"+f).hide();
      $("#pip_"+h+"_"+f).hide();
      $("#dip_"+h+"_"+f).hide();
      $("#label_"+h+"_"+f).hide();
    }
  }

  function updateHandPosition(h, leap_hand) {
    var palmPosition = normalizeVector(leap_hand.palmPosition).multiplyScalar(normalToScreen);

    $("#palm_"+h).offset({'left': palmPosition.x , 'top': palmPosition.z });
    $("#palm_"+h).css('position', 'absolute');

    $('#label_'+h+'_palm').offset({ "left": palmPosition.x + LABEL_OFFSET.x, "top": palmPosition.z + LABEL_OFFSET.y });
    $("#palm_"+h).css('position', 'absolute');
    
    for(var f=FINGER_MIN; f < FINGER_COUNT; f++) {
      var mcpPosition = normalizeVector(leap_hand.fingers[f].mcpPosition).multiplyScalar(normalToScreen);
      var pipPosition = normalizeVector(leap_hand.fingers[f].pipPosition).multiplyScalar(normalToScreen);
      var dipPosition = normalizeVector(leap_hand.fingers[f].dipPosition).multiplyScalar(normalToScreen);
      var labelPosition = dipPosition;

      $("#mcp_"+h+"_"+f).offset({ "left": mcpPosition.x, "top": -mcpPosition.y });
      $("#pip_"+h+"_"+f).offset({ "left": pipPosition.x, "top": -pipPosition.y });
      $("#dip_"+h+"_"+f).offset({ "left": dipPosition.x, "top": -dipPosition.y });
      $("#label_"+h+"_"+f).offset({ "left": labelPosition.x + LABEL_OFFSET.x, "top": -labelPosition.y + LABEL_OFFSET.y });

      $("#mcp_"+h+"_"+f).css('position', 'absolute');
      $("#pip_"+h+"_"+f).css('position', 'absolute');
      $("#dip_"+h+"_"+f).css('position', 'absolute');
      $("#label_"+h+"_"+f).css('position', 'absolute');
    }
  }

  function updateHandLabelText(h, leap_hand) {
    $('#label_'+h+'_palm').text(leap_hand.type);
    for(var f=FINGER_MIN; f < FINGER_COUNT; f++) {
      var finger = leap_hand.fingers[f];
      $("#label_"+h+"_"+f).text(fingerMap[finger.type]);
    }
  }

  function createHands() {
    //Create elements for two hands
    for(var h=0;h<MAX_HANDS;h++){
      
      //Add the palm
      //var palm = $(PALM_HTML);
      //palm.attr('id',"palm_"+h);
      //palm.hide();
      //$('body').append(palm);

      //var palmLabel = $(LABEL_HTML);
      //palmLabel.attr('id', 'label_'+h+'_palm');
      //palmLabel.hide();
      //$('body').append(palmLabel);
      
      //Add the fingers
      for(var f=FINGER_MIN;f<FINGER_COUNT;f++)
      {
        //MCP Joint
        //var mcp = $(MCP_HTML);
        //mcp.attr('id', "mcp_"+h+"_"+f);
        //mcp.hide();
        //$('body').append(mcp);
        
        //PIP joint
        //var pip = $(PIP_HTML);
        //pip.attr('id', "pip_"+h+"_"+f);
        //pip.hide();
        //$('body').append(pip);
        
        //DIP Joint
        var dip = $(DIP_HTML);
        dip.attr('id', "dip_"+h+"_"+f);
        dip.hide();
        $('body').append(dip);

        //Finger Label
        var label = $(LABEL_HTML);
        label.attr('id', "label_"+h+"_"+f);
        label.hide();
        $('body').append(label);
      }
    }
  }

  function updateScreenSize() {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    normalToScreen = Math.min(screenWidth, screenHeight);
  }

  /*
   * Put leap-scale Vectors into a unit space
   */
  function normalizeVector(position){
    var pos = new Vector(position[0]/10.0, position[1]/10.0, position[2]/10.0);
     pos.x = (pos.x - LEAP_MIN.x) / (LEAP_MAX.x - LEAP_MIN.x);
     pos.y = (pos.y - LEAP_MIN.y) / (LEAP_MAX.y - LEAP_MIN.y);
     pos.z = (pos.z - LEAP_MIN.z) / (LEAP_MAX.z - LEAP_MIN.z);
     return pos;
  }

  start();
  Leap.loop({enableGestures: true}, updateLoop); 
};

/*
 * Vector Object - mostly for the sake of symantics. 
 */
function Vector(mX,mY,mZ){
  this.x = typeof mX!=='undefined'?mX:0; 
  this.y = typeof mY!=='undefined'?mY:0;
  this.z = typeof mZ!=='undefined'?mZ:0;
}

Vector.prototype.add = function(v2){
  return new Vector(
    this.x + v2.x,
    this.y + v2.y,
    this.z + v2.z);
}

Vector.prototype.subtract = function(v2){
  return new Vector(
    this.x - v2.x,
    this.y - v2.y,
    this.z - v2.z);
}

Vector.prototype.multiply = function(v2){
  return new Vector(
    this.x * v2.x,
    this.y * v2.y,
    this.z * v2.z);
}

Vector.prototype.multiplyScalar = function(scalar){
  return new Vector(
    this.x * scalar,
    this.y * scalar,
    this.z * scalar);
}

Vector.prototype.equals = function(v2){
  return this.x == v2.x && this.y == v2.y && this.z == v2.z;
}

Vector.prototype.squaredDistanceTo = function(v2){
  var diff = this.subtract(v2);
  return (diff.x*diff.x)+(diff.y*diff.y)+(diff.z*diff.z);
}

Vector.prototype.normalized = function() { 
  var mag = this.magnitude();
  return new Vector(
    this.x / mag,
    this.y / mag, 
    this.z / mag);
}

Vector.prototype.magnitude = function() {
  return Math.sqrt((this.x*this.x)+(this.y*this.y)+(this.z*this.z));
}

Vector.prototype.distanceTo = function(v2){
  return Math.sqrt(this.squaredDistance(v2));
}

Vector.prototype.dotProduct = function(v2) {
  var v1 = this.normalized();
  v2 = v2.normalized();
  var n = 0;
  n += v1.x * v2.x;
  n += v1.y * v2.y;
  n += v1.z * v2.z;
  return n;
 }

 function leapToVector(leapPosition){
  return new Vector(leapPosition[0], leapPosition[1], leapPosition[2]);
 }
