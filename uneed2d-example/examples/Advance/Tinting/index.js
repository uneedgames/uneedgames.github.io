let texture = UN.Texture.fromImage('./images/icon.png');
let spriteCount = 20;
let sprites = [];
createSprite(texture);
stage.scheduler.loop(()=>{
    for(let i = 0; i < spriteCount; i++){
        if(sprites[i].position.x > stage.width + 100){
            sprites[i].position.x = -100;
        }else{
            sprites[i].position.x += 1 * Math.random();
        }
        
        sprites[i].rotation += sprites[i].direction
    }
})





function createSprite(texture){
    for(let i = 0; i < spriteCount; i++){
        let sprite = new UN.Sprite(texture);
        /**
         * tint负责着色功能，十六进制
         */
        sprite.tint = Math.random() * 0xFFFFFF;
        sprite.anchor.set(0.5);
        sprite.position.x = Math.random() * stage.width;
        sprite.position.y = Math.random() * stage.height;
        sprite.direction = Math.random() * Math.PI * 2 * 0.01;
        sprite.scale.set(Math.random() * 0.5 + 0.5);
        sprites.push(sprite);
        stage.addChild(sprite);
    }
}

