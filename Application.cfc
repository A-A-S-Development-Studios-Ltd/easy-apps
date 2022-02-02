component output="false" {
	cfheader( name="Access-Control-Allow-Origin", value="*");
	cfheader( name="Access-Control-Allow-Headers", value="*");
	function onRequestStart() {
		if (cgi.REQUEST_METHOD == "OPTIONS") {
			abort;
		}		
	}
}