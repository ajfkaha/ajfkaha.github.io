$(function(){
	var pageNum = 0;
	var count = $('.runPage').length;
	for (var i = 0; i < $('.runPage').length; i++) {
		console.log($('.runPage').length);
		$('.runPage').eq(i).css('z-index',(2*count+1)-2*i);
		$('.runPage').eq(i).children('div').css('z-index',(2*count+1)-2*i);
		$('.runPage').eq(i).children('img').css('z-index',(2*count)-2*i);
	};

	$('.nextBtn').bind('click',function(){
			if ( pageNum <= $('.runPage').length-1 ) {
				runNext(pageNum);
			pageNum++;
			};
			console.log(pageNum);	
			// console.log(index);					
	});

	function runNext(index){
		console.log(index);
		$('.runPage').eq(index).addClass('runClass');
		zIndexNext(index,$('.runPage').eq(index));
	}

	function zIndexNext(index,element){
		console.log(index,element);
		if ( index >= 1 ) {
			element.css('z-index',count+2*index);
		};	
		setTimeout(function(){
			if (index==0) {
				element.css('z-index',count+2*index);
			};
			element.children('div').css('opacity',0);
			element.children('img').css('opacity',1);		
		},1000);
	}

	$('.lastBtn').bind('click',function(){
			if ( pageNum >= 1 ) {				
			pageNum--;
			runLast(pageNum);
			};
			console.log(pageNum);					
	});

	function runLast(index){
		$('.runPage').eq(index).removeClass('runClass');
		zIndexLast(index,$('.runPage').eq(index));
	}

	function zIndexLast(index,element){
		if (index == 0) {
			element.css('z-index',(2*count+1)-2*index);
		};
		setTimeout(function(){
			element.css('z-index',(2*count+1)-2*index);
			element.children('div').css('opacity',1);
			element.children('img').css('opacity',0);		
		},1000);
	}
});