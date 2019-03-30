$(document).ready(function () {
	
	 $('#btn').click(function () {
	 	if($('#name').val() == "") {
	 		$('#name').css('border-color', 'red');
	 	} else {
	 		$('#name').css('border-color', 'green');
	 	}

	 	if($('#email').val() == "") {
	 		$('#email').css('border-color', 'red');
	 	} else {
	 		$('#email').css('border-color', 'green');
	 	}

	 	if($('#phone').val() == "") {
	 		$('#phone').css('border-color','red');
	 	} else {
	 		$('#phone').css('border-color','green');
	 	}

	 	if($('#address').val() == "") {
	 		$('#address').css('border-color', 'red');
	 	} else {
	 		$('#address').css('border-color', 'green');
	 	}

	 	if($('#ipl').is(':checked') == false) {
	 		console.log("checked false 1233123123");	 		
	 		//$('.ipl_main_div').css("border", "1px solid green !important");

	 		$('#ipl').css('outline-color', 'red');
			$('#ipl').css('outline-style', 'solid');
			$('#ipl').css('outline-width', 'thin');
	 	} else {
	 		//console.log("checked true");
	 		$('.ipl .custom-control-label::before').css("border", "1px solid green !important");
	 	}


	 	//$('#ipl').attr('checked', true);
	
	 	// var status = $('#ipl').is(':checked');
	 	// alert(status);

	 	// var states = $('states').val[0];
	 	// console.log("states val");
	 	// console.log(states);


	 	// if(states == "DEFAULT") {
	 	// 	console.log("Select if part!!");
	 	// 	//$('.dropdown').text('select any one');
	 	// 	//$('#error').html('select any one');	
	 	// } else {
	 	// 	console.log("Select else part");
	 	// }

	 	var state = $('#states').val();
	 	if(state == "DEFAULT") {
	 		//$('#state').css('outline-color', 'red');
	 		//console.log(state);
			$('#error').after('*select any one');
	 	} else {
	 		console.log(state);
	 	}



	 	});

	 	//$('#ipl').attr('checked', false);
	 	//$('#test_match').attr('checked', false);

	 	//$('#ipl').click(function() {
	 	//	C
	 		 // return false;
	 	//	 if(status) {
	 	//	 		$('#ipl').attr('unchecked', true);
	 		 //	$('#ipl').attr('checked', true);

	 			//alert(status); 	
	 	//	 } else {

	 		 //	$('#ipl').attr('unchecked', true);
	 		 	//alert(status);
	 	//	 }

	 		 // if(status) {
	 			// alert(status); 	
	 		 // } else {
	 		 // 	alert(status);
	 		 // }
	 		
	 		//$('#ipl').attr('checked', true);



	 	//});

	 	$('#ipl').click( function() {
	 		var status = $('#ipl').is(':checked');
	 		if(status == true) {
	 			$('#ipl').attr('unchecked', false);
	 		} else {
	 			$('#ipl').attr('unchecked', true);
	 		}
	 	});

	 	$('#test_match').click( function() {
	 		var status = $('#test_match').is(':checked');
	 		if(status == true) {
	 			$('#test_match').attr('unchecked', false);
	 		} else {
	 			$('#test_match').attr('unchecked', true);
	 		}
	 	});

	 	// $('#test_match').click(function() {
	 	// 	var status = $('#test_match').is(':checked');
	 	// 	if(status == true) {
	 	// 		$('#test_match').attr('unchecked', false);
	 	// 	} else {
	 	// 		$('#test_match').attr('unchecked', true);
	 	// 	}
	 	// });



	 	
	 	

});

	 	
	 	


	 	

	 	



