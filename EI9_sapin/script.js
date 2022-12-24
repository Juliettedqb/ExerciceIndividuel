// ETAPE 1

// let N = 2

// function sapin(n) {
//     if(n!=0){
//         document.getElementById("sapin").innerHTML+="/"+"*".repeat((N-n)*2+1)+"\u005C"+"</br>";
//         sapin(n-1);
//     } else {
//         document.getElementById("sapin").innerHTML+="/"+"*".repeat((N-n)*2+1)+"\u005C"+"</br>";
//     }
// }

// sapin(N)

// ETAPE 2 

let N = 7

function sapin(n) {
  if (n != 0) {
    document.getElementById("sapin").innerHTML += "/" + "*".repeat((N - n) * 2 + 1) + "\u005C" + "</br>";
    if (n % 2 == 0 && n < N - 1) {
      document.getElementById("sapin").innerHTML += "/" + "*".repeat((N - n) * 2 + 1) + "\u005C" + "</br>";
    }
    sapin(n - 1);
  } else {
    document.getElementById("sapin").innerHTML += "/" + "*".repeat((N - n) * 2 + 1) + "\u005C" + "</br>";
  }
}

sapin(N);




