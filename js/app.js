
$(document).ready(function(){
	
	//Click on the check box to draw a line through the list item.
	$('.items').on("click", ".check-box", function(){
		$(this).parent().toggleClass("check");
	});

	$(".items").on("click", ".trash", function(event){
		$(this).parent().fadeOut(800, function(){
			$(this).remove();
			event.stopPropagation();
			getItems();
		});
		
	});

	$("input[type='text'").keypress(function(event){
		if(event.which === 13){
			var newItem = $(this).val();
		if($(this).val().length == 0){
			alert("Please enter a value.");
		}else {
			$('.items').append("<li><span class='trash'><i class='fa fa-trash'></i></span><span class='check-box'><i class='fa fa-check'></i></span>" + newItem + "</li>");
			$(this).val("");
			var shoppingItems = $(".items").html();
			localStorage.setItem('shoppingItems', shoppingItems);
			
		}

		}
	});

		if(localStorage.getItem('shoppingItems')){
			$(".items").html(localStorage.getItem('shoppingItems'))
		}

		$("#clear").click(function(){
			window.localStorage.clear();
			location.reload();
			
		});

});
	


	


	