window.onload=init;
function init(){
var button=document.getElementById("addButton");
button.onclick=handleButtonClick;
}
function handleButtonClick(){
    alert("Button was clicked!");
}
//建立一个处理器处理用户点击事件
