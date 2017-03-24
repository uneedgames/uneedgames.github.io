let sprite = new UN.Sprite(UN.Texture.fromImage("./images/icon.png"))
sprite.position.set(200, 200)
sprite.scale.set(0.5)
sprite.anchor.set(0.5)
stage.addChild(sprite)

stage.scheduler.loop(() => {
  sprite.rotation += UN.Time.delta / 20 / 180 * Math.PI
})

// masking
let mask = new UN.Graphics()
mask.beginFill(0xFFFFFF, 1)
mask.drawRect(-50, -50, 100, 100)
mask.endFill()
mask.position.set(sprite.x, sprite.y)
sprite.mask = mask
stage.addChild(mask)