var status=""
function preload(){
    img=loadImage('istockphoto-1067236648-1024x1024.jpg');
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(450,120);
    objectDetect=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Status : detecting object"
}
function draw(){
    image(img,0,0,500,500);
    text("AC",30,10);
    noFill();
    stroke("red");
    rect(20,0,450,200);
    text("Tv",40,265);
    stroke("red");
    rect(30,250,450,230);
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetect.detect(img , gotresults)
}
function gotresults(error,results){
   if(error){
       console.log(error);
   }
   else{
       console.log(results);
   }
}