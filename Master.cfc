component  output="false"{
	/**
	 * @CFLintIgnore FUNCTION_TYPE_ANY
	**/
	public any function getJson() {

		return deserializeJSON(toString(getHTTPRequestData().content));
	}
	/**
	* Sends email
	*
	* @to 			The target email.
	* @subject 		The subject of the email
	* @body 		The body of the email.
	*
	* @CFLintIgnore UNUSED_METHOD_ARGUMENT 
	*
	* */
	public void function sendEmail(
		required string to,
		required string subject,
		required string body
	) {
		cfmail(
			from="noreply@easypdfsigner.ca",
			to="#to#",
			subject="#subject#",
			type="html",
			server="email-smtp.ca-central-1.amazonaws.com",
			username = "AKIA4L2J4UHAIOPNQQ2S",
			password="BGV+7zK1qXdKotpZKBPSGM75B8G2naQj+RF4I1DWpUIF",
			port=587,
			usetls=true){
				writeOutput(body);
			}
		}
	}