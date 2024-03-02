const container = document.querySelector('.container')


container.innerHTML = `
    <div class="card">
      <h2 id="count">0</h2>
      <div>
        <button id="inc" type="button">Increment</button>
        <button id="reset" type="button">Reset</button>
        <button id="dec" type="button">Decrement</button>
      </div>
    </div>
`

let count = 0;
const inc = document.getElementById('inc')
  dec = document.getElementById('dec')
  countInfo = document.getElementById('count')
  reset = document.getElementById('reset')


  inc.addEventListener('click', () => {
    if(count < 1000){
      count  += 1
      countInfo.textContent = count
    }
  })

  dec.addEventListener('click', () => {
    if(count > 0){
      count -= 1
      countInfo.textContent = count
    }
  })

  reset.addEventListener('click', () => {
    count = 0
    countInfo.textContent = count
  })

  // masalalar yechish

// decloration function
// function calculate1(a, b, c){
//   return a + b - c
// }
// console.log(calculate1(15, 7, 4))

// expression function
// const calculate2 = function(a, b, c) {
//   return a + b - c
// }

// console.log(calculate2(15, 7, 4))

// // arrow function
// const calculate3 = (a, b, c) => {
//   return a + b - c
// }

// console.log(calculate3(15, 7, 4))


      // uy ishi

      // decloration function

      function calculate1(a, b){
        return a + b
      }
      console.log(calculate1(3, 4)) 

      function calculate2(a, b){
        return a - b
      }
      console.log(calculate2(8, 2)) 

      function calculate3(a, b){
        return a * b
      }
      console.log(calculate3(5, 6)) 

      function calculate4(a, b){
        return a / b
      }
      console.log(calculate4(12, 3)) 

      function calculate5(a, b, c){
        return a + b - c
      }
      console.log(calculate5(15, 7, 4))

      function calculate6(a, b){
        return a * b
      }
      console.log(calculate6(9, 2)) 

      function calculate7(a, b){
        return a / b
      }
      console.log(calculate7(20, 4)) 

      function calculate8(a, b){
        return a - b
      }
      console.log(calculate8(25, 13)) 

      function calculate9(a, b, c){
        return a * b + c
      }
      console.log(calculate9(2, 3, 4))

      function calculate10(a, b, c){
        return a / b + c
      }
      console.log(calculate10(10, 2, 5))




            // expression function




             const calculate11 = function(a, b) {
             return a + b 
           }
          console.log(calculate11(3, 4))

          const calculate12 = function(a, b) {
            return a - b 
          }
         console.log(calculate12(8, 2))

         const calculate13 = function(a, b) {
          return a * b 
        }
       console.log(calculate13(5, 6))

       const calculate14 = function(a, b) {
        return a / b 
      }
     console.log(calculate14(12, 3))

     const calculate15 = function(a, b,c) {
      return a + b - c
    }
   console.log(calculate15(15,7 ,4))

   const calculate16 = function(a, b) {
    return a * b 
  }
 console.log(calculate16(9, 2))

 const calculate17 = function(a, b) {
  return a / b 
}
console.log(calculate17(20, 4))

const calculate18 = function(a, b) {
  return a - b 
}
console.log(calculate18(25, 13))

const calculate19 = function(a, b,c) {
  return a * b + c
}
console.log(calculate19(2,3,4))

const calculate20 = function(a, b,c) {
  return a / b + c
}
console.log(calculate20(10,2,5))


               // arrow function


const calculate21 = (a, b) => {
   return a + b 
 }
 console.log(calculate21(3,4))

 const calculate22 = (a, b) => {
  return a - b 
}
console.log(calculate22(8,2))

const calculate23 = (a, b) => {
  return a * b 
}
console.log(calculate23(5,6))

const calculate24 = (a, b) => {
  return a / b 
}
console.log(calculate24(12,3))

const calculate25 = (a, b,c) => {
  return a + b - 4
}
console.log(calculate25(15,7,4))

const calculate26 = (a, b) => {
  return a * b 
}
console.log(calculate26(9,2))

const calculate27 = (a, b) => {
  return a / b 
}
console.log(calculate27(20,4))

const calculate28 = (a, b) => {
  return a - b 
}
console.log(calculate28(25,13))

const calculate29 = (a, b,c) => {
  return a * b + c
}
console.log(calculate29(2,3,4))

const calculate30 = (a, b,c) => {
  return a / b + c
}
console.log(calculate30(10,2,5))


          


      