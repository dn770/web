function setIndexofChar(str,char){
    for(let i = 0; i< str.length;i++){
        if (str[i] === char)
            return i;
    }
    return -1;
}

//console.log(setIndexofChar('wekgd','g'))
//console.log(setIndexofChar('wekgd','v'))
//console.log(setIndexofChar('wekgd','d'))

function avg(arr){
    let avg = 0
    for(let i = 0; i< arr.length;i++){
        avg += arr[i]
    }
    return(avg/arr.length)
}


//console.log(avg([1,2,3,4,5]))
//console.log(avg([2,3,4,0]))
//console.log(avg([3,-3]))

function leftPad(str,char,pad){
    let newStr = ""
    for(let i = 0; i< pad - str.length;i++){
        newStr += char
    }
    newStr += str
    return(newStr)
    }

//console.log(leftPad("ba",'o', 4))
//console.log(leftPad("bCa",'I', 9))

function sumOfDigits(num){
    let str = String(num)
    let sum = 0
    for(let i = 0; i< str.length;i++){        
        sum += parseInt(str[i]) 
    }
    return sum
}
//console.log(sumOfDigits(4))
//console.log(sumOfDigits(123))
//console.log(sumOfDigits(77))
//console.log(sumOfDigits(54))

function arrToMatrix(arr, rows){
    let mat = []
    let c = -1
    for(let i = 0; i< arr.length;i++){
        if (i % rows === 0){
            c ++
            mat.push([])
        }
       mat[c].push(arr[i] )       
}    
 return mat
}

//console.log(matrix= arrToMatrix([1,2,3,4,5,6],2))

//matrix.forEach((row,index) =>{
//    console.log(row)
//})


function createMat(rows,cols){
    let mat = []
    for(let i = 0; i< rows;i++){
        mat.push([])
        for(let j = 0; j< cols;j++){
            mat[i].push(0)
        }
    }
    return mat
}

//console.log(createMat(3,3))
//console.log(createMat(2,3))
//console.log(createMat(7,1))

function getIndexOfStr(strSource, strFind){
    for(let i = 0; i < strSource.length - strFind.length;i++){
        let flag = true
        for(let j = 0; j < strFind.length;j++){
            if (strSource[i+j] !== strFind[j]){
                flag = false
                break;
            }
        }
        if (flag){
            return i
        }
    }
        return -1
}

//console.log(getIndexOfStr("hello","ll"))

function find2NumSum (arr,sum){
    for(let i = 0; i < arr.length;i++){
        for(let j = 0; j < arr.length;j++){
            if( i !== j && arr[i] + arr[j] === sum){
                return [arr[i],arr[j]]
            }
        }
    }
}

///console.log(find2NumSum([1,2,3,4,5,6], 9))

function removeStr(str, strToRemove){
    newStr = ""
    for(let i = 0; i < str.length;i++){
        let flag = true
        for(let j = 0; j < strToRemove.length;j++){
            if (str[i+j] !== strToRemove[j]){
                flag = false
                break;
            }
        }
        if (!flag){
            newStr += str[i]
        }
        else
        i += strToRemove.length - 1
    }
        return newStr
}

//console.log(removeStr("hello","ll"))
//console.log(removeStr("world","o"))
//console.log(removeStr("hello world","o w"))

function matToArray(mat){
    let arr = []
    for(let i = 0; i < mat.length;i++){
        for(let j = 0; j < mat[i].length;j++){
                arr.push(mat[i][j])
        }
    }
    return arr
}

//console.log(matToArray([[1,2,3],[4,5,6],[7,7,7]]))

function diamond(count){
    len = count * 2
    for(let i = 1; i < len ;i++){
        let row =""
        for(let j = 1; j < len ;j++){
            if ((Math.abs(count - i) < j) && (Math.abs(count -i) < len - j)){
                row += "*"
            }
            else {
                row += "-"
            }
        }
        console.log(row)
    }
}

diamond(5)