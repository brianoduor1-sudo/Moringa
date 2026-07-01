function showCurrentTime() {
    const currentTime = new Date();
    Alert (`current time is ${currentTime}`);
}

setInterval(()=>{
    const currentTime = new Date();
    console.log(`current time is ${currentTime}`);
},30000)

