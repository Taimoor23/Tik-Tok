        var sc, mt, hr;

        function setup() {
          createCanvas(400,400);
          angleMode(DEGREES);
        }

        function draw() {
          background("black");
          translate(200,200);
          rotate(-90);

          hr=hour();
          mt=minute();
          sc=second();

          noFill();
          stroke("cyan");
          scAngle = map(sc,0,60,0,360);
          strokeWeight(4);
          arc(0,0,275,255,0,scAngle);

          stroke("magenta");
          mtAngle = map(mt,0,60,0,360);
          strokeWeight(6);
          arc(0,0,225,175,0,mtAngle);

          stroke("lime");
          hrAngle = map(hr,0,12,0,360);
          strokeWeight(8);
          arc(0,0,250,225,0,hrAngle);
          
     push();
     rotate(scAngle);
     stroke("cyan");
     strokeWeight(7);
     line(0,0,100,0);
     pop();
        
     push();
     rotate(mtAngle);  
     stroke("magenta");
     strokeWeight(7);
     line(0,0,80,0);
     pop();
         
     push();
     rotate(hrAngle);
     stroke("lime");
     strokeWeight(7);
     line(0,0,50,0);
     pop();

     drawSprites();
        }