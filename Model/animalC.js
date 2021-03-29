export default class Cat{
  constructor(name, type, color,
  temperment)
  {
  this.name = name
  this.type = type
  this.color = color
  this.temperment = temperment
  }
  play(toy){
    console.log(`Meeaaooowww! I like my ${toy}!`)
  }
}