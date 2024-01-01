// const { log } = require("console")

var swiper = new Swiper(".mySwiper", {
    // autoplay:true,
    speed:2500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
        loop: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    // speed:3000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true,
      },
      loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
// 轮播图
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section')
    const edge = 72 //边数

    /**
     * 动态生成图片
     * @param {元素} el 
     * @param {起始位置} start 
     * @param {结束位置} end 
     */
    const swiper = (el, start, end) => {
        let index = start

        for (let i = 0; i < edge; i++) {
            // console.log(index);
            let div = document.createElement('div')
            div.style.transform = `rotateX(${(360 / edge) * i}deg) translateZ(3430px)`
            div.style.background = `url(../img/story/${[index]}.png) no-repeat`
            div.style.backgroundSize = 'cover'
            el.appendChild(div)

            index++

            if (index === end) {
                index = start
            }
        }

    }

    let start = 1 //第一张图片下标
    let end = 4 //第一组图片最后一张图片下标
    for (let j = 0; j < sections.length; j++) {
        swiper(sections[j], start, end)
        start = start + 3 //一组图片3张
        end = end + 3
    }


})

// 瀑布流
window.onload = function(){
    fwaterFull()
    // window.onscroll = function(){
    //     if(fScrollTop()){
    //     const puContainer = document.querySelector('#pu-container')
    //     const oItem = document.createElement('div')
    //     oItem.className = 'pu-container-item'
    //     const oPic = document.createElement('div')
    //     oPic.className = 'pic'
    //     const oImg = document.createElement('img')
    //     oImg.src = 'img/story/3.png'
    //     puContainer.appendChild(oItem)
    //     oItem.appendChild(oPic)
    //     oPic.appendChild(oImg)
    //     fwaterFull()
    //     }
    // }
}
function fwaterFull(){
    const puContainer = document.querySelector('#pu-container')
    const clientWidth = document.documentElement.clientWidth
    const oItem = document.querySelectorAll('.pu-container-item')
    const itemWidth = oItem[0].offsetWidth
    const num = Math.floor(clientWidth / itemWidth)
    // console.log(num);
    puContainer.style.width = num*itemWidth + 'px'
    const hrr = []
    for(let i=0; i<oItem.length;i++){
        if(i < num){
            hrr.push(oItem[i].offsetHeight)
        }else{
            //得到高度最小值
            const minheight = Math.min(...hrr)
            //得到最小值索引
            const index = fInArray(minheight,hrr)
            console.log(index);

            oItem[i].style.position = 'absolute'
            oItem[i].style.left = index*itemWidth + 'px'
            oItem[i].style.top = minheight +'px'
            //得到盒子的最小值
            hrr[index] += oItem[i].offsetHeight;
        }
    }
}
function fInArray(min,hrr){
    for(let i=0;i<hrr.length;i++){
        if(hrr[i]==min){
            return i;
        }
    }
}


function fScrollTop(){
    const item = document.querySelectorAll('.pu-container-item')
    //最后一个item
    const lastitem = item[item.length-1]
    //可视化区域的高
    const clientHeight = document.documentElement.clientHeight
    //滚动的距离
    const scrolltop = document.documentElement.scrollTop
    if( lastitem.offsetHeight < clientHeight + scrolltop ){
        return true
    }else{
        return false
    }

}
// 图片放大
const containerThree = document.querySelector('.container-three')
var modal = document.querySelector('#modal');
var bgImg = document.querySelector('#bgImg');
const puContainer = document.querySelector('.pu-container')
puContainer.addEventListener('click',function(e){
console.log(e);
if(e.target.nodeName === 'IMG'){
    console.log('我选的是img')
    // showBgImg(e)
    modal.style.display = 'block';
    bgImg.src = e.target.currentSrc;
    containerThree.backgroundColor = '#fff'
}
})
    function showBgImg(e) {
        modal.style.display = 'block';
        bgImg.src = e.currentSrc;
    }
    bgImg.onclick = function() {
        modal.style.display = 'none';
    }