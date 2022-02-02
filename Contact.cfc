component extends="Master" {
	/**
	* @CFLintIgnore FUNCTION_TYPE_ANY
	**/
	remote any function sendInfo() {
		var data = getJson();
		var message = "Name: #data.name#<br>Email: #data.email# <br> Message: #data.message#";
		sendEmail(to = "dev@aguilar.ca", subject = "buy stuff", body = message);
		return "http://www.google.ca";
	}
}
