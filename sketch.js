function setup() {
  createCanvas(windowWidth, windowHeight);
  if(width < height){
    l = createVector(width/4 -20,width/4 -20);
  }else{
    l = createVector(height/4 ,height/4);
  }
  mass = createVector(1,1.4);
  ang = createVector(PI/2,PI/2);
  vel = createVector(0,0);
  acc = createVector(0,0);
  g = -1;
  x = width/2;
  y = height/4;
}

function draw() {
  background(220);
  acc.x = ((-g*(2*mass.x + mass.y)*sin(ang.x) - 
  mass.y*g*sin(ang.x-2*ang.y) - 
  2*sin(ang.x - ang.y)*mass.y*((vel.y**2)*l.y+(vel.x**2)*l.x*cos(ang.x-ang.y)))/
  (l.x*(2*mass.x+mass.y-mass.y*cos(2*ang.x-2*ang.y))));
  
  acc.y = ((2*sin(ang.x-ang.y)*
  ((vel.x**2)*l.x*(mass.x + mass.y) + g*(mass.x + mass.y)*cos(ang.x) + 
  (vel.y**2)*l.y*mass.y*cos(ang.x - ang.y)))/
  (l.y*(2*mass.x+mass.y-mass.y*cos(2*ang.x-2*ang.y))));
  
  
  vel.x += acc.x;
  vel.y += acc.y;
  ang.x += vel.x;
  ang.y += vel.y;
  
  fill(0);
  circle(x,y,5);
  
  x1 = x + l.x*sin(ang.x);
  y1 = y - l.x*cos(ang.x);
  x2 = x1 + l.y*sin(ang.y);
  y2 = y1 - l.y*cos(ang.y);
  
  
  line(x, y, x1, y1);
  circle(x1, y1, 25);
  
  line(x1, y1, x2, y2);
  circle(x2, y2, 25);
  
}
