export default class Hippo{
  constructor(name, weight)
  {
    this.name = name
    this.weight = weight
  }

  music(dance){

    console.log(`${this.name}'s favorite dance is ${dance}!!`);
  }
}