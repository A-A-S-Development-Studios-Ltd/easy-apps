component extends="Master" {
	/**
	* @CFLintIgnore FUNCTION_TYPE_ANY
	**/
	remote any function sendInfo() {
		var data = getJson();
		var formName = "";
		var formEmail = "";
		
		if(structKeyExists(data, "name")){
			formName = data.name;
		} 
		
		if(structKeyExists(data, "cname")){
			formName = data.cname;
		} 
		
		if(!formName.len()){
			return "invalid-name";
		}	
		
		if(structKeyExists(data, "email")){
			formEmail = data.email;
		} 
		
		if(structKeyExists(data, "cemail")){
			formEmail = data.cemail;
		}
		
		if(!isValid("email", formEmail)){			
			return "invalid-email";
		}
		
		var message = "The customer submitted the following info:<br><br>Name: #formName#<br>Email: #formEmail# <br> Message: #data.message#";
		sendEmail(to = "aafehr@gmail.com", subject = "Someone filled out the contact request form", body = message);
		return "success";
	}
}
