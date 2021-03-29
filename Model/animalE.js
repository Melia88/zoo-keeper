class Elephant{
  constructor(
    name = '',
    location = '',
    size = '',
    tusks = false,
    // NOTE tusks = false is a boolean value. It means if I leave that space blank they have no tusks ortherwise I have to write true in the string
  )
  {
    this.name = name
    this.location = location
    this.size = size
    this.tusks = tusks
  }
  swim(water){
    console.log(`${this.name} really loves the ${water} in ${this.location}.`)
  }
}

export default Elephant
// NOTE export default can be used here like this or firght infront of the class at the top
  
  
