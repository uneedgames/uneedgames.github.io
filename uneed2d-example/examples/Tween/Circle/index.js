stage.interactive = true;
stage.hitArea =  new PIXI.Rectangle(-10000,-10000,20000,20000);
let circleCount = 20;
let circles = [];
initCircles();
function initCircles(){
    for(var i = 0; i < circleCount; i++){
        let circle = new UN.Graphics();
        circle.beginFill(0x113355);
        circle.drawCircle(0,0,(i + 1) * 10);
        circle.alpha = 1 - i * 0.02;
        circle.position.x = Math.random() * 550;
        circle.position.y = Math.random() * 400;
        circle.blendMode = PIXI.BLEND_MODES.SCREEN;
        circles.push(circle);
        stage.addChild(circle);
        circle.tween.bounceOut({x:200,y:200},(500 + i * 40))
    }
}

stage.on('mouseup',(e)=>{
    var pos = e.data.getLocalPosition(stage);
    for(var i = 0; i < circleCount; i++){
        let circle = circles[i];
        circle.tween.bounceOut({x:pos.x,y:pos.y},(500 + i * 40));
    }
})