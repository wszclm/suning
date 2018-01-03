{
    let imgs=document.querySelectorAll('.nav3-tu li');
    let boxs=document.querySelectorAll('.banner-box li');
    let father=document.querySelector('.nav3');
    let prev=document.querySelector('.banner-left');
    let next=document.querySelector('.banner-right');

    boxs.forEach(function (value, index) {
        value.onclick=function () {
            for (let i=0;i<boxs.length;i++){
                boxs[i].classList.remove('active');
                imgs[i].classList.remove('active');
            }
            boxs[index].classList.add('active');
            imgs[index].classList.add('active');
            n=index;
        }
    })
    let n=0;
    function banner(dir="r") {
        if (dir==="r") {
            n++;
        }else if (dir==="l"){
            n--;
        }
        if (n===boxs.length){
            n=0;
        }
        if (n===-1){
            n=imgs.length-1;
        }
         for (let i=0;i<boxs.length;i++){
            boxs[i].classList.remove('active');
            imgs[i].classList.remove('active');
        }
        boxs[n].classList.add('active');
        imgs[n].classList.add('active');
    }

    let t1=setInterval(banner,2000);
    father.onmouseover = function () {
        clearTimeout(t1)
    }
    father.onmouseout = function () {
        t1 = setInterval(banner, 2000);
    }
    next.onclick=function () {
        banner();
    }
    prev.onclick=function () {
        banner('l');
    }
    let flag=true;
    next.onclick=function () {
        if(flag){
            flag=false;
            banner();
        }
    }
    prev.onclick=function () {
        if(flag) {
            flag=false;
            banner("l");
        }
    }
    imgs.forEach(function (ele,index) {
        ele.addEventListener("transitionend",
            function(){
                flag=true;
            })
    })
}

{
    let aside=document.querySelector('aside');
    let btns=document.querySelectorAll('aside ul li');
    let floors=document.querySelectorAll('.noz');
    let Top=document.querySelector('.topdar')
    window.onscroll=function () {
        if (document.documentElement.scrollTop>800){
            Top.style.display="block";
        }else {
            Top.style.display="none";
        }
        if (document.documentElement.scrollTop>2200){
            aside.style.display="block";
        }else {
            aside.style.display="none";
        }
        floors.forEach(function (value, index) {
            if (document.documentElement.scrollTop>value.offsetTop-100){
                for (let i=0;i<btns.length;i++){
                    btns[i].classList.remove('active');
                }
                btns[index].classList.add("active")
            }
        })
    }


    btns.forEach(function (value, index) {
        value.onclick=function () {
            let ot=floors[index].offsetTop-60;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)*30/300;
            let time=0;
            let t=setInterval(function () {
                now+=speed;
                document.documentElement.scrollTop=now;
                time+=30;
                if (time===300){
                    clearInterval(t);
                    now=ot;
                }
            },30)
        }
    })

    let totop=document.querySelector('#as1');
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let speed=st*30/500;
        let t=setInterval(function () {
            st-=speed;
            if (st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }
}