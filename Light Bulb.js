Status ="";
light_image = "";

function preload()
{
    light_image = loadImage("Light Blb.jpg");
}

function setup()
{
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelloaded()
{
    console.log("Model loaded!");
    Status = true;
    object_detector.detect(light_image,gotresults);
}

function gotresults(results,error)
{
  if(error)
  {
      console.error(error);
  }
  console.log(results);
}

function draw()
{
    image(light_image,0,0,640,350);
}