// a promise will ALWAYS either resolve or reject where as a callback may never get used

function asyncFunction(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if(Math.random()*100 < 50){
        resolve('Success!')
      }
      else {
        reject('Failed!')
      }
    }, Math.random() *3000)
  })
} 

console.log('starting');
asyncFunction()
// there are 2 methods that can be used that will be triggered at the end of the function .then() takes in another call back & is called on Success & passes the message for resolve >> the .catch() takes in another call back on reject & passes the message associated w that.
    .then(result=>{
      console.log('result');
    })
    .catch()
