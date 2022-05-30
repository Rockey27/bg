img="";

function preload(){
    img=loadImage('LAPTOP.jpg');
}

function setup() {
canvas=createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossc', modelLoded);
document.getElementById("status").innerHTML = "status : Deteting Objects";
}
function modelLoded(){
    console.log("modelLoaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw() {
image(img,0,0,640,420);
fill("#FF0000");
text("laptop",45,75);
noFill();
stroke("#FF0000");
strokeWeight(2);
rect(30,60,450,350);
}


