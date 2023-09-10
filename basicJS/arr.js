function addToArr() {
    const arr= [];
    
    // הוסף את איברי המערך הראשון
    for (let i = 0; i < 5; i++) {
        let num = prompt("please insert number");
        arr.push(num);
    }
    return(arr);
  
}

  const arr = addToArr();
  console.log(arr); // ידפיס: [1, 2, 3, 'a', 'b', 'c']
  