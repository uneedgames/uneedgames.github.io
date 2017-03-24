let sprite = new UN.Sprite(UN.Texture.fromImage("./images/icon.png"))
sprite.position.set(stage.width/2, stage.height/2)
sprite.scale.set(0.5)
sprite.anchor.set(0.5)
stage.addChild(sprite)

stage.scheduler.loop(() => {
  sprite.rotation += UN.Time.delta / 20 / 180 * Math.PI
})