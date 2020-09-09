/**
make sure the script not run until the page is loaded
*/
var vertices = []; 
var vt=[];
   //script 1 function
   var simpleSketch = function(sketch){
       var x = 0;
       var y = 100;
       
       //always put the paramater if you call p5 element
       sketch.setup = function(){
          sketch.createCanvas(600, 400);
       }

       sketch.draw = function(){
          sketch.background(0, 0, 200);
          sketch.prims();
          sketch.textAlign( sketch.CENTER)
         sketch.textSize(20);
           sketch.text("MST",  sketch.width/2,  sketch.height/2)
       }
     sketch.prims =function(){var reached = [];
  var unreached = [];
  for (var k = 0; k < vertices.length; k++) {
    unreached.push(vertices[k]);
  }
  reached.push(unreached[0]);
  unreached.splice(0, 1);

  while (unreached.length > 0) {
    var record = 66666;
    var rIndex; 
    var uIndex; 
    for (var i = 0; i < reached.length; i++) {
      for (var j = 0; j < unreached.length; j++) {
        var v1 = reached[i];
        var v2 = unreached[j];

        var dt = sketch.dist(v1.x, v1.y, v2.x, v2.y);
        
        // sketch.textAlign(sketch.CENTER)
        // sketch.text(dt, (v1.x+v2.x)/2, (v1.y+v2.y)/2);        
        
        if (dt < record) {
          record = dt; 
                  rIndex = i;
          uIndex = j;
        }
      }
    }

    sketch.line(
      reached[rIndex].x,
      reached[rIndex].y,
      unreached[uIndex].x,
      unreached[uIndex].y
    );

    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
  }
                 for (var t = 0; t < vertices.length; t++) {
    sketch.fill(255);
    sketch.stroke(255);
    sketch.ellipse(vertices[t].x, vertices[t].y, 10, 10);
    
                }}
   };
   
   //script 2 function 
   var touchSketch = function($){
      var colorR = $.floor($.random(255));
      var colorG = $.floor($.random(255));
      var colorB = $.floor($.random(255));
      
      $.setup = function(){
         $.createCanvas(600, 400);
      }
      
      $.draw = function(){
          $.background(colorR, colorG, colorB)
          $.textAlign($.CENTER)
        $.textSize(20);
          $.text("Original Graph", $.width/2, $.height/2)
          $.original();
      }
      
      //change the color if clicked
      $.mousePressed = function(){
          if($.mouseX > 0 && $.mouseX < $.width && $.mouseY > 0 && $.mouseY < $.height){
              var v = $.createVector($.mouseX, $.mouseY);
  vertices.push(v);
          }
      }
     $.original = function(){ for (var t = 0; t < vertices.length; t++) {
    $.fill('red');
    $.stroke('green');
  $.strokeWeight(1);
    $.ellipse(vertices[t].x, vertices[t].y, 10, 10);
    if(t>0){$.line(vertices[t].x,vertices[t].y,
         vertices[t-1].x,vertices[t-1].y);}//p++;
    //vertex(vertices[i].x,vertices[i].y);
  
  }
                   }

   }
var second_sketch = new p5(touchSketch, 'second-sketch-container');
   
    //and now create the sketch
    var first_sketch = new p5(simpleSketch, 'first-sketch-container');
    

/*sorry for my bad english*/