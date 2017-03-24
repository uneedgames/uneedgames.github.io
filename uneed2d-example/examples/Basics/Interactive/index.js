let sprite = new UN.Sprite(UN.Texture.fromImage("./images/icon.png"))
sprite.position.set(stage.width/2, stage.height/2)
sprite.scale.set(0.5)
sprite.anchor.set(0.5)
stage.addChild(sprite)

let text = 'Why you always over and out, click me ok?'
let tips = new UN.Text(text, { fill: 0xFFFFFF })
tips.position.set(stage.width/2, stage.height/2-100)
tips.anchor.set(0.5)
tips.visible = false
stage.addChild(tips)

let rotating = true
stage.scheduler.loop(() => {
  if(!rotating) return
  sprite.rotation += UN.Time.delta / 20 / 180 * Math.PI
})

// set to true
sprite.interactive = true

// listen event
sprite.on('mouseover', () => {
  rotating = false
  tips.visible = true
})
sprite.on('mouseout', () => {
  rotating = true
  tips.visible = false
})

let animating = false
sprite.on('pointerdown', () => {
  if(animating) return
  animating = true
  sprite.tween.quintOut({
    scale: 2,
    alpha: 0
  }, 500).promise().then(() => {
    sprite.scale.set(0.5)
    sprite.alpha = 1
    animating = false
  })
})

