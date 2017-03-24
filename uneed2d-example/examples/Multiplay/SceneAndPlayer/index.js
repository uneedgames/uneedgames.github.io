import Scene from './Scene'
import Player from './Player'

UN.multiplayer.entityManager.setSceneEntityClass(Scene)
UN.multiplayer.entityManager.setPlayerEntityClass(Player)

const game = new UN.Game({
  mode: 'multiplay',
  gameid: 'riceball_pk',
  cover: "./images/multiplay.png",
  icon: "./images/icon.png"
})

game.init()
UN.stage.addChild(game)