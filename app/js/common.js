$(function() {

	window.onload = function () {
	    document.getElementById("password1").onchange = validatePassword;
	    document.getElementById("password2").onchange = validatePassword;
	}
	function validatePassword(){
	var pass2=document.getElementById("password2").value;
	var pass1=document.getElementById("password1").value;
	if(pass1!=pass2)
	    document.getElementById("password2").setCustomValidity("Passwords Don't Match");
	else
	    document.getElementById("password2").setCustomValidity('');
	//empty string means no validation error
	}

	

	$('#formx').submit(function(){
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: $(this).serialize(),
			success: function(data){
				console.log('message: ' + data);
			};
			error: function(){
				alert('Dont mail');
			}
			});
		});

});
