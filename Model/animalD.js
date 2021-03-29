export default class Dog{
  constructor(name, firLength, size)
  {
    this.name = name
    this.firLength = firLength
    this.size = size
  }
  // NOTE Methods are always declared inside of the class
  speak(sound){
    console.log(`Hi! My name is ${this.constructor.name} and I like to ${sound}`)
  }
}