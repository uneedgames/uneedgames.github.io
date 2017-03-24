let explode = new UN.Sprite(UN.Texture.fromImage("./images/icon.png"))
explode.position.set(100, 100)
explode.scale.set(0.5)
explode.anchor.set(0.5)
explode.interactive = true
stage.addChild(explode)

let catcha = new UN.Sprite(UN.Texture.fromImage("./images/icon.png"))
catcha.position.set(300, 100)
catcha.scale.set(0.5)
catcha.anchor.set(0.5)
catcha.interactive = true
stage.addChild(catcha)

let tips = new UN.Text('Click ?', { fill: 0xFFFFFF })
tips.position.set(200, 200)
tips.anchor.set(0.5)
stage.addChild(tips)


// register audio
UN.Audio.register('explode', './images/explode.mp3')
UN.Audio.register('catcha', './images/catcha.mp3')

// click to play
explode.on('click', () => UN.Audio.play('explode'))
catcha.on('click', () => UN.Audio.play('catcha'))