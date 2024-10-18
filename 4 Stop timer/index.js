let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value){
    return String(value).padStart(2, "0");
}
//这个函数的主要作用是将字符占满
//.padStart(StringLength,string)


function setTime(){
    const minutes = Math.floor(secondsElapsed/60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}
//minutes和seconds都是数字所以是value，在padStart函数中被转化为字符
//padStart的规则就是如果没有指定字符就，自动填充一定数量的字符，而且从左开始
//这样我们就能把更新显示的数字反映在网页上

function timer(){
    secondsElapsed++;
    setTime();
}
//为什么能接着之前的值运行呢，因为setInterval本质上只是一个控制timer函数运行频率的函数
//实际负责记录储存值的是secondsElapsed

function startClock(){
    if (interval) stopClock();
    interval  = setInterval(timer, 1000)
}
//检查是否有在运行的interval，如果有就停止然后再运行timer这个函数
//这样就不会导致同时有多个setInterval在运行

function stopClock(){
    clearInterval(interval);
}
//clearInterval这个函数的作用就是停止已经开始运行的interval
//以及interval是setInterval的ID

function resetClock(){
    stopClock();
    secondsElapsed = 0;
    setTime();
}
//reset function先是停止了interval的运行
//然后重置了secondsElapsed的值
//又更新了time这个html元素内部显示的状态