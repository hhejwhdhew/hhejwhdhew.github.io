const body = document.getElementsByTagName("body")[0];
//这是一行JavaScript DOM方法，为后续改变body的颜色作准备
//body是我们需要获取的元素
//[0]代表返回的是所有body元素里的第一个body元素（即便一般情况下也只会有一个）

function setColor(name){
    body.style.backgroundColor = name;
}
//这个function的作用是控制浏览器的背景颜色

function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const color = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = color;
}   

//感觉这个project的巧思就是在使用了Template String`rgb(${red},${green},${blue})`
//以及Interpolation ${} 插值
//还有就是这个random生产的数字去组成RGB颜色