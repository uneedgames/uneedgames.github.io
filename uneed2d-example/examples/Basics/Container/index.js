let container = new UN.Entity()

let texture = PIXI.Texture.fromImage('images/icon.png');

for (var i = 0; i < 25; i++) {
    var icon = new PIXI.Sprite(texture);
    icon.scale.set(0.2)
    icon.anchor.set(0.5);
    icon.x = (i % 5) * 50;
    icon.y = Math.floor(i / 5) * 40;
    container.addChild(icon);
}

container.position.set(200, 200)
container.pivot.set(100, 100)
stage.addChild(container)

stage.scheduler.loop(() => {
  container.rotation += UN.Time.delta / 20 / 180 * Math.PI
  container.children.forEach(child => {
    child.rotation = container.rotation
  })
})