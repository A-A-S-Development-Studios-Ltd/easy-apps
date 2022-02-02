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
			type="html"){
				writeOutput(body);
			}
		}
	}