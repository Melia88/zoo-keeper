class Bear{
  constructor(
    name = '' ,
    age = '',
    gender = '',
    color = '',
  ){
    this.name = name
    this.age = age
    this.gender = gender
    this.color = color
  }
  // NOTE eat & speak(those can be called whatever I want) are called a method and is used just like a function
  eat(food){
    console.log(`Nom nom nom all the ${food}ies.`)
  }
  speak(noise){
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

export default Bear;


