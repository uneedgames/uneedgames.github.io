UN.loader
  .add('spritesheet', 'images/blue_ready1.json')
  .load(() => {
    
    let jsonData = UN.loader.resources.spritesheet.data
    let imageSrc = UN.loader.resources.spritesheet_image.url
    let textureAtlas = new UN.TextureAtlas("machine", jsonData, imageSrc)

    let animatedSprite = textureAtlas.makeAnimatedSprite()
    animatedSprite.position.set(100, 100)
    animatedSprite.scale.set(0.5)
    stage.addChild(animatedSprite)

    animatedSprite.animationSpeed = 0.1
    animatedSprite.play()

  });