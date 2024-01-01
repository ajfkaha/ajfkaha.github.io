const  btn_primary = document.querySelector('.btn-primary')
const demo_card_wrapper = document.querySelector('.demo-card-wrapper')
btn_primary.addEventListener('click',function(){
    demo_card_wrapper.innerHTML +=  '<div class="demo-card demo-card--step1" <div class="head"><div class="number-box"><span>01</span></div><h2><span class="small">Subtitle</span> Technology</h2></div><div class="body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p><img src="http://placehold.it/1000x500" alt="Graphic"></div></div>'
})