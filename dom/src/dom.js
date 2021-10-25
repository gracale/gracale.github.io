window.dom={
    create(tagName){
        return document.createElement(tagName);
    },
    find(selector,scope){
            return (scope||document).querySelectorAll(selector)
    },
    style(node,name,value){
        if(arguments.length===3){
            //dom.style(div,'color','red')
            node.style[name]=value
        }else if(arguments.length===2){
            if(typeof name === 'string'){
                //dom.style(div,'color')
                return node.style[name]
            }else if(name instanceof Object){
                //dom.style(div,{color:'red'})
                const object = name
                for(let key in object){
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(nodeList,fn){
            for(let i=0;i<nodeList.length;i++){
                fn.call(null,nodeList[i])
            }
    }

};

// const div = dom.find('#test>.red')[0] // 获取对应的元素
// dom.style(div, 'color', 'red') // 设置 div.style.color

// const divList = dom.find('.red') // 获取多个 div.red 元素
