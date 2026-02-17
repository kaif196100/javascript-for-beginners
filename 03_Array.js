
    // array ko string me badhlne ka formula

let book = ["Math", "Physics", "Bio" , "computer science"];

let wordarray = book.join('  ');


  console.log(wordarray);  



// String ko array me bddhlane ka formula

let text = "This is a random text";   //String

let wordarray = text.split(' ');

 console.log( Array.isArray(wordarray))
 console.log(wordarray )



 // element ko hatane ka formula

let book = ["Math", "Physics", "Bio" , "computer science"];

book.splice(2,2);  

console.log(book);

