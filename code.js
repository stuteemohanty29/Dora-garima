var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b1575e21-72eb-4976-ab59-812d199c7dc7","8497824e-024f-4544-bc81-3b73fcd7a4e2","7dc40521-7e7f-42e2-9eb5-50f5be0b17c9","5c91e925-5554-49fb-8389-91be2b1c62b0","25d68675-8416-4ab5-990f-e5833199a6ac","f00f874f-7db5-4b36-8434-3dfb64360b28","146a57a1-f8fe-4082-ab81-7ca90f3ee428","026e17fd-93d0-41bf-9086-ec691647298f","23fb5c79-4d93-494f-8778-6a43c1c2b586","50e6567b-1676-4858-891f-5621d9ac8365","1e96fc1e-311c-4ba9-9ec7-b3d465e1e62b","1d9a1552-d9d3-4683-aaf3-10ae72b26939","38198bca-c623-496f-98c1-dcc42d355b87","d7a6b090-ebf3-4fa6-964d-aacbc2cc699d","6b6a0750-27c2-4b5a-b23f-91fe8b92a1d8","563415d1-f870-4873-bb1b-5ffadd51a0fc"],"propsByKey":{"b1575e21-72eb-4976-ab59-812d199c7dc7":{"name":"Trophy","sourceUrl":null,"frameSize":{"x":34,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"R8E.ncff51zJWFp8iujsGtY0X6O_Hit1","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":38},"rootRelativePath":"assets/b1575e21-72eb-4976-ab59-812d199c7dc7.png"},"8497824e-024f-4544-bc81-3b73fcd7a4e2":{"name":"Blue Ghost","sourceUrl":null,"frameSize":{"x":27,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"3GRLBkULulb5ub4_cTWChc8fClbfZRoM","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":27},"rootRelativePath":"assets/8497824e-024f-4544-bc81-3b73fcd7a4e2.png"},"7dc40521-7e7f-42e2-9eb5-50f5be0b17c9":{"name":"Orange Ghost","sourceUrl":null,"frameSize":{"x":22,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"rmDtE7UzzTf4G4NerTVP36Czn249WAEO","loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":24},"rootRelativePath":"assets/7dc40521-7e7f-42e2-9eb5-50f5be0b17c9.png"},"5c91e925-5554-49fb-8389-91be2b1c62b0":{"name":"Crab","sourceUrl":null,"frameSize":{"x":25,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"TPRvq3UZz_sGg_HZy171kQAP_9i8O9W0","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":16},"rootRelativePath":"assets/5c91e925-5554-49fb-8389-91be2b1c62b0.png"},"25d68675-8416-4ab5-990f-e5833199a6ac":{"name":"Red Ghost","sourceUrl":null,"frameSize":{"x":27,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"cOFlhWEl9gSadtDB3wVZ64Sc0cJNQYmB","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":29},"rootRelativePath":"assets/25d68675-8416-4ab5-990f-e5833199a6ac.png"},"f00f874f-7db5-4b36-8434-3dfb64360b28":{"name":"Pink Ghost","sourceUrl":null,"frameSize":{"x":27,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"2fQFG0xjzsJSs6wE2GycfmwNgCh_ISfm","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":26},"rootRelativePath":"assets/f00f874f-7db5-4b36-8434-3dfb64360b28.png"},"146a57a1-f8fe-4082-ab81-7ca90f3ee428":{"name":"r","sourceUrl":null,"frameSize":{"x":418,"y":418},"frameCount":1,"looping":true,"frameDelay":12,"version":"gAVk4R_HkL1FQj9em5n4CejSkcvOEqoN","loadedFromSource":true,"saved":true,"sourceSize":{"x":418,"y":418},"rootRelativePath":"assets/146a57a1-f8fe-4082-ab81-7ca90f3ee428.png"},"026e17fd-93d0-41bf-9086-ec691647298f":{"name":"download (11).png_1","sourceUrl":"assets/v3/animations/Cxql4yTtQRzc_1E6-0uoSuUgDpxvLqsl8Q99doBKXCY/026e17fd-93d0-41bf-9086-ec691647298f.png","frameSize":{"x":25,"y":16},"frameCount":1,"looping":true,"frameDelay":4,"version":"FCsozeJSh3Hqj2wFc4C4IBw887rpCZzw","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":16},"rootRelativePath":"assets/v3/animations/Cxql4yTtQRzc_1E6-0uoSuUgDpxvLqsl8Q99doBKXCY/026e17fd-93d0-41bf-9086-ec691647298f.png"},"23fb5c79-4d93-494f-8778-6a43c1c2b586":{"name":"dora.png_1","sourceUrl":"assets/v3/animations/E1-Q4IQZaZXM70BQ2RMfIwqNd4sVIIq0XFbzXGx5_3c/23fb5c79-4d93-494f-8778-6a43c1c2b586.png","frameSize":{"x":340,"y":340},"frameCount":1,"looping":true,"frameDelay":4,"version":"SjpNpK6NvvrBpgY_Hq4KkFC9uhoyNx.h","loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":340},"rootRelativePath":"assets/v3/animations/E1-Q4IQZaZXM70BQ2RMfIwqNd4sVIIq0XFbzXGx5_3c/23fb5c79-4d93-494f-8778-6a43c1c2b586.png"},"50e6567b-1676-4858-891f-5621d9ac8365":{"name":"boots-min.png_1","sourceUrl":"assets/v3/animations/E1-Q4IQZaZXM70BQ2RMfIwqNd4sVIIq0XFbzXGx5_3c/50e6567b-1676-4858-891f-5621d9ac8365.png","frameSize":{"x":621,"y":723},"frameCount":1,"looping":true,"frameDelay":4,"version":"EvHdsi9gcnX14N8gWGTLU7ens_NAVVPQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":621,"y":723},"rootRelativePath":"assets/v3/animations/E1-Q4IQZaZXM70BQ2RMfIwqNd4sVIIq0XFbzXGx5_3c/50e6567b-1676-4858-891f-5621d9ac8365.png"},"1e96fc1e-311c-4ba9-9ec7-b3d465e1e62b":{"name":"enemy2.png_1","sourceUrl":"assets/v3/animations/E1-Q4IQZaZXM70BQ2RMfIwqNd4sVIIq0XFbzXGx5_3c/1e96fc1e-311c-4ba9-9ec7-b3d465e1e62b.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"amISE9afVqX4mZ9uFPsqcgMoz5ORTl1z","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/E1-Q4IQZaZXM70BQ2RMfIwqNd4sVIIq0XFbzXGx5_3c/1e96fc1e-311c-4ba9-9ec7-b3d465e1e62b.png"},"1d9a1552-d9d3-4683-aaf3-10ae72b26939":{"name":"enemy3.png_1","sourceUrl":"assets/v3/animations/E1-Q4IQZaZXM70BQ2RMfIwqNd4sVIIq0XFbzXGx5_3c/1d9a1552-d9d3-4683-aaf3-10ae72b26939.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"RoC.9MY_lz1iLq1s5I_ZrPeVyBoaPe09","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/E1-Q4IQZaZXM70BQ2RMfIwqNd4sVIIq0XFbzXGx5_3c/1d9a1552-d9d3-4683-aaf3-10ae72b26939.png"},"38198bca-c623-496f-98c1-dcc42d355b87":{"name":"chocobar_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Xf4zweHYr9cYZJAcvc9iat2aYndzLtTY/category_food/chocobar.png","frameSize":{"x":395,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"Xf4zweHYr9cYZJAcvc9iat2aYndzLtTY","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Xf4zweHYr9cYZJAcvc9iat2aYndzLtTY/category_food/chocobar.png"},"d7a6b090-ebf3-4fa6-964d-aacbc2cc699d":{"name":"chocobar_2","sourceUrl":null,"frameSize":{"x":395,"y":395},"frameCount":1,"looping":true,"frameDelay":12,"version":"q8ZwK_z4UjVy9VXBiEcfvMAe7ag6KrpJ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":395},"rootRelativePath":"assets/d7a6b090-ebf3-4fa6-964d-aacbc2cc699d.png"},"6b6a0750-27c2-4b5a-b23f-91fe8b92a1d8":{"name":"chocobar_3","sourceUrl":null,"frameSize":{"x":395,"y":395},"frameCount":1,"looping":true,"frameDelay":12,"version":"ngPwEOG39W2Fft.hP7TO6f8cvSvymkKi","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":395},"rootRelativePath":"assets/6b6a0750-27c2-4b5a-b23f-91fe8b92a1d8.png"},"563415d1-f870-4873-bb1b-5ffadd51a0fc":{"name":"chocobar_4","sourceUrl":null,"frameSize":{"x":395,"y":395},"frameCount":1,"looping":true,"frameDelay":12,"version":"bSX879DdHXuZ1V_LPUY87WIBTY3DR0g9","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":395},"rootRelativePath":"assets/563415d1-f870-4873-bb1b-5ffadd51a0fc.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var r=createSprite(365,295,20,20);
r.scale = 0.1;
var Score=0;
var count=0;
var player=createSprite(14,285,10,10);
player.setAnimation("dora.png_1");
player.scale = 0.1;

var trophy=createSprite(370,272,10,10);
trophy.setAnimation("boots-min.png_1");
trophy.scale = 0.05;

var cb1=createSprite(190,60,195,15);
cb1.shapeColor = "green";

var cb2=createSprite(370,60,60,15);
cb2.shapeColor = "green";
var cb3=createSprite(280,150,15,175);
cb3.shapeColor = "green";

var cb4=createSprite(220,230,125,15);
cb4.shapeColor = "green";

var cb5=createSprite(100,125,220,15);
cb5.shapeColor = "green";

var cb6=createSprite(215,150,15,65);
cb6.shapeColor = "green";

var cb7=createSprite(165,200,15,50);
cb7.shapeColor = "green";

var cb8=createSprite(142.5,180,60,15);
cb8.shapeColor = "green";

var cb9=createSprite(200,320,400,15);
cb9.shapeColor = "green";

var cb10=createSprite(115,250,15,155);
cb10.shapeColor = "green";

var cb11=createSprite(25,255,65,15);
cb11.shapeColor = "green";

var cb12=createSprite(50,210,15,75);
cb12.shapeColor = "green";

var cb13=createSprite(370,110,60,15);
cb13.shapeColor = "green";

var cb14=createSprite(345,185,15,165);
cb14.shapeColor = "green";

var cb15=createSprite(255,275,195,15);
cb15.shapeColor = "green";

var cb16=createSprite(5,130,15,235);
cb16.shapeColor = "green";

var cb17=createSprite(200,5,400,15);
cb17.shapeColor = "green";

var cb18=createSprite(395,30,15,50);
cb18.shapeColor = "green";

var cb19=createSprite(395,210,15,205);
cb19.shapeColor = "green";

var cb20=createSprite(395,360,15,80);
cb20.shapeColor = "green";

var cb21=createSprite(200,395,400,15);
cb21.shapeColor = "green";

var cb22=createSprite(5,360,15,80);
cb22.shapeColor = "green";

var ghost1=createSprite(50,50,1,1);
ghost1.setAnimation("Blue Ghost");
ghost1.velocityX = 2;
ghost1.velocityY = -2;


var ghost2=createSprite(310,240,1,1);
ghost2.setAnimation("Pink Ghost");
ghost2.velocityX = 2;
ghost2.velocityY = -2;

var ghost3=createSprite(360,30,1,1);
ghost3.setAnimation("Orange Ghost");
ghost3.velocityX = -2;
ghost3.velocityY = 0;

var ghost4=createSprite(80,155,1,1);
ghost4.setAnimation("Red Ghost");
ghost4.velocityX = 2;
ghost4.velocityY = 0;

var fruit1 = createSprite(175,90,1,1);
fruit1.setAnimation("chocobar_1");
fruit1.scale = 0.08;

var fruit2 = createSprite(248,196,1,1);
fruit2.setAnimation("chocobar_2");
fruit2.scale = 0.08;

var fruit3 = createSprite(359,30,1,1);
fruit3.setAnimation("chocobar_3");
fruit3.scale = 0.08;

var fruit4 = createSprite(141,207,1,1);
fruit4.setAnimation("chocobar_4");
fruit4.scale = 0.08;

var gameState = "play";


function draw() {
background("white");
createEdgeSprites();

player.bounceOff(edges);
player.bounceOff(cb1);
player.bounceOff(cb2);
player.bounceOff(cb3);
player.bounceOff(cb4);
player.bounceOff(cb5);
player.bounceOff(cb6);
player.bounceOff(cb7);
player.bounceOff(cb8); 
player.bounceOff(cb9);
player.bounceOff(cb10);
player.bounceOff(cb11);
player.bounceOff(cb12);
player.bounceOff(cb13);
player.bounceOff(cb14);
player.bounceOff(cb15);
player.bounceOff(cb16);
player.bounceOff(cb17);
player.bounceOff(cb18);
player.bounceOff(cb19);
player.bounceOff(cb20);
player.bounceOff(cb21);
player.bounceOff(cb22);
player.velocityX = 0;
player.velocityY = 0;
ghost1.bounceOff(edges);
ghost1.bounceOff(cb1);
ghost1.bounceOff(cb2);
ghost1.bounceOff(cb3);
ghost1.bounceOff(cb4);
ghost1.bounceOff(cb5);
ghost1.bounceOff(cb6);
ghost1.bounceOff(cb7);
ghost1.bounceOff(cb8); 
ghost1.bounceOff(cb9);
ghost1.bounceOff(cb10);
ghost1.bounceOff(cb11);
ghost1.bounceOff(cb12);
ghost1.bounceOff(cb13);
ghost1.bounceOff(cb14);
ghost1.bounceOff(cb15);
ghost1.bounceOff(cb16);
ghost1.bounceOff(cb17);
ghost1.bounceOff(cb18);
ghost1.bounceOff(cb19);
ghost1.bounceOff(cb20);
ghost1.bounceOff(cb21);
ghost1.bounceOff(cb22);
ghost1.bounce(ghost2);
ghost1.bounce(ghost3);
ghost1.bounce(ghost4);
ghost2.bounceOff(edges);
ghost2.bounceOff(cb1);
ghost2.bounceOff(cb2);
ghost2.bounceOff(cb3);
ghost2.bounceOff(cb4);
ghost2.bounceOff(cb5);
ghost2.bounceOff(cb6);
ghost2.bounceOff(cb7);
ghost2.bounceOff(cb8); 
ghost2.bounceOff(cb9);
ghost2.bounceOff(cb10);
ghost2.bounceOff(cb11);
ghost2.bounceOff(cb12);
ghost2.bounceOff(cb13);
ghost2.bounceOff(cb14);
ghost2.bounceOff(cb15);
ghost2.bounceOff(cb16);
ghost2.bounceOff(cb17);
ghost2.bounceOff(cb18);
ghost2.bounceOff(cb19);
ghost2.bounceOff(cb20);
ghost2.bounceOff(cb21);
ghost2.bounceOff(cb22);
ghost2.bounce(ghost3);
ghost2.bounce(ghost4);
ghost3.bounceOff(edges);
ghost3.bounceOff(cb1);
ghost3.bounceOff(cb2);
ghost3.bounceOff(cb3);
ghost3.bounceOff(cb4);
ghost3.bounceOff(cb5);
ghost3.bounceOff(cb6);
ghost3.bounceOff(cb7);
ghost3.bounceOff(cb8); 
ghost3.bounceOff(cb9);
ghost3.bounceOff(cb10);
ghost3.bounceOff(cb11);
ghost3.bounceOff(cb12);
ghost3.bounceOff(cb13);
ghost3.bounceOff(cb14);
ghost3.bounceOff(cb15);
ghost3.bounceOff(cb16);
ghost3.bounceOff(cb17);
ghost3.bounceOff(cb18);
ghost3.bounceOff(cb19);
ghost3.bounceOff(cb20);
ghost3.bounceOff(cb21);
ghost3.bounceOff(cb22);
ghost3.bounce(ghost4);
ghost4.bounceOff(edges);
ghost4.bounceOff(cb1);
ghost4.bounceOff(cb2);
ghost4.bounceOff(cb3);
ghost4.bounceOff(cb4);
ghost4.bounceOff(cb5);
ghost4.bounceOff(cb6);
ghost4.bounceOff(cb7);
ghost4.bounceOff(cb8); 
ghost4.bounceOff(cb9);
ghost4.bounceOff(cb10);
ghost4.bounceOff(cb11);
ghost4.bounceOff(cb12);
ghost4.bounceOff(cb13);
ghost4.bounceOff(cb14);
ghost4.bounceOff(cb15);
ghost4.bounceOff(cb16);
ghost4.bounceOff(cb17);
ghost4.bounceOff(cb18);
ghost4.bounceOff(cb19);
ghost4.bounceOff(cb20);
ghost4.bounceOff(cb21);
ghost4.bounceOff(cb22);

  if(keyDown(UP_ARROW)) {
    player.velocityX = 0;
    player.velocityY = -4;
    Score+=2;
  }
  
  if(keyDown(DOWN_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 4;
    Score+=2;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    player.velocityX = 4;
    player.velocityY = 0;Score+=2;
  }
  
  if(keyDown(LEFT_ARROW)) {
    player.velocityX = -4;
    player.velocityY = 0;Score+=2;
  }

if(gameState === "play") {
  textSize(30); text("SAVE BOOTS",85,355);
  textSize(30); text("Score: "+Score,85,385);
}

if(player.isTouching(trophy)) {
  gameState = "win";
  textSize(30); text("YOU WIN!",120,355);
  text("Score: "+Score,85,385);
  
  player.setVelocity(0,0);
  ghost1.setVelocity(0,0);
  ghost2.setVelocity(0,0);
  ghost3.setVelocity(0,0);
  ghost4.setVelocity(0,0);
}

if(player.isTouching(fruit1)||player.isTouching(fruit2)||player.isTouching(fruit3)||player.isTouching(fruit4)){
 if(player.isTouching(fruit1)){
   fruit1.destroy();
   Score+=10;
 }
 if(player.isTouching(fruit2)){
   fruit2.destroy();
   Score+=10;
 }
 if(player.isTouching(fruit3)){
   fruit3.destroy();
   Score+=10;
 }
 if(player.isTouching(fruit4)){
   fruit4.destroy();
   Score+=10;
 }
}
if(player.isTouching(ghost1)||player.isTouching(ghost2)||player.isTouching(ghost3)||player.isTouching(ghost4)){

 
  gameState = "end";
  textSize(30); text("YOU LOSE",100,355);
  text("Score: "+Score,85,385);
  
  
  textSize(20); text("Press 'R' to Restart",160,305);
  ghost1.setVelocity(0,0);
  ghost2.setVelocity(0,0);                                                                                                                                       
  ghost3.setVelocity(0,0);
  ghost4.setVelocity(0,0);
  player.setVelocity(0,0);
  
 
}

if((keyDown("r")||mousePressedOver(r))&&gameState === "end") {
  reset();
  gameState = "play";
}

drawSprites();
}

function reset() {
  player.x = 10;
  player.y = 290;
  ghost1.x = 50;
  ghost1.y = 50;
  ghost1.velocityX = 2;
  ghost1.velocityY = -2;
  ghost2.x = 310;
  ghost2.y = 240;
  ghost2.velocityX = 2;
  ghost2.velocityY = -2;
  ghost3.x = 360;
  ghost3.y = 30;
  ghost3.velocityX = -2;
  ghost3.velocityY = 0;
  ghost4.x = 80;
  ghost4.y = 155;
  ghost4.velocityX = 2;
  ghost4.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
