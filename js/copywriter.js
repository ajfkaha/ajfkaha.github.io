// canvas
function getRandomInt(max,min){
    return min+Math.floor(Math.random() * (max - min));
}
window.onload = function (argument) {
    let words = ["最后喜欢变成不甘 深爱变成了心酸。","你是我罚酒三杯都不会说出的秘密。","我还没来得及炫耀你，你就已经不是我的了。","一个拥抱能解决的问题 却被距离打败。","我也想问凭什么 可是这就是爱情啊。","原来你把浑身刺给了我，是为了温柔拥抱别人。","你把我的太阳和月亮都吃掉了。","让你变懂事的那几年一定很辛苦吧。","钟情与你 忠诚于你 忠心于你 终止于你。","对你岂止一句中意。","这个季节很干净，没有故事没有你。","你去做她的盖世英雄吧，我可是混世大魔王。","喜欢，脸红，心跳，不言语 失眠，焦虑，常梦呓，都是你。","你很好，我不配，忘了我吧，下一位。","回忆过去，痛苦的相思忘不了。","很庆幸遇到你，但，只是遇到你","或许换个时间 我们真的合适","那天自人海里一眼见你 现在把你好好还回人海里","喜欢，脸红，心跳，不言语 失眠，焦虑，常梦呓，都是你","我自以为是的爱情，从头到尾都不过是我一个人，自导自演。","不接谁的花 不陪谁长大","等候 也许并不容易 伤害 却垂手可患上","只要我正常发挥 没有一段恋情是我搞不砸的","从此热爱世界，无最爱 ，无例外。","我18年里唯一一次大胆主动即将谢幕","做回自己的星星，各自闪耀。","我的一生弥足珍贵，不可慷慨赠与不爱我之人。","你看 天上的云要散了呢","我去得了任何地方，却永远到不了你心里，就像你一直在我心里，却永远看不到我的悲伤。","我总不能耗尽一生 换你的有可能吧","我短暂的以为我终于不是一个人了","我曾亲手捧起的人，希望你永远不会堕落。","不过是列表又少了人罢了","没有安全感的人很爱听音乐 怕黑却喜欢晚睡","忘不掉的人像星星，只有在夜里才会显得特别。","我捉了条鱼我很开心，可是后来鱼跑了，手上的鱼腥味怎么洗都洗不掉。","果然，没人能代替易烊千玺","我不是在等你喜欢我，我是在等自己不喜欢你。","你没有舍不得，我也不好意思难过。","我们终于还是没有翻过那座山，他们也没能听到我们的故事。","花都枯萎了，你才想起来浇水，有点多余了。","故事都快跟朋友讲烂了 最后却还是意难平","终于我养成了熬夜的习惯，再也没有谁非要去说晚安","过了这个红绿灯路口我要拐弯了"]
    let allwords = []
    // const containertwo = document.querySelector('.container-two')
    let canvas = document.querySelector("#myCanvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let ctx = canvas.getContext('2d')
    let canvasW = canvas.width
    let canvasH = canvas.height
    ctx.fillStyle = '#fff'
    function Word(key){
        this.text = key
        this.x = Math.random() * canvasW
        this.y = Math.random() * canvasH
        this.font = getRandomInt(12,18) + 'px arial'
        this.speed = getRandomInt(1,6) - Math.random()
    }
    for(let i = 0; i<words.length;i++){
        allwords.push(new Word(words[i]))
    }
   function update(){
    for (let i=0; i< allwords.length; i++){
        ctx.font = allwords[i].font
        ctx.fillText(allwords[i].text,allwords[i].x,allwords[i].y)
        allwords[i].width = ctx.measureText(allwords[i].text).width
        if(allwords[i].x > canvasW){
            allwords[i].x = -allwords[i].width
            allwords[i].y = Math.random() * canvasH
        }
        else{
            allwords[i].x += allwords[i].speed
        }
    }
   }
   function draw(){
    ctx.clearRect(0,0,canvasW,canvasH)
    update()
    window.requestAnimationFrame(draw)
   }
   draw()
}
// 一禅视频
let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});
// 云雨
function randomText(){
    const text = ["悲戚","忧愁","心碎","悲叹","再见","离别","分开"]
    const letter = text[Math.floor(Math.random() * text.length)]
    return letter
}
function rain(){
    const cloud = document.querySelector('.cloud-left')
    const e = document.createElement('div')
    e.classList.add('drop')
    cloud.appendChild(e)
    const left = Math.floor(Math.random()*290)
    const size = Math.random()*1.5
    const duration = Math.random *1
    e.innerText = randomText()
    e.style.left = left + 'px'
    e.style.fontSize = 0.5+size+'em'
    e.style.animationDuration = 1+duration+'s'
    setTimeout(()=>{
        cloud.removeChild(e);
    },2000)
}
setInterval(()=>{
    rain()
},20)
//文案分类
// 获取所有.item元素
const contents=document.querySelectorAll('.forthpart .content');
// 设置选中态样式
function setActive(e){
    // console.log(e.target.dataset.id);
    const i = +e.target.dataset.id
    // 遍历所有.item元素，移出active样式
    contents.forEach((item)=>{
        // console.log(item);
        item.classList.remove('expend');
    })
    // 为当前选中项添加active样式
    contents[i].classList.add('expend');
}
// 遍历所有.cover元素，分别为其设置点击事件
const expendBoxs = document.querySelectorAll('.expend-box')
expendBoxs.forEach((item)=>{
    item.addEventListener('click',setActive);
    
})