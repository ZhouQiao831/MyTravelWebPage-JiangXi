
    //使用排他思想
    //获取导航栏按钮
    let lis = document.querySelectorAll('li')
    //获取三个要切换的盒子
    let page01 = document.getElementById('page01')
    let page02 = document.getElementById('page02')
    let page03 = document.getElementById('page03')
    let page04 = document.getElementById('page04')
    let page05 = document.getElementById('page05')
    //点击导航栏，改变Iframe的src属性，实现页面切换
    for (let i = 0; i < lis.length; i++) {
        //绑定点击事件
        lis[i].onclick = function(event){
            if(event.target.classList.contains('first')){
                changPage()
                page01.style.display = 'block'
            }else if(event.target.classList.contains('second')){
                changPage()
                page02.style.display = 'block'
            }else if(event.target.classList.contains('three')){
                changPage()
                page03.style.display = 'block'
            }else if(event.target.classList.contains('fourth')){
                changPage()
                page04.style.display = 'block'
            }else{
                changPage()
                page05.style.display = 'block'
            }
        }
        
    }
    //封装一个排他思想的函数
    function changPage(){
        //获取所有page
        document.querySelectorAll('.page').forEach(el=>{
            el.style.display = 'none'
        })
    }
