// פונקציה אחת - הפונקציה המקורית שנרצה לעטוף
function isExist(arr,num) {
    for(let i =0; i < arr.length; i++){
    if (num === arr[i]){
        return true
    }
}
    return false;
}
  
  // כעת נקרא לפונקציה המעטפת ונעביר לה את השם
  const boolean = isExist([0,2,3,4,5],1);
  console.log(boolean); // ידפיס "Hello, שלום, אליס!"