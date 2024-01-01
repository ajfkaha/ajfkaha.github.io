    // 采取事件委托的形式 tab栏切换
    // 1. 获取 ul 父元素 因为 ul只有一个
    const ul = document.querySelector('.container-tab .tab-nav ul')
    // 获取 5个 item 
    const containers = document.querySelectorAll('.container-boss .container')
    // 2. 添加事件
    ul.addEventListener('click', function (e) {
      // console.log(e.target)  // e.target是我们点击的对象
      // 我们只有点击了 a 才会 进行 添加类和删除类操作 
      // console.log(e.target.tagName)  // e.target.tagName 点击那个对象的 标签名
      if (e.target.tagName === 'A') {
        // console.log('我选的是a')
        // 排他思想 ，先移除原来的active  
        document.querySelector('.tab-nav .active').classList.remove('active')
        //当前元素添加 active  是 e.target
        // this 指向ul 不能用this 
        e.target.classList.add('active')

        // 下面大盒子模块
        // console.log(e.target.dataset.id)
        const i = +e.target.dataset.id
        // 排他思想 ，先移除原来的active 
        document.querySelector('.container-boss .active').classList.remove('active')
        // 对应的大盒子 添加 active 
        // document.querySelector(`.container-boss .item:nth-child(${i + 1})`).classList.add('active')
        containers[i].classList.add('active')
      }
    })