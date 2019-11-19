// this code analises the fire information from br from 2015-2017

var BRfires;
var BuildingFire;

var fireType = [];

var fireName = [];
function preload() {

    BRfires = loadTable("BR_Fire.csv");

}

function setup(){
createCanvas(1000,800);


// acces info from BRfires
var rowCount = BRfires.getRowCount();
fireType = [];
// get the numbers from the diffrent fire types
for (var i = 1; i < rowCount; i++){
fireType[i] = BRfires.getNum(i,1);

fireName[i] = BRfires.get(i,0);

}
console.log(fireName);


//Building fire number
//how far down, row 
//BuildingFire = BRfires.get(16,1);
//console.log(BuildingFire);
}


function draw(){
   
   
background(5);
noStroke();
fill(196,16,9)
textSize(25);
text("Baton Rouge Fire Incidents",250,775)
textSize(12);
text("Emergency calls responded to by the Baton Rouge Fire Department",219,793)

//strokeWeight(3)
// draw backgorund grid for data 
// using the grid of fire type to draw verticle lines
stroke(120,90,55);
line(50,750,750,750);

strokeWeight(.7)
line(50,750,50,50);
for (var i = 1; i<fireType.length; i++){
    var x = map(i,0,fireType.length-1, 50,750);
   // var y = map(fireType[i], 0,60,500,50);
    line(x,750,x,50);
}
//console.log(fireType.length);

// ploting points according to fire type
strokeWeight(7);
stroke(234,61,50)

for (var i = 1; i<fireType.length; i++){
    var x = map(i,0,fireType.length-1, 50,750);
    var y = map(fireType[i],0,500,750,50);

    if (fireType[i]>8000){
        strokeWeight(2);
        stroke(255,145,78);
    }
    if (fireType[i]>2000 && fireType[i]<8000){
        strokeWeight(2.5);
        stroke(235,125,7);
    }
    if (fireType[i]>1000 && fireType[i]<2000){
        strokeWeight(2);
        stroke(235,115,47);
    }
    if(fireType[i]<1000 && fireType[i]>100){
        strokeWeight(2.2);
        stroke(234,61,50) 
    }
    if(fireType[i]<100 && fireType[i]>50 ){
        strokeWeight(4);
        stroke(96,16,9) 
    }
    if(fireType[i]<50 && fireType[i]>20){
        strokeWeight(3.5);
        stroke(175,32,22) 
    }
    if (fireType[i]<20){
        strokeWeight(3);
        stroke(185,59,8);
    }
    line(x,750,x,y)

}

//for (var i =1; i < fireName.length, i++){

    displayNameNum = int(map(mouseX,0,width,0,fireName.length))
    textSize(20);
    noStroke();
    fill(250,250,250)
text(fireName[displayNameNum], mouseX, mouseY);
//}
strokeWeight(3)
stroke(120,90,55);
line(50,750,750,750);


//text()
}

var displayName