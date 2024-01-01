const comments = [
    {
        name: "Danny",
        comment:
            "在这里看到其他人的故事，我感到自己并不孤单。失恋是一种普遍的经历，而这里的展览让我明白到，即使在痛苦中，我们也可以共同成长和寻找希望。",
        time: "2023-11-26 11:56:01",
    },
    {
        name: "Jackson",
        comment: "我从这些捐赠物品中学到，失恋并不代表失败，而是一个机会去重新认识自己并寻找真正的幸福。这个博物馆让我意识到，爱情的终结并不意味着生活的终结，我们有能力在失去中重建自己的快乐。",
        time: "2023-11-26 11:56:01",
    },
    {
        name: "Jackson",
        comment: "在这个博物馆里，我看到了失恋的各种形式和程度，我意识到每个人都有自己独特的故事。这个经历让我更加关心和尊重他人的情感，因为我们不知道背后隐藏的痛苦和挣扎。",
        time: "2023-11-26 11:56:01",
    },
    {
        name: "Jackson",
        comment: "我参观失恋博物馆后明白了爱情是一种冒险，它不仅仅是关于美好的时刻，还有风险和不确定性。我学会了更加珍惜每一个与爱人相处的时刻，因为我们永远不知道未来会带来什么。",
        time: "2023-11-26 11:56:01",
    },
    {
        name: "Jackson",
        comment: "在失恋博物馆里，我看到了那些敢于放下过去并追求新生活的人们。他们的故事激励着我去勇敢面对自己的失恋，放下过去的包袱，并相信自己有能力去迎接新的爱情和幸福。",
        time: "2023-11-26 11:56:01",
    },
    {
        name: "Jackson",
        comment: "失恋博物馆教会了我接受失去，并在其中找到力量。通过看到他人的故事和回忆，我明白了失恋并不是终结，而是重新开始的起点。我深深感受到人们在失去中寻找希望和重生的力量，这也激励着我继续前行。",
        time: "2023-11-26 11:56:01",
    },
    {
        name: "Jackson",
        comment: "参观失恋博物馆后，我对自己的情感经历有了更深入的理解。我看到了爱情的脆弱性和复杂性，以及人们在其中所经历的痛苦和成长。这个经历让我更加珍惜每一次爱的机会，并以更开放的心态去迎接未来的关系。",
        time: "2023-11-26 11:56:01",
    },
    {
        name: "Jackson",
        comment: "在失恋博物馆遇到了一个同样经历过失恋的人，我们开始分享彼此的故事和情感。我们逐渐建立了深厚的情感连接，最终发展成为一段美好的新恋情。我们互相理解并支持彼此，这里成为我们的相遇的奇妙起点。",
        time: "2023-11-26 11:56:01",
    },
    {
        name: "Jackson",
        comment: "参观失恋博物馆时，我与一个志同道合的人产生了共鸣。我们在对某些展品的讨论中发现了共同的兴趣和价值观，逐渐增进了彼此的了解。这个博物馆成为我们的第一次约会的地方，并且我们的关系不断发展，如今已经走到了一起。",
        time: "2023-11-26 11:56:01",
    },
    
];
const commentsBox = document.querySelector('#comments');
let nameInput = document.querySelector('#name');
let commentInput = document.querySelector('#comment');
const btnSubmit = document.querySelector("#btn-submit");
const btnClose =document.querySelector(".btn-close");
const rennderComments=function(comments){
    commentsBox.innerHTML=""
    comments.forEach((item) => {
        commentsBox.insertAdjacentHTML(
            'beforeend',
            `<hr>
            <h4>
                <span>${item.name}</span>
                <span class="date">${item.time}</span>
            </h4>
            <p>${item.comment}</p>
            `
        )
    }
    )
}

rennderComments(comments);
const nowDate = new Date();



btnSubmit.onclick = function () {
    let nameStr = nameInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
    let commentStr = commentInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
    const date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
        hours: nowDate.getHours(),
        minutes: nowDate.getMinutes(),
        seconds: nowDate.getSeconds(),
      };
      
      const newmonth = date.month > 10 ? date.month : "0" + date.month;
      const newday = date.date > 10 ? date.date : "0" + date.date;
      const newminutes = date.minutes > 10 ? date.minutes : "0" + date.minutes;
      const newseconds = date.seconds > 10 ? date.seconds : "0" + date.seconds;
      const dateTime =
        date.year +
        "-" + newmonth +
        "-" + newday +
        " " +  date.hours + ":" +
        newminutes +
        ":" + newseconds;
      
    comments.unshift(
        {
            name:nameStr,
            comment:commentStr,
            time:dateTime,
        }
    );
    rennderComments(comments);
}

let isClosed = false;
btnClose.onclick = function(){
    if(!isClosed){
        btnClose.textContent="开启留言";
    }else{
        btnClose.textContent="关闭留言";
    }
    nameInput.disabled=!nameInput.disabled;
    commentInput.disabled=!commentInput.disabled;
    btnSubmit.disabled=!btnSubmit.disabled;
    isClosed=!isClosed;
}


 // 自动为下一年
        // const span1 = document.querySelector('.span1')
        //     const span2 = document.querySelector('.span2')
        //     const span3 = document.querySelector('.span3')
        const span4 = document.querySelector('.span4')
        const span5 = document.querySelector('.span5')
        const span6 = document.querySelector('.span6')
        // const text1 = document.querySelector('.text1')
        // const text2 = document.querySelector('.text2')
        // const text3 = document.querySelector('.text3')
        const text4 = document.querySelector('.text4')
        const text5 = document.querySelector('.text5')
        const text6 = document.querySelector('.text6')
        console.log(span5.innerText);
    function showTime() {
      var Y = new Date().getFullYear() + 1
      var newDay = Y + '/1/1 00:00:00'
      var countDate = new Date();
    //   var last = new Date(span1.innerText,span2.innerText,span2.innerText,text1.innerText,text2.innerText,text3.innerText).getTime()
      var now = new Date(span4.innerText,span5.innerText,span6.innerText,text4.innerText,text5.innerText,text6.innerText).getTime()
      gap = (countDate - now)/1000;
      var d = Math.floor(gap /(60*60*24))
      var h = Math.floor(gap/60/60%24)
      var m =Math.floor(gap/60%60)

      var s = Math.round(gap%60)
      // 倒计时
      document.getElementById('day').innerText = d
      document.getElementById('hour').innerText = h
      document.getElementById('minute').innerText = m
      document.getElementById('second').innerText = s
    }

    // 数字小于10前面就加0
    function addZero(num) {
      return num < 10 ? '0' + num : num
    }
    showTime()
    setInterval(() => {
        showTime()
    }, 1000)


    const tx = document.querySelector('#tx')
const total = document.querySelector('.total')
const item = document.querySelector('.item')
const text = document.querySelector('.text')
// 1. 当我们文本域获得了焦点，就让 total 显示出来
tx.addEventListener('focus', function () {
  total.style.opacity = 1
})
// 2. 当我们文本域失去了焦点，就让 total 隐藏出来
tx.addEventListener('blur', function () {
  total.style.opacity = 0
})
// 3. 检测用户输入
tx.addEventListener('input', function () {
  // console.log(tx.value.length)  得到输入的长度
  total.innerHTML = `${tx.value.length}/200字`
})

// 4. 按下回车发布评论
tx.addEventListener('keyup', function (e) {
  // 只有按下的是回车键，才会触发
  // console.log(e.key)
  if (e.key === 'Enter') {
    // 如果用户输入的不为空就显示和打印
    if (tx.value.trim()) {
      // console.log(11)
      item.style.display = 'block'
      // console.log(tx.value)  // 用户输入的内容
      text.innerHTML = tx.value

    }
    // 等我们按下回车，结束，清空文本域
    tx.value = ''
    // 按下回车之后，就要把 字符统计 复原
    total.innerHTML = '0/200字'
  }

})