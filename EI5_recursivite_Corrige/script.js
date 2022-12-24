
// EXERCICE INDIVIDUEL
//     ETAPE 1

const tab = [1,2,3,4,5]

let sum =0
function sum1 (arr){
  for(let i=0; i<arr.length; i++){
    sum += tab[i]
  }
  return sum
} 
console.log(sum1(tab))

    // ETAPE 2
        //Solution 1 (Théo)
    
function sum2 (tab){
  if(tab.length==0){
    return 0
  } else {
    return tab[0] + sum2(tab.slice(1))
  }
}

console.log(sum2(tab))

        //Solution 2 (Amandine)

let tab = [20, 40, 60]

function sum2(tab, i) {
    if (i == tab.length) {
        return 0
    }
    else {
        return tab[i] + sum2(tab, i+1)
    }
}
console.log(sum2(tab, 0))

    // ETAPE 3

function factor (f) {
    let x = 1
    for(let i = 2; i<f+1; i++) {
        x *= i
    }
    return x
}
console.log(factor(4))

function factorRec(n){
    if(n==0){
        return 1
    } else {
        return n*factorRec(n-1)
    }
}
console.log(factorRec(5))

    // ETAPE 4

function fiboRec(n){
    if(n==0) return 0
    if(n==1) return 1
    return fiboRec(n-1) + fiboRec(n-2)
}
console.log(fiboRec(6))

function fibo(n){
    let tab = [0,1]
    for (let i=0; i<n-1; i++){
        tab.push(tab[i]+tab[i+1]) 
    } return tab
}
console.log(fibo(4))
     








