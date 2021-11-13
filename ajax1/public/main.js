let n =1;
getPAGE.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('get',`/page${n+1}`);
    request.onreadystatechange=()=>{
        if(request.readyState ===4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent = item.id
                turn.appendChild(li);
            })
            n+=1
        }
    }
    request.send()
}

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)

            //把符合JSON语法的字符串变成对应的对象
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send();
}

getXML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        // 创建div标签
        console.log(request.response)
        // 填写div内容
        const div = document.createElement('div')
        // 插入到body后面
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => { }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log(request.response)

        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => { }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功的2xx 还是失败的4xx 5xx
        if (request.readyState === 4) {
            if(request.status >= 200 && request.status < 300){
            //创建style标签
            const style = document.createElement('style')
            //填写style内容
            style.innerHTML = request.response
            //插入head后面
            document.head.appendChild(style)
            }else{
                alert('加载css失败')
            }
        }
    }
    request.onerror = () => {
        console.log('失败')
    }
    request.send();
};
