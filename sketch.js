//universal variables
let tool = 0;
let sunSet;
let preSet;
let gene_OK = false;

//variables for control

let input_tools = [];
let generate_color = ['#193498', '#113CFC', '#1597E5', '#A2DBFA'];

let num_max = 5;


function setup() { 
  
  createCanvas(800, 800);
  pixelDensity(1);
  tool = width;
  
  
  
  //slider bar
  
   let setBarX = 500;
   let setBarY = 20;
   let dy = 50;

   //Red Slider
   input_tools[0] = createP('Red');
   input_tools[0].position(setBarX, setBarY);
  
   input_tools[1] = createSlider(1, 255, 55, 5);
   input_tools[1].position(setBarX, setBarY += dy);
   input_tools[1].style('width', '100px');  
   console.log( input_tools[1] ) 
  
   //Green Slider  
   input_tools[2] = createP('Green');
   input_tools[2].position(setBarX, setBarY+= dy);
   input_tools[3] = createSlider(1, 255, 155, 5);
   input_tools[3].position(setBarX, setBarY += dy);
   input_tools[3].style('width', '100px'); 
  
   //Blue Slider  
   input_tools[4] = createP('Blue');
   input_tools[4].position(setBarX, setBarY+= dy);
   input_tools[5] = createSlider(1, 255, 55, 5);
   input_tools[5].position(setBarX, setBarY += dy);
   input_tools[5].style('width', '100px');

   //Generate Color
   input_tools[6] = createP('Generate Color');
   input_tools[6].position(setBarX, setBarY += dy);

   input_tools[7] = createSelect();
   input_tools[7].position(setBarX, setBarY += dy);
   for(let i=0;i<generate_color.length;i++){
      input_tools[7].option(generate_color[i]);
   }
   input_tools[7].changed(backLayer_set);
  
   //patern Fill
   input_tools[8] = createP('Num of Squares #');
   input_tools[8].position(setBarX, setBarY += dy);
   input_tools[9] = createSelect();
   input_tools[9].position(setBarX, setBarY += dy);
   for(let i=0;i<num_max;i++){
        input_tools[9].option(i+1);
   }

  
  
   input_tools[10] = createButton('Generate');
   input_tools[10].position(setBarX, setBarY += dy);
   input_tools[10].mousePressed();

   input_tools[11] = createButton('Clear');
   input_tools[11].position(setBarX, setBarY += dy);
   input_tools[11].mousePressed(all_clear);
	
   input_tools[12] = createButton('Save');
   input_tools[12].position(setBarX, setBarY += dy);
   input_tools[12].mousePressed();
   
  
  console.log(input_tools[6] );
  drawSunset();
  re_preSet();



}


function draw() {  
     if(gene_OK == false ) {
        if( mouseIsPressed ==true) {
          re_preSet();
        }
       
       
      image(preSet,0,0,400,800);
    
    
    }
    else{
       image(sunSet,0,0,400,800);
    }
 
}





function re_preSet(){
  preSet = createGraphics( 400 , 800 );
  preSet.fill( input_tools[1].value() ,input_tools[3].value() ,input_tools[5].value() );
  preSet.stroke( input_tools[7].value() );
  preSet.strokeWeight(10);
  preSet.rect(0,0,400,800);
}





function drawSunset(){  
  sunSet = createGraphics (400,800);
  let mydecR = random(255);
  let mydecG = random(255);
  let mydecB = random(255);
   
  for (let i = 0; i < tool ; i++)      
      for (let j = 0 ; j < tool ; j++) {
  
        c = color( (mydecR + i) % 500 , (mydecG + 100)% 500 , (mydecB + (256-j)) %500 ) ; 
        sunSet.noStroke();
        sunSet.fill(c,100);       
        sunSet.ellipse(i,j,2,2);
      }
  
}


function drawLayer_set(){
  draw_layer.fill(input_tools[5].value());
}

function backLayer_set(){
  back_layer.background(input_tools[7].value());
}

function all_clear(){
}
