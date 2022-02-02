component extends="Master" {
	/**
	* @CFLintIgnore FUNCTION_TYPE_ANY
	**/
	remote any function sendInfo() {
		var data = getJson();
		if(!isValid("email", data.email)){
			cfheader(statusCode=400, statusText="Invalid Email...");
			return false;
		}
		var message = "The customer submitted the following info:<br><br>Name: #data.name#<br>Email: #data.email# <br> Message: #data.message#";
		sendEmail(to = "aafehr@gmail.com", subject = "Someone filled out the contact request form", body = message);
		return "success";
	}
}
