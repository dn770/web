function mergeArrays(array1, array2) {
    const mergedArray = [];
    
    // הוסף את איברי המערך הראשון
    for (let i = 0; i < array1.length; i++) {
      mergedArray.push(array1[i]);
    }
    
    // הוסף את איברי המערך השני
    for (let i = 0; i < array2.length; i++) {
      mergedArray.push(array2[i]);
    }
  
    return mergedArray;
  }
  
  // דוגמה לשימוש:
  const arr1 = [1, 2, 3];
  const arr2 = ['a', 'b', 'c'];
  const merged = mergeArrays(arr1, arr2);
  console.log(merged); // ידפיס: [1, 2, 3, 'a', 'b', 'c']
  