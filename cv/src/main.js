let html = document.querySelector('#html')//通过css选择器找到这个元素
let string = `/*你好，我是一名前端新手
接下来我会添加样式
我添加的样式是div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
首先把div变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是
一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来再加两个小圆*/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0

let step = ()=>{
    setTimeout(()=>{
        if(string[n]=== "\n"){ //回车直接替换为H5回车
            string2 +='<br>';
        }else if(string[n] ===" "){ //空格替换为style空格
            string2 += "&nbsp;"
        }else {
            string2 += string[n];
        }
        // string2 += (string[n]==="\n" ? "<br>": string[n])
        // 上方if代码的简化
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,9999);//浏览器页面往下滚动
        html.scrollTo(0,9999);//手机页面往下滚动
       if(n<string.length-1){
            n+=1;
            step();
        }
    }, 0);
}

step();