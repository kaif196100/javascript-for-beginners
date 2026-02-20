let x = Math.floor(Math.random() * 10) + 1; // 1 to 10
          // random Number
 console.log(x);



let y = Math.floor(Math.random() * (20 - 30) + 15 );

  console.log(y);


function getRandom(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1) + min );
    return x;
   
}

console.log(getRandom(20, 25));
