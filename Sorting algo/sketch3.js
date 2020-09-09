let values = [];
let newarr = [];
let loops;
let swaps;
let cycles = 1;
let lines = false;
let numLines = 25;
let selType, inpNum;
let button;
let finished = false;
let framer;let speed=1;
function setup() {
    selType = createSelect();
    selType.position(20, 10);
    selType.option('Bubble Sort');
    selType.option('Selection Sort');
    selType.option('QuickSort Sort');
    selType.option('Merge Sort');
    button = createButton('increase speed');
    button.position(20, 50);
    inpNum = createInput('25');
    inpNum.position(20, 30);
    inpNum.input(function () {
        numLines = inpNum.value();
        resetArray();
    });
    createCanvas(1200, 600);
     resetArray();
}

function mousePressed(){speed=speed+1;
}

function draw() { 
    background(0);
    button.mousePressed();
     {frameRate(speed);}
     if (finished==false) {
        switch (selType.value()) {
            case 'Bubble Sort':
                bubbleSort();
             
          }
    } else {fill('yellow');textSize(32);
text('Sorting completed', 30, 90);
textSize(14);
        console.log("finished");
        noLoop();
    }
    
        changecolor(0,values.length);

}
swap = function (arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
setArray = function () {
    console.log('resetting')
    values = [];
    for (i = 0; i < numLines; i++) {
        values[i] = random(height);
    }
    loops = 0;
    swaps = 0;
    finished = false;
     loop();
 }
swap = function (arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function changecolor(s,e){ 
 for (i = s; i < e; i++) { newarr[i]=values[i];
       
        let location = map(i, 0, values.length, 0, width);

    strokeWeight(5);
                stroke(22);
                fill('#0f0');
            
        
        colorMode(HSB, height);//let h=1.1*((height - values[i]));
        rect(location,(height - values[i]), width / numLines, height);
         fill('white');
        text(''+newarr[i]+"",location+6, height - values[i]);

    }
}
function changecolor2(s,e){ 
 for (i = s; i < e; i++) { newarr[i]=values[i];
       
        let location = map(i, 0, values.length, 0, width);

    strokeWeight(5);
                stroke(22);
                fill('red');
        colorMode(HSB, height);
        rect(location,(height - values[i]), width / numLines, height);
         fill('white');
         textSize(14);
        text(''+newarr[i]+"",location+6, height - values[i]);

    }
}
selectionSort = function () {
    for (j = 0; j < values.length - loops - 1; j++) {
        let a = values[j];
        let b = values[j + 1];
        if (a > b) {
            swap(values, j, j + 1);
        }
    }
    if (loops == values.length) finished = true;
}

bubbleSort = function () {
    if (swaps < values.length - loops - 1) {
        for (i = 0; i < cycles; i++) {
            let a = values[swaps];
            let b = values[swaps + 1];
            if (a > b) { 
                swap(values, swaps, swaps + 1);
            }
            swaps++;
        }
    } else {
        swaps = 0;
        loops++;
    }
    if (loops == values.length) finished = true;
}
resetArray = function () {
    console.log('resetting')
    values = [];
    for (i = 0; i < numLines; i++) {
        values[i] = Math.floor(Math.random() * 500+1);
    }
    loops = 0;
    swaps = 0;
    
    finished = false;
    loop();
}