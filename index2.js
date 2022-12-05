let y = 0
for(let x=-100;x<100;x=x+0.1){
    a = 2*x*x*x - 3 
    s = x*x+1
    d = Math.floor(a/s)
    console.log()
    if(d>9||d<11){
      console.log(d)
    }
}




let Y = 0
let s=[]
for(let x=-100;x<100;x=x+0.1){
    s.push(x*x - 3*x +15)
    
}
console.log(Math.min(...s))





let arr = []
let arrY = [0]
for(let x=-100;x<100;x=x+0.1){
    a = x*x -15
    s= Math.log(x*x+3*x-7)
    d = a / s
    console.log()
    if(y==0){
        arr.push(d)
    }
}
console.log(JSON.stringify(arr))