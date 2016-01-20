$(document).ready(start);

function start(e){

	$("#form-box").on("submit", function(e){
		e.preventDefault();
	});

	var $name = $("#nameinput");
	var $form = $("#form-box");
	var $email = $("#emailinput");
	var $web = $("#webinput");

	$form.on("submit", validate);


	function validate(e){
		var foundError = true;


		if($name.val() === ""){
			foundError = true;
			$("#name").siblings("#name-error").addClass("active-error").html("Name cannot be left empty");	
		}

		if($email.val() === ""){
			foundError = true;
			$("#email").siblings("#email-error").addClass("active-error").html("Email cannot be left empty");
		}

		if($web.val() === ""){
			foundError = true;
			$("#web").siblings("#web-error").addClass("active-error").html("Website cannot be left empty");
		}
		if($email.val() === "@"){
			foundError = true;
			$("#email").siblings("#email-error").addClass("active-error").html("Email must contain @");
		}

	}

}

	// 	if($email.val() === ""){
	// 		foundError = true;
	// 		$("email").siblings("#email-error").addClass("active-error").html("Email cannot be left empty");
	// 	}

	// 	if ($borderLine.val() === ""){
	// 		foundError = false;
	// 		$("input").css("border-left", "solid 5px red");
	// 	}
	// }








// // $.val()
// $.html()
// $.on()
// $.css()
// $.show()
// $.hide()


// ERRORS 
// Name cannot be left empty
// Email cannot be left empty
// Email must contain an '@'
// Website cannot be left empty
// Website must start with http://
// Message cannot be left empty