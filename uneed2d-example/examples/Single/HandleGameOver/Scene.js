export default class Scene extends UN.Entity {

  
  constructor() {
    super()

    this.tips = new UN.Text('5 seconds to finish game', { fill: 0xFFFFFF, fontSize: 80 })
    this.tips.position.set(this.stage.width/2, this.stage.height/2)
    this.tips.anchor.set(0.5)
    this.addChild(this.tips)
  }

  async start() {

    // 重置状态
    this.reset()

    // wait five seconds
    for(let i=0; i<5; i++) {
      await this.scheduler.wait(1000)
      this.tips.text = `${5-i-1} seconds to finish game`
    }

    this.score = this.getMyScore()

    // handle game over
    UN.game.finishSingleGame({
      scoreTitle: 'Your score title',
      score: this.score,
      scoreText: this.score, // 或者不填则显示"10", 或者填带单位的分数，比如：10分，10个
      highScoreTitle: "最高分", // 根据需求设置其他最高分标题，比如：最高纪录
      highScoreUnit: '' // 最高分单位
    })
  }

  // 值得注意的是：
  //   总是要在重新开始游戏时保证游戏归为初始状态
  //   否则有可能影响第二局游戏
  reset() {
    this.score = 0
  }

  getMyScore() {
    return ~~(Math.random() * 100)
  }

}