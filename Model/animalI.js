export default class Iguana{
  constructor(title, temper, color)
  {
    this.title = title
    this.temper = temper
    this.color = color
  }
  dance(party){
    console.log(`Iguanas like ${this.title} are fun and love ${party}'s!`)
  }
}
