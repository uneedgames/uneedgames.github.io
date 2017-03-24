/**
 * uneed2d-game 框架提供了：
 * 1. 开屏界面
 * 2. 结束界面
 * 3. 管理游戏生命周期
 */

export default class Scene extends UN.Entity {

  /**
   * 框架将在游戏启动后自动创建此对象
   * 因此在这里初始化游戏的一样事物
   */
  constructor() {
    super()
    let texture = UN.Texture.fromImage("./images/icon.png")
    let sprite = new UN.Sprite(texture)

    // 通过entity对象stage属性可获取当前stage
    sprite.position.set(this.stage.width/2, this.stage.height/2) 
    sprite.anchor.set(0.5)
    this.addChild(sprite)
    this.sprite = sprite
  }

  
  // 框架点击开始按钮时调用此方法
  start() {
    this.sprite.tween.to({ rotation: Math.PI*2 }, 1000).repeat(Infinity)
  }

}