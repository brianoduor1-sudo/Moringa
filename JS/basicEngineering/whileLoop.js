let n = 0;
let condition = true;
// condition=> falsely: we automatically exit the loop
while(condition) {
    console.log("n is", n);
    n = n + 1
    if(n>100){
        condition = false;
    }
}
    
