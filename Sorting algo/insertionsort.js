 var x = 0;
  var i = 1;
  var j = i;
  var numLines=50;
 

  function setup() {
  createCanvas(900, 600);
  colorMode(HSB, height);
  background(0);
  for (i = 0; i <numLines; i++) {
    values[i] =Math.floor(Math.random() * 500+1);
  }
 
  frameRate(1);
}

  function draw() {

    background(0);
    drawLines(array);

    if (i >= array.length) {
      return;
    }

    if (!midsorting) {
      j = i;
    }

    if (array[j] < array[j-1] && j >= 0) {

      midsorting = true;

      var temp = array[j-1];
      array[j-1] = array[j];
      array[j] = temp;
      
      j--;
    } else {

      midsorting = false;
    }

    if (!midsorting) {
      i++;
    }
  }

  function drawLines(arr) {
  
    var maxEl = Math.max.apply(null, arr);

    arr.forEach(function(el, index) {

      if(index === j) stroke(255,0,0);
  	  else stroke(255);
  
      var x = (index / arr.length) * width;
      var yTo = height - (el / maxEl) * height;

      line(x, height, x, yTo);
    });
  }