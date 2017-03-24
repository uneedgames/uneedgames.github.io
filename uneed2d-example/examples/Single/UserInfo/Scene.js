export default class Scene extends UN.Entity {

  constructor() {
    super()
    
    /**
     * 可以从UN.game.user中获取用户信息包含
     * 1. oid
     * 2. nickname
     * 3. avatar
     * 以后可能有更多信息
     */
    let text = "Your nickname is: " + UN.game.user.nickname
    this.nickname = new UN.Text(text, {
      fill: 0xFFFFFF,
      fontSize: 80,
    })
    this.nickname.position.set(this.stage.width/2, this.stage.height/2)
    this.nickname.anchor.set(0.5)
    this.addChild(this.nickname)
  }

  start() {}

}