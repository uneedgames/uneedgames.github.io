let text = new UN.Text("This is text!")
text.position.set(40, 100)
stage.addChild(text)

let styledText = new UN.Text("This is styled text", {
  fontSize: 30,
  fill: 0xFFFFFF,
})
styledText.position.set(40, 200)
stage.addChild(styledText)

let strokedText = new UN.Text("This is stroked text!", {
  fontSize: 30,
  fill: 0xFFFFFF,
  stroke: 0x555555,
  strokeThickness: 8
})
strokedText.position.set(40, 300)
stage.addChild(strokedText)

let fontFamily = new UN.Text("This is text with specified font family!", {
  fontSize: 30,
  fill: 0xFFFFFF,
  fontFamily: "Fira Code" // you have to installe this font
})
fontFamily.position.set(40, 400)
stage.addChild(fontFamily)

let coolText = new UN.Text([
  'This is cool text!!! Yeah, with multilines and drop shadow',
  'Really awesome. ',
  'And do i tell you this text is filled with gradient style'].join('')
, 
{
  fontFamily: 'Arial',
  fontSize: 36,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#4a1850',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440
})
coolText.position.set(40, 500)
stage.addChild(coolText)