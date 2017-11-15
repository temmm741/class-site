
$(document).ready(function(){
	var documentheight = $(document).height();
	$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
		console.log (scrollTop)	
		if(scrollTop > documentheight/4){
		$("#paragraph").addClass("show")	
		}
		if(scrollTop > documentheight/3){
		$("#paragraph").addClass("notsticky")	
		}
		
	})
})

